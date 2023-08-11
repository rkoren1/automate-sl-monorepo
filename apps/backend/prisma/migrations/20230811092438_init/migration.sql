-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `refreshToken` VARCHAR(191) NULL,
    `lDolBalance` INTEGER NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `avatarName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `loginFirstName` VARCHAR(191) NOT NULL,
    `loginLastName` VARCHAR(191) NOT NULL,
    `loginPassword` VARCHAR(191) NOT NULL,
    `loginSpawnLocation` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `running` BOOLEAN NOT NULL DEFAULT false,
    `loginRegion` VARCHAR(191) NULL,
    `packageId` INTEGER NOT NULL,
    `uuid` VARCHAR(191) NOT NULL,
    `imageId` VARCHAR(191) NULL,
    `actionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bot` ADD CONSTRAINT `Bot_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
