import { Migration } from '@mikro-orm/migrations';

export class Migration20231002071243 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `bot_log` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `bot_uuid` varchar(255) not null, `message` varchar(255) not null, `event` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `discord_settings` (`id` int unsigned not null auto_increment primary key, `bot_id` int not null, `web_hook_url` varchar(255) not null, `sl_group_uuid` varchar(255) not null, `disc_channel_id` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `package` (`id` int unsigned not null auto_increment primary key, `package_name` varchar(255) not null, `package_description` varchar(255) not null, `price_per_week` int not null, `discount` int not null, `price_per_month` int not null, `coupon_id` int not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `payment_log` (`id` int unsigned not null auto_increment primary key, `user_uuid` varchar(255) not null, `amount` int not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `shared_bot` (`id` int unsigned not null auto_increment primary key, `login_first_name` varchar(255) not null, `login_last_name` varchar(255) not null, `login_password` varchar(255) not null, `login_spawn_location` varchar(255) not null, `running` tinyint(1) not null, `login_region` varchar(255) not null, `package_id` int null, `uuid` varchar(255) not null, `image_id` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `shared_bot_user_subscription` (`id` int unsigned not null auto_increment primary key, `shared_bot_id` int unsigned not null, `subscription_start` datetime null, `subscription_end` datetime null, `package_id` int not null, `user_id` int not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `shared_bot_user_subscription` add index `shared_bot_user_subscription_shared_bot_id_index`(`shared_bot_id`);');

    this.addSql('create table `terminal` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `api_key` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `email` varchar(255) not null, `password` varchar(255) not null, `refresh_token` varchar(255) not null, `ldollar_balance` int not null, `uuid` varchar(255) not null, `avatar_name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user` add unique `uuid`(`uuid`);');

    this.addSql('create table `bot` (`id` int unsigned not null auto_increment primary key, `login_first_name` varchar(255) not null, `login_last_name` varchar(255) not null, `login_password` varchar(255) not null, `loginPassword` varchar(255) not null, `login_spawn_location` varchar(255) not null, `user_id` int unsigned not null, `running` tinyint(1) not null, `should_run` tinyint(1) null, `login_region` varchar(255) not null, `package_id` int null, `uuid` varchar(255) not null, `image_id` varchar(255) not null, `action_id` int not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `bot` add index `bot_user_id_index`(`user_id`);');

    this.addSql('create table `subscription` (`id` int unsigned not null auto_increment primary key, `subscription_start` datetime not null, `subscription_end` datetime not null, `package_id` int unsigned not null, `bot_id` int unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `subscription` add index `subscription_bot_id_index`(`bot_id`);');
    this.addSql('alter table `subscription` add index `subscription_package_id_index`(`package_id`);');

    this.addSql('alter table `shared_bot_user_subscription` add constraint `shared_bot_user_subscription_shared_bot_id_foreign` foreign key (`shared_bot_id`) references `shared_bot` (`id`) on update cascade;');

    this.addSql('alter table `bot` add constraint `bot_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade;');

    this.addSql('alter table `subscription` add constraint `subscription_bot_id_foreign` foreign key (`bot_id`) references `bot` (`id`) on update cascade;');
    this.addSql('alter table `subscription` add constraint `subscription_package_id_foreign` foreign key (`package_id`) references `package` (`id`) on update cascade;');
  }

}
