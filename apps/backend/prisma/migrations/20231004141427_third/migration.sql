/*
  Warnings:

  - You are about to drop the column `action_id` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `image_id` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `login_first_name` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `login_last_name` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `login_password` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `login_region` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `login_spawn_location` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `package_id` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `should_run` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `bot` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `coupon` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `coupon` table. All the data in the column will be lost.
  - You are about to drop the column `coupon_id` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `package_description` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `package_name` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `price_per_month` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `price_per_week` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `package` table. All the data in the column will be lost.
  - You are about to drop the column `bot_id` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `package_id` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_end` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_start` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `api_key` on the `terminal` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `terminal` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `terminal` table. All the data in the column will be lost.
  - You are about to drop the column `avatar_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `l$_balance` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `bot_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `discord_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `group_im_avatar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `group_im_list` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mikro_orm_migrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shared_bot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shared_bot_user_subscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `terminal_owner` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[packageId,botId]` on the table `subscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginFirstName` to the `bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginLastName` to the `bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginPassword` to the `bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loginSpawnLocation` to the `bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageName` to the `package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerMonth` to the `package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerWeek` to the `package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `botId` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `packageId` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionEnd` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionStart` to the `subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apiKey` to the `terminal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `bot` DROP FOREIGN KEY `bot_ibfk_1`;

-- DropForeignKey
ALTER TABLE `group_im_avatar` DROP FOREIGN KEY `group_im_avatar_ibfk_1`;

-- DropForeignKey
ALTER TABLE `group_im_list` DROP FOREIGN KEY `group_im_list_ibfk_1`;

-- DropForeignKey
ALTER TABLE `package` DROP FOREIGN KEY `package_ibfk_1`;

-- DropForeignKey
ALTER TABLE `payment_log` DROP FOREIGN KEY `payment_log_ibfk_1`;

-- DropForeignKey
ALTER TABLE `shared_bot_user_subscription` DROP FOREIGN KEY `shared_bot_user_subscription_ibfk_1`;

-- DropForeignKey
ALTER TABLE `shared_bot_user_subscription` DROP FOREIGN KEY `shared_bot_user_subscription_ibfk_2`;

-- DropForeignKey
ALTER TABLE `shared_bot_user_subscription` DROP FOREIGN KEY `shared_bot_user_subscription_ibfk_3`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_ibfk_1`;

-- DropForeignKey
ALTER TABLE `subscription` DROP FOREIGN KEY `subscription_ibfk_2`;

-- DropIndex
DROP INDEX `subscription_packageId_botId_unique` ON `subscription`;

-- AlterTable
ALTER TABLE `bot` DROP COLUMN `action_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `image_id`,
    DROP COLUMN `login_first_name`,
    DROP COLUMN `login_last_name`,
    DROP COLUMN `login_password`,
    DROP COLUMN `login_region`,
    DROP COLUMN `login_spawn_location`,
    DROP COLUMN `package_id`,
    DROP COLUMN `should_run`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `user_id`,
    ADD COLUMN `actionId` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(0) NULL,
    ADD COLUMN `imageId` VARCHAR(36) NOT NULL,
    ADD COLUMN `loginFirstName` VARCHAR(255) NOT NULL,
    ADD COLUMN `loginLastName` VARCHAR(255) NOT NULL,
    ADD COLUMN `loginPassword` VARCHAR(255) NOT NULL,
    ADD COLUMN `loginRegion` VARCHAR(255) NULL,
    ADD COLUMN `loginSpawnLocation` VARCHAR(255) NOT NULL,
    ADD COLUMN `packageId` INTEGER NULL,
    ADD COLUMN `shouldRun` BOOLEAN NULL,
    ADD COLUMN `updatedAt` DATETIME(0) NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `coupon` DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(0) NULL,
    ADD COLUMN `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `package` DROP COLUMN `coupon_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `package_description`,
    DROP COLUMN `package_name`,
    DROP COLUMN `price_per_month`,
    DROP COLUMN `price_per_week`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `couponId` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(0) NULL,
    ADD COLUMN `packageDescription` VARCHAR(255) NULL,
    ADD COLUMN `packageName` VARCHAR(255) NOT NULL,
    ADD COLUMN `pricePerMonth` INTEGER NOT NULL,
    ADD COLUMN `pricePerWeek` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `subscription` DROP COLUMN `bot_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `package_id`,
    DROP COLUMN `subscription_end`,
    DROP COLUMN `subscription_start`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `botId` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(0) NULL,
    ADD COLUMN `packageId` INTEGER NOT NULL,
    ADD COLUMN `subscriptionEnd` DATETIME(0) NOT NULL,
    ADD COLUMN `subscriptionStart` DATETIME(0) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `terminal` DROP COLUMN `api_key`,
    DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `apiKey` VARCHAR(255) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(0) NULL,
    ADD COLUMN `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `avatar_name`,
    DROP COLUMN `created_at`,
    DROP COLUMN `l$_balance`,
    DROP COLUMN `refresh_token`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `avatarName` VARCHAR(255) NULL,
    ADD COLUMN `createdAt` DATETIME(0) NULL,
    ADD COLUMN `ldollarBalance` INTEGER NULL,
    ADD COLUMN `refreshToken` VARCHAR(255) NULL,
    ADD COLUMN `updatedAt` DATETIME(0) NULL;

-- DropTable
DROP TABLE `bot_log`;

-- DropTable
DROP TABLE `discord_settings`;

-- DropTable
DROP TABLE `group_im_avatar`;

-- DropTable
DROP TABLE `group_im_list`;

-- DropTable
DROP TABLE `mikro_orm_migrations`;

-- DropTable
DROP TABLE `payment_log`;

-- DropTable
DROP TABLE `shared_bot`;

-- DropTable
DROP TABLE `shared_bot_user_subscription`;

-- DropTable
DROP TABLE `terminal_owner`;

-- CreateTable
CREATE TABLE `botLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `botUuid` VARCHAR(255) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `event` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `discordSettings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `botId` INTEGER NOT NULL,
    `webHookUrl` VARCHAR(255) NULL,
    `slGroupUuid` VARCHAR(255) NULL,
    `discChannelId` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groupImAvatar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(255) NOT NULL,
    `groupImListId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    INDEX `groupImListId`(`groupImListId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groupImList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `listName` VARCHAR(255) NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentLog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userUuid` VARCHAR(255) NOT NULL,
    `amount` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    INDEX `userUuid`(`userUuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sharedBot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `loginFirstName` VARCHAR(255) NOT NULL,
    `loginLastName` VARCHAR(255) NOT NULL,
    `loginPassword` VARCHAR(255) NOT NULL,
    `loginSpawnLocation` VARCHAR(255) NOT NULL,
    `running` BOOLEAN NOT NULL,
    `loginRegion` VARCHAR(255) NULL,
    `packageId` INTEGER NULL,
    `uuid` VARCHAR(36) NOT NULL,
    `imageId` VARCHAR(36) NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sharedBotUserSubscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sharedBotId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `subscriptionStart` DATETIME(0) NULL,
    `subscriptionEnd` DATETIME(0) NULL,
    `packageId` INTEGER NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    INDEX `packageId`(`packageId`),
    INDEX `sharedBotId`(`sharedBotId`),
    INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `terminalOwner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatarUuid` VARCHAR(255) NOT NULL,
    `avatarName` VARCHAR(255) NOT NULL,
    `parcelName` VARCHAR(255) NOT NULL,
    `slUrl` VARCHAR(255) NOT NULL,
    `lastActive` DATETIME(0) NOT NULL,
    `createdAt` DATETIME(0) NULL,
    `updatedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `userId` ON `bot`(`userId`);

-- CreateIndex
CREATE INDEX `couponId` ON `package`(`couponId`);

-- CreateIndex
CREATE INDEX `botId` ON `subscription`(`botId`);

-- CreateIndex
CREATE UNIQUE INDEX `subscriptionPackageIdBotId_unique` ON `subscription`(`packageId`, `botId`);

-- AddForeignKey
ALTER TABLE `bot` ADD CONSTRAINT `bot_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `groupImAvatar` ADD CONSTRAINT `groupImAvatar_ibfk_1` FOREIGN KEY (`groupImListId`) REFERENCES `groupImList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `groupImList` ADD CONSTRAINT `groupImList_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `package` ADD CONSTRAINT `package_ibfk_1` FOREIGN KEY (`couponId`) REFERENCES `coupon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paymentLog` ADD CONSTRAINT `paymentLog_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `user`(`uuid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sharedBotUserSubscription` ADD CONSTRAINT `sharedBotUserSubscription_ibfk_1` FOREIGN KEY (`sharedBotId`) REFERENCES `sharedBot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sharedBotUserSubscription` ADD CONSTRAINT `sharedBotUserSubscription_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sharedBotUserSubscription` ADD CONSTRAINT `sharedBotUserSubscription_ibfk_3` FOREIGN KEY (`packageId`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_ibfk_1` FOREIGN KEY (`packageId`) REFERENCES `package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subscription` ADD CONSTRAINT `subscription_ibfk_2` FOREIGN KEY (`botId`) REFERENCES `bot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
