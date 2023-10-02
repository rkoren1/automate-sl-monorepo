import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import * as crypto from 'crypto';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ tableName: 'bot' })
export class BotDb {
  @PrimaryKey()
  id: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  loginFirstName: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  loginLastName: string;

  @Property({ type: 'string', nullable: false })
  private loginPassword: string;

  @Property({
    name: 'loginPassword',
  })
  set encryptPassword(pass) {
    this.loginPassword = encrypt(pass);
  }
  @Property({
    persist: false,
  })
  get decryptedPassword() {
    if (this.loginPassword) return decrypt(this.loginPassword);
  }

  @Property({
    type: 'string',
    nullable: false,
  })
  loginSpawnLocation: string;
  @Property({
    type: 'int',
    nullable: false,
  })
  userId: number;
  @Property({
    type: 'boolean',
    nullable: false,
  })
  running: boolean;
  @Property({
    type: 'boolean',
    nullable: true,
  })
  shouldRun: boolean;
  @Property({
    type: 'string',
  })
  loginRegion: string;
  @Property({
    type: 'int',
    nullable: true,
  })
  packageId: number;
  @Property({
    type: 'string',
    nullable: false,
  })
  uuid: string;
  @Property({
    type: 'string',
    nullable: false,
  })
  imageId: string;
  @Property({
    type: 'int',
  })
  actionId: number;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => Subscription, (subscription) => subscription.bot)
  subscriptions = new Collection<Subscription>(this);
}

function encrypt(text: string) {
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

function decrypt(encryptedData: string) {
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
