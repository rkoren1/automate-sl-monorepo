import { EntityManager } from '@mikro-orm/mysql';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ExtensionPeriodUnit, Result } from '../../core/constants/constants';
import { addDaysToDate } from '../../core/services/helper.service';
import { BotDb } from '../bot/entities/bot.entity';
import { PaymentLog } from '../payment/entities/payment-log.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { User } from '../user/entities/user.entity';
import { AddBalanceBodyDto } from './dto/add-balance-body.dto';
import { PaySubscriptionDto } from './dto/pay-subscription.dto';
import { UpdateTerminalOwnerBodyDto } from './dto/update-terminal-owner-body.dto';
import { TerminalOwner } from './entities/terminal-owner.entity';

@Injectable()
export class TerminalService {
  constructor(private em: EntityManager) {}

  async getAllBotsFromUserUuid(uuid: string) {
    const bots = await this.em.find(BotDb, {
      uuid: uuid,
    });
    return bots;
  }

  paySubscription(data: PaySubscriptionDto) {
    return new Promise((resolve, reject) => {
      const today = new Date();
      let endDate;
      if (data.extensionTimeUnit === ExtensionPeriodUnit.WEEK) {
        endDate = addDaysToDate(today, data.extensionTime * 7);
      } else if (data.extensionTimeUnit === ExtensionPeriodUnit.MONTH) {
        endDate = addDaysToDate(today, data.extensionTime * 30);
      } else {
        return reject('Invalid time unit');
      }
      Subscription.create({
        subscriptionStart: today,
        subscriptionEnd: endDate,
        botId: data.botId,
        packageId: data.packageId,
      })
        .then(() => resolve(endDate))
        .catch((err) => reject(err));
    });
  }
  generatePassword(length) {
    let password = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return password;
  }
  async terminalRegister(data) {
    const hashedPass = await bcrypt.hash(data.password, 10);
    const newUser = this.em.create(User, {
      email: data.email,
      uuid: data.uuid,
      avatarName: data.avatarName,
      password: hashedPass,
      l$Balance: 0,
    });
    await this.em.persistAndFlush(newUser);
    return data.password;
  }
  addTerminal(data) {
    return new Promise((resolve, reject) => {
      return TerminalOwner.create({
        avatarName: data.avatarName,
        avatarUuid: data.avatarUUID,
        parcelName: data.parcelName,
        slUrl: data.slUrl,
        lastActive: data.lastActive,
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  async isRegistered(uuid: string) {
    return await this.em.findOneOrFail(User, { uuid: uuid });
  }
  updateTerminalActivity = (data) => {
    return new Promise((resolve, reject) => {
      return TerminalOwner.update(
        { lastActive: data.lastActive },
        { where: { id: data.terminalId } },
      )
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  };
  updateTerminalOwner(data: UpdateTerminalOwnerBodyDto) {
    return new Promise((resolve, reject) => {
      const today = new Date();
      return TerminalOwner.update(
        {
          avatarName: data.avatarName,
          avatarUuid: data.avatarUUID,
          parcelName: data.parcelName,
          slUrl: data.slUrl,
          lastActive: today,
        },
        { where: { id: data.terminalId } },
      )
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }
  async setUserPassword(userUUID: string, password: string) {
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await this.em.findOneOrFail(User, { uuid: userUUID });
    user.password = hashedPass;
    await this.em.persistAndFlush(user);
    return user;
  }
  addBalance = async (data: AddBalanceBodyDto) => {
    PaymentLog.create({ userUuid: data.UUID, amount: data.lDollarAmount });
    const user = await this.em.findOneOrFail(User, { uuid: data.UUID });
    user.l$Balance += data.lDollarAmount;
    await this.em.persistAndFlush(user);
    return user.l$Balance;
  };

  async getBalance(uuid: string) {
    const user = await this.em.findOneOrFail(User, { uuid: uuid });
    if (user)
      return {
        result: Result.OK,
        resulttext: 'get_balance_success',
        custom: { balance: user.l$Balance },
      };
    else
      return {
        result: Result.FAIL,
        resulttext: 'get_balance_fail',
        custom: { balance: -1 },
      };
  }
}
