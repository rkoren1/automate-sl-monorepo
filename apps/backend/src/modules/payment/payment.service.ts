import { Injectable } from '@nestjs/common';
import {
  addDaysToDate,
  addMonthsToDate,
} from '../../core/services/helper.service';
import { PrismaService } from '../../providers/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async getLDollarBalance(userId: number) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id: userId } });
      return { lDollarBalance: user.lDollarBalance };
    } catch (err) {
      console.error(err);
      return { lDollarBalance: -1 };
    }
  }

  payForPackage(data: {
    userId: number;
    packageId: number;
    dateUnit: string;
    amountOfDateUnits: number;
    botId: number;
  }) {
    return new Promise<{ success: boolean; message: string }>(
      (resolve, reject) => {
        let subscriptionCost: number;
        //optimize -> call user and package at same time
        //calculate if user has enough money and calculate how much his package costs
        this.prisma.user
          .findUnique({ where: { id: data.userId } })
          .then((user) => {
            this.prisma.subPackage
              .findFirst({ where: { id: data.packageId } })
              .then((selectedPackage) => {
                switch (data.dateUnit) {
                  case 'Week':
                    subscriptionCost =
                      data.amountOfDateUnits * selectedPackage.pricePerWeek;
                    break;
                  case 'Month':
                    subscriptionCost =
                      data.amountOfDateUnits * selectedPackage.pricePerMonth;
                    break;
                }
                if (user.lDollarBalance < subscriptionCost) {
                  return resolve({
                    success: false,
                    message: 'Balance Too Low',
                  });
                }

                //Create log
                this.prisma.paymentLog.create({
                  data: {
                    userUuid: user.uuid,
                    amount: subscriptionCost,
                  },
                });
                //Deduct the money
                this.prisma.user.update({
                  data: {
                    lDollarBalance: user.lDollarBalance - subscriptionCost,
                  },
                  where: { id: data.userId },
                });

                //removes free trial if exists for this bot
                this.prisma.subscription
                  .deleteMany({ where: { packageId: 1, botId: data.botId } })
                  .then(() => {
                    this.prisma.subscription
                      .findFirst({ where: { botId: data.botId } })
                      .then((sub) => {
                        const currentDate = new Date();

                        //updates subscription if it already exists, otherwise it should create it
                        if (sub) {
                          let endDate = sub.subscriptionEnd;
                          switch (data.dateUnit) {
                            case 'Week':
                              if (endDate > currentDate) {
                                endDate = addDaysToDate(
                                  endDate,
                                  data.amountOfDateUnits * 7,
                                );
                              } else {
                                endDate = addDaysToDate(
                                  currentDate,
                                  data.amountOfDateUnits * 7,
                                );
                              }
                              break;
                            case 'Month':
                              if (endDate > currentDate) {
                                endDate = addMonthsToDate(
                                  endDate,
                                  data.amountOfDateUnits,
                                );
                              } else {
                                endDate = addMonthsToDate(
                                  currentDate,
                                  data.amountOfDateUnits,
                                );
                              }

                              break;
                          }
                          //updates subscription length
                          return this.prisma.subscription
                            .updateMany({
                              data: {
                                subscriptionStart: currentDate,
                                subscriptionEnd: endDate,
                              },
                              where: {
                                botId: data.botId,
                                packageId: data.packageId,
                              },
                            })
                            .then(() => {
                              console.log(endDate);
                              return resolve({
                                success: true,
                                message: 'Payment Successful',
                              });
                            })
                            .catch((err) => {
                              console.error(err);
                              return reject({
                                success: false,
                                message: 'Unknown Error Occured',
                              });
                            });
                        } else {
                          let endDate = new Date();
                          switch (data.dateUnit) {
                            case 'Week':
                              endDate = addDaysToDate(
                                endDate,
                                data.amountOfDateUnits * 7,
                              );
                              break;
                            case 'Month':
                              endDate = addMonthsToDate(
                                endDate,
                                data.amountOfDateUnits,
                              );
                              break;
                          }
                          //create subscription
                          return this.prisma.subscription
                            .create({
                              data: {
                                packageId: data.packageId,
                                subscriptionStart: currentDate,
                                subscriptionEnd: endDate,
                                botId: data.botId,
                              },
                            })
                            .then(() =>
                              resolve({
                                success: true,
                                message: 'Payment Successful',
                              }),
                            )
                            .catch((err) => {
                              console.error(err);
                              return reject({
                                success: false,
                                message: 'Unknown Error Occured',
                              });
                            });
                        }
                      });
                  })
                  .catch((err) => console.error(err));
              });
          });
      },
    );
  }
}
