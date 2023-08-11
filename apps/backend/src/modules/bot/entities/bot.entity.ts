import * as crypto from 'crypto';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subscription } from '../../subscription/entities/subscription.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'bot' })
export class BotDb {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    nullable: false,
    name: 'login_first_name',
  })
  loginFirstName: string;
  @Column({
    nullable: false,
    name: 'login_last_name',
  })
  loginLastName: string;
  @Column({
    nullable: false,
    name: 'login_password',
  })
  loginPassword: string;
  @Column({
    nullable: false,
    name: 'login_spawn_location',
  })
  loginSpawnLocation: string;
  @Column({
    nullable: false,
    name: 'user_id',
  })
  userId: number;
  @Column({
    nullable: false,
  })
  running: boolean;
  @Column({
    name: 'login_region',
  })
  loginRegion: string;
  @Column({
    nullable: true,
    name: 'package_id',
  })
  packageId: number;
  @Column({
    nullable: false,
  })
  uuid: string;
  @Column({
    nullable: false,
    name: 'image_id',
  })
  imageId: string;
  @Column({
    name: 'action_id',
  })
  actionId: number;

  @BeforeInsert()
  @BeforeUpdate()
  beforeBotupsert() {
    this.loginPassword = encrypt(this.loginPassword);
  }

  @AfterLoad()
  afterGetBot() {
    this.loginPassword = decrypt(this.loginPassword);
  }

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @OneToMany(() => Subscription, (subscription) => subscription.botId)
  subscriptions: Subscription[];
}

function encrypt(text) {
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
