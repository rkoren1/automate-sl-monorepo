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
    const selectedPackage = await this.em.findOne(Package, {
      id: data.packageId,
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
    const freeTrialSub = await this.em.findOne(Subscription, {
      packageId: 1,
      botId: data.botId,
    });
    await this.em.removeAndFlush(freeTrialSub);
    const subscription = await this.em.findOne(Subscription, {
      botId: data.botId,
    });
    const currentDate = new Date();

    //updates subscription if it already exists, otherwise it should create it
    if (subscription) {
      let endDate = subscription.subscriptionEnd;
      switch (data.dateUnit) {
        case 'Week':
          endDate = addDaysToDate(endDate, data.amountOfDateUnits * 7);
          break;
        case 'Month':
          endDate = addMonthsToDate(endDate, data.amountOfDateUnits);
          break;
      }
      //updates subscription length
      const sub = this.em.findOneOrFail(Subscription, {
        botId: data.botId,
        packageId: data.packageId,
      });
      this.em.assign(sub, {
        subscriptionStart: currentDate,
        subscriptionEnd: endDate,
      });
      this.em
        .persistAndFlush(sub)
        .then(() => {
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
      const sub = this.em.create(Subscription, {
        packageId: data.packageId,
        subscriptionStart: currentDate,
        subscriptionEnd: endDate,
        botId: data.botId,
      });
      this.em
        .persistAndFlush(sub)
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
  }
}
