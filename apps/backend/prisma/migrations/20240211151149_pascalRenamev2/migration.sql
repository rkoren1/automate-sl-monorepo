/*
  Warnings:

  - A unique constraint covering the columns `[packageId,botId]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `Bot` required. This step will fail if there are existing NULL values in that column.
  - Made the column `groupImListId` on table `GroupImAvatar` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `GroupImList` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userUuid` on table `PaymentLog` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sharedBotId` on table `SharedBotUserSubscription` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `SharedBotUserSubscription` required. This step will fail if there are existing NULL values in that column.
  - Made the column `packageId` on table `SharedBotUserSubscription` required. This step will fail if there are existing NULL values in that column.
  - Made the column `botId` on table `Subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Bot` DROP FOREIGN KEY `Bot_ibfk_1`;

-- DropForeignKey
ALTER TABLE `GroupImAvatar` DROP FOREIGN KEY `GroupImAvatar_ibfk_1`;

-- DropForeignKey
ALTER TABLE `GroupImList` DROP FOREIGN KEY `GroupImList_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Package` DROP FOREIGN KEY `Package_ibfk_1`;

-- DropForeignKey
ALTER TABLE `PaymentLog` DROP FOREIGN KEY `PaymentLog_ibfk_1`;

-- DropForeignKey
ALTER TABLE `SharedBotUserSubscription` DROP FOREIGN KEY `SharedBotUserSubscription_ibfk_1`;

-- DropForeignKey
ALTER TABLE `SharedBotUserSubscription` DROP FOREIGN KEY `SharedBotUserSubscription_ibfk_2`;

-- DropForeignKey
ALTER TABLE `SharedBotUserSubscription` DROP FOREIGN KEY `SharedBotUserSubscription_ibfk_3`;

-- DropForeignKey
ALTER TABLE `Subscription` DROP FOREIGN KEY `Subscription_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Subscription` DROP FOREIGN KEY `Subscription_ibfk_2`;

-- DropIndex
DROP INDEX `subscription_packageId_botId_unique` ON `Subscription`;

-- AlterTable
ALTER TABLE `Bot` MODIFY `userId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `BotLog` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `Coupon` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `DiscordSettings` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `GroupImAvatar` MODIFY `groupImListId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `GroupImList` MODIFY `userId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `Package` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `PaymentLog` MODIFY `userUuid` VARCHAR(255) NOT NULL,
    MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `SharedBot` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `SharedBotUserSubscription` MODIFY `sharedBotId` INTEGER NOT NULL,
    MODIFY `userId` INTEGER NOT NULL,
    MODIFY `packageId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `Subscription` MODIFY `botId` INTEGER NOT NULL,
    MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `Terminal` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `TerminalOwner` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `createdAt` DATETIME(0) NULL,
    MODIFY `updatedAt` DATETIME(0) NULL;

-- CreateIndex
CREATE INDEX `botId` ON `Subscription`(`botId`);

-- CreateIndex
CREATE UNIQUE INDEX `subscriptionPackageIdBotId_unique` ON `Subscription`(`packageId`, `botId`);

-- AddForeignKey
ALTER TABLE `Bot` ADD CONSTRAINT `bot_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupImAvatar` ADD CONSTRAINT `groupImAvatar_ibfk_1` FOREIGN KEY (`groupImListId`) REFERENCES `GroupImList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupImList` ADD CONSTRAINT `groupImList_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Package` ADD CONSTRAINT `package_ibfk_1` FOREIGN KEY (`couponId`) REFERENCES `Coupon`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentLog` ADD CONSTRAINT `paymentLog_ibfk_1` FOREIGN KEY (`userUuid`) REFERENCES `User`(`uuid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SharedBotUserSubscription` ADD CONSTRAINT `sharedBotUserSubscription_ibfk_1` FOREIGN KEY (`sharedBotId`) REFERENCES `SharedBot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SharedBotUserSubscription` ADD CONSTRAINT `sharedBotUserSubscription_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SharedBotUserSubscription` ADD CONSTRAINT `sharedBotUserSubscription_ibfk_3` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `subscription_ibfk_1` FOREIGN KEY (`packageId`) REFERENCES `Package`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `subscription_ibfk_2` FOREIGN KEY (`botId`) REFERENCES `Bot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Bot` RENAME INDEX `user_id` TO `userId`;

-- RenameIndex
ALTER TABLE `GroupImAvatar` RENAME INDEX `group_im_list_id` TO `groupImListId`;

-- RenameIndex
ALTER TABLE `GroupImList` RENAME INDEX `user_id` TO `userId`;

-- RenameIndex
ALTER TABLE `Package` RENAME INDEX `coupon_id` TO `couponId`;

-- RenameIndex
ALTER TABLE `PaymentLog` RENAME INDEX `user_uuid` TO `userUuid`;

-- RenameIndex
ALTER TABLE `SharedBotUserSubscription` RENAME INDEX `package_id` TO `packageId`;

-- RenameIndex
ALTER TABLE `SharedBotUserSubscription` RENAME INDEX `shared_bot_id` TO `sharedBotId`;

-- RenameIndex
ALTER TABLE `SharedBotUserSubscription` RENAME INDEX `user_id` TO `userId`;
