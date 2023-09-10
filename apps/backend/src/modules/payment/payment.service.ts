import { EntityManager } from '@mikro-orm/mysql';
import { Injectable } from '@nestjs/common';
import {
  addDaysToDate,
  addMonthsToDate,
} from '../../core/services/helper.service';
import { Package } from '../package/entities/package.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { User } from '../user/entities/user.entity';
import { PaymentLog } from './entities/payment-log.entity';

@Injectable()
export class PaymentService {
  constructor(private em: EntityManager) {}
  async getLDollarBalance(userId: number) {
    const user = await this.em.findOneOrFail(User, { id: userId });
    return { lDollarBalance: user.l$Balance };
  }
  async payForPackage(data: any) {
    let subscriptionCost: number;
    const user = await this.em.findOneOrFail(User, { id: data.packageId });
    const selectedPackage = await Package.findOne({
      where: { id: data.packageId },
    });
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
    if (user.l$Balance < subscriptionCost) {
      return { success: false, message: 'Balance Too Low' };
    }

    //Create log
    PaymentLog.create({
      userUuid: user.uuid,
      amount: subscriptionCost,
    });

    user.l$Balance -= subscriptionCost;
    await this.em.persistAndFlush(user);

    //removes free trial if exists for this bot
    Subscription.destroy({
      where: { packageId: 1, botId: data.botId },
    })
      .then(() => {
        Subscription.findOne({ where: { botId: data.botId } }).then((sub) => {
          const currentDate = new Date();

          //updates subscription if it already exists, otherwise it should create it
          if (sub) {
            let endDate = sub.subscriptionEnd;
            switch (data.dateUnit) {
              case 'Week':
                if (endDate > currentDate) {
                  endDate = addDaysToDate(endDate, data.amountOfDateUnits * 7);
                } else {
                  endDate = addDaysToDate(
                    currentDate,
                    data.amountOfDateUnits * 7,
                  );
                }
                break;
              case 'Month':
                if (endDate > currentDate) {
                  endDate = addMonthsToDate(endDate, data.amountOfDateUnits);
                } else {
                  endDate = addMonthsToDate(
                    currentDate,
                    data.amountOfDateUnits,
                  );
                }
                break;
            }
            //updates subscription length
            return Subscription.update(
              {
                subscriptionStart: currentDate,
                subscriptionEnd: endDate,
              },
              {
                where: {
                  botId: data.botId,
                  packageId: data.packageId,
                },
              },
            )
              .then(() => {
                console.log(endDate);
                return {
                  success: true,
                  message: 'Payment Successful',
                };
              })
              .catch((err) => {
                console.error(err);
                return {
                  success: false,
                  message: 'Unknown Error Occured',
                };
              });
          } else {
            let endDate = new Date();
            switch (data.dateUnit) {
              case 'Week':
                endDate = addDaysToDate(endDate, data.amountOfDateUnits * 7);
                break;
              case 'Month':
                endDate = addMonthsToDate(endDate, data.amountOfDateUnits);
                break;
            }
            //create subscription
            return Subscription.create({
              packageId: data.packageId,
              subscriptionStart: currentDate,
              subscriptionEnd: endDate,
              botId: data.botId,
            })
              .then(() => ({
                success: true,
                message: 'Payment Successful',
              }))
              .catch((err) => {
                console.error(err);
                return {
                  success: false,
                  message: 'Unknown Error Occured',
                };
              });
          }
        });
      })
      .catch((err) => console.error(err));
  }
}
