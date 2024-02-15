import { Injectable } from '@nestjs/common';
import { BotDb, Prisma } from '@prisma/client';
import * as crypto from 'crypto';
import { PrismaService } from '../../providers/prisma.service';

@Injectable()
export class BotRepository {
  constructor(private prisma: PrismaService) {}

  private encrypt(text: string) {
    const iv = process.env.LOGIN_PASS_IV;
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(process.env.LOGIN_PASS_KEY),
      iv,
    );
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
  }

  private decrypt(encryptedData: string) {
    if (encryptedData === undefined) return null;
    const iv = process.env.LOGIN_PASS_IV;
    const encryptedText = Buffer.from(encryptedData, 'hex');

    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      Buffer.from(process.env.LOGIN_PASS_KEY),
      iv,
    );

    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  }

  async create(params: Prisma.BotDbCreateArgs): Promise<BotDb> {
    const { data } = params;
    data.loginPassword = this.encrypt(data.loginPassword);
    return this.prisma.botDb.create({ data });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BotDbWhereUniqueInput;
    where?: Prisma.BotDbWhereInput;
    orderBy?: Prisma.BotDbOrderByWithRelationInput;
    select?: Prisma.BotDbSelect;
  }) {
    const { skip, take, cursor, where, orderBy, select } = params;
    return (
      await this.prisma.botDb.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
        select,
      })
    ).map((bot) => ({
      ...bot,
      loginPassword: this.decrypt(bot.loginPassword),
    }));
  }

  async findFirst(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BotDbWhereUniqueInput;
    where?: Prisma.BotDbWhereInput;
    orderBy?: Prisma.BotDbOrderByWithRelationInput;
    select?: Prisma.BotDbSelect;
  }) {
    const { skip, take, cursor, where, orderBy, select } = params;
    const result = await this.prisma.botDb.findFirst({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select,
    });
    result.loginPassword = this.decrypt(result.loginPassword);
    return result;
  }

  async update(params: {
    where: Prisma.BotDbWhereUniqueInput;
    data: Prisma.BotDbUpdateInput;
  }): Promise<BotDb> {
    const { where, data } = params;
    if (data.loginPassword && typeof data.loginPassword === 'string')
      data.loginPassword = this.encrypt(data.loginPassword);
    const result = await this.prisma.botDb.update({ where, data });
    result.loginPassword = this.decrypt(result.loginPassword);
    return result;
  }

  async delete(params: {
    where: Prisma.BotDbWhereUniqueInput;
  }): Promise<BotDb> {
    const { where } = params;
    const result = await this.prisma.botDb.delete({ where });
    result.loginPassword = this.decrypt(result.loginPassword);
    return result;
  }
}