-- CreateTable
CREATE TABLE `bot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login_first_name` VARCHAR(255) NOT NULL,
    `login_last_name` VARCHAR(255) NOT NULL,
    `login_password` VARCHAR(255) NOT NULL,
    `login_spawn_location` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NULL,
    `running` BOOLEAN NOT NULL,
    `should_run` BOOLEAN NULL,
    `login_region` VARCHAR(255) NULL,
    `package_id` INTEGER NULL,
    `uuid` VARCHAR(36) NOT NULL,
    `image_id` VARCHAR(36) NOT NULL,
    `action_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bot_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `bot_uuid` VARCHAR(255) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `event` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coupon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `duration` INTEGER NOT NULL,
    `uses` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discord_settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bot_id` INTEGER NOT NULL,
    `web_hook_url` VARCHAR(255) NULL,
    `sl_group_uuid` VARCHAR(255) NULL,
    `disc_channel_id` VARCHAR(255) NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_im_avatar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(255) NOT NULL,
    `group_im_list_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `group_im_list_id`(`group_im_list_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_im_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `list_name` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `package_name` VARCHAR(255) NOT NULL,
    `package_description` VARCHAR(255) NULL,
    `price_per_week` INTEGER NOT NULL,
    `discount` INTEGER NOT NULL,
    `price_per_month` INTEGER NOT NULL,
    `coupon_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `coupon_id`(`coupon_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_uuid` VARCHAR(36) NULL,
    `amount` INTEGER NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `user_uuid`(`user_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shared_bot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login_first_name` VARCHAR(255) NOT NULL,
    `login_last_name` VARCHAR(255) NOT NULL,
    `login_password` VARCHAR(255) NOT NULL,
    `login_spawn_location` VARCHAR(255) NOT NULL,
    `running` BOOLEAN NOT NULL,
    `login_region` VARCHAR(255) NULL,
    `package_id` INTEGER NULL,
    `uuid` VARCHAR(36) NOT NULL,
    `image_id` VARCHAR(36) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shared_bot_user_subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shared_bot_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `subscription_start` DATETIME(0) NULL,
    `subscription_end` DATETIME(0) NULL,
    `package_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    INDEX `package_id`(`package_id`),
    INDEX `shared_bot_id`(`shared_bot_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subscription_start` DATETIME(0) NOT NULL,
    `subscription_end` DATETIME(0) NOT NULL,
    `bot_id` INTEGER NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,
    `package_id` INTEGER NOT NULL,

    INDEX `package_id`(`package_id`),
    UNIQUE INDEX `subscription_package_id_bot_id_unique`(`bot_id`, `package_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `terminal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `api_key` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `terminal_owner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar_uuid` VARCHAR(255) NOT NULL,
    `avatar_name` VARCHAR(255) NOT NULL,
    `parcel_name` VARCHAR(255) NOT NULL,
    `sl_url` VARCHAR(255) NOT NULL,
    `last_active` DATETIME(0) NOT NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `refresh_token` VARCHAR(255) NULL,
    `l$_balance` INTEGER NULL,
    `uuid` VARCHAR(36) NULL,
    `avatar_name` VARCHAR(255) NULL,
    `created_at` DATETIME(0) NOT NULL,
    `updated_at` DATETIME(0) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `uuid`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bot` ADD CONSTRAINT `bot_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_im_avatar` ADD CONSTRAINT `group_im_avatar_ibfk_1` FOREIGN KEY (`group_im_list_id`) REFERENCES `group_im_list`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_im_list` ADD CONSTRAINT `group_im_list_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package` ADD CONSTRAINT `package_ibfk_1` FOREIGN KEY (`coupon_id`) REFERENCES `coupon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment_log` ADD CONSTRAINT `payment_log_ibfk_1` FOREIGN KEY (`user_uuid`) REFERENCES `user`(`uuid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shared_bot_user_subscription` ADD CONSTRAINT `shared_bot_user_subscription_ibfk_16` FOREIGN KEY (`shared_bot_id`) REFERENCES `shared_bot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shared_bot_user_subscription` ADD CONSTRAINT `shared_bot_user_subscription_ibfk_17` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shared_bot_user_subscription` ADD CONSTRAINT `shared_bot_user_subscription_ibfk_18` FOREIGN KEY (`package_id`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_ibfk_1` FOREIGN KEY (`bot_id`) REFERENCES `bot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_ibfk_2` FOREIGN KEY (`package_id`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
