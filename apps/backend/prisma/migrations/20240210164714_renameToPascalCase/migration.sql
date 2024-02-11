-- Rename to PascalCase
ALTER TABLE `bot`
RENAME TO `Bot`;

-- Rename to PascalCase
ALTER TABLE `bot_log`
RENAME TO `BotLog`;

-- Rename to PascalCase
ALTER TABLE `group_im_avatar`
RENAME TO `GroupImAvatar`;

-- Rename to PascalCase
ALTER TABLE `group_im_list`
RENAME TO `GroupImList`;

-- Rename to PascalCase
ALTER TABLE `package`
RENAME TO `Package`;

-- Rename to PascalCase
ALTER TABLE `payment_log`
RENAME TO `PaymentLog`;

-- Rename to PascalCase
ALTER TABLE `shared_bot_user_subscription`
RENAME TO `SharedBotUserSubscription`;

-- Rename to PascalCase
ALTER TABLE `subscription`
RENAME TO `Subscription`;

-- Rename to PascalCase
ALTER TABLE `coupon`
RENAME TO `Coupon`;

-- Rename to PascalCase
ALTER TABLE `discord_settings`
RENAME TO `DiscordSettings`;

-- Rename to PascalCase
ALTER TABLE `shared_bot`
RENAME TO `SharedBot`;

-- Rename to PascalCase
ALTER TABLE `terminal`
RENAME TO `Terminal`;

-- Rename to PascalCase
ALTER TABLE `terminal_owner`
RENAME TO `TerminalOwner`;

-- Rename to PascalCase
ALTER TABLE `user`
RENAME TO `User`;

-- Rename to PascalCase
ALTER TABLE `Bot`
RENAME COLUMN `login_first_name` TO `loginFirstName`,
RENAME COLUMN `login_last_name` TO `loginLastName`,
RENAME COLUMN `login_password` TO `loginPassword`,
RENAME COLUMN `login_spawn_location` TO `loginSpawnLocation`,
RENAME COLUMN `user_id` TO `userId`,
RENAME COLUMN `should_run` TO `shouldRun`,
RENAME COLUMN `login_region` TO `loginRegion`,
RENAME COLUMN `package_id` TO `packageId`,
RENAME COLUMN `image_id` TO `imageId`,
RENAME COLUMN `action_id` TO `actionId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `BotLog`
RENAME COLUMN `bot_uuid` TO `botUuid`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `GroupImAvatar`
RENAME COLUMN `group_im_list_id` TO `groupImListId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `GroupImList`
RENAME COLUMN `list_name` TO `listName`,
RENAME COLUMN `user_id` TO `userId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `Package`
RENAME COLUMN `package_name` TO `packageName`,
RENAME COLUMN `package_description` TO `packageDescription`,
RENAME COLUMN `price_per_week` TO `pricePerWeek`,
RENAME COLUMN `price_per_month` TO `pricePerMonth`,
RENAME COLUMN `coupon_id` TO `couponId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `PaymentLog`
RENAME COLUMN `user_uuid` TO `userUuid`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `SharedBotUserSubscription`
RENAME COLUMN `shared_bot_id` TO `sharedBotId`,
RENAME COLUMN `user_id` TO `userId`,
RENAME COLUMN `subscription_start` TO `subscriptionStart`,
RENAME COLUMN `subscription_end` TO `subscriptionEnd`,
RENAME COLUMN `package_id` TO `packageId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `Subscription`
RENAME COLUMN `package_id` TO `packageId`,
RENAME COLUMN `subscription_start` TO `subscriptionStart`,
RENAME COLUMN `subscription_end` TO `subscriptionEnd`,
RENAME COLUMN `bot_id` TO `botId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `Coupon`
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `DiscordSettings`
RENAME COLUMN `web_hook_url` TO `webHookUrl`,
RENAME COLUMN `bot_id` TO `botId`,
RENAME COLUMN `sl_group_uuid` TO `slGroupUuid`,
RENAME COLUMN `disc_channel_id` TO `discChannelId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `SharedBot`
RENAME COLUMN `login_first_name` TO `loginFirstName`,
RENAME COLUMN `login_last_name` TO `loginLastName`,
RENAME COLUMN `login_password` TO `loginPassword`,
RENAME COLUMN `login_spawn_location` TO `loginSpawnLocation`,
RENAME COLUMN `login_region` TO `loginRegion`,
RENAME COLUMN `package_id` TO `packageId`,
RENAME COLUMN `image_id` TO `imageId`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `Terminal`
RENAME COLUMN `api_key` TO `apiKey`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `TerminalOwner`
RENAME COLUMN `avatar_uuid` TO `avatarUuid`,
RENAME COLUMN `avatar_name` TO `avatarName`,
RENAME COLUMN `parcel_name` TO `parcelName`,
RENAME COLUMN `sl_url` TO `slUrl`,
RENAME COLUMN `last_active` TO `lastActive`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

-- Rename to PascalCase
ALTER TABLE `User`
RENAME COLUMN `refresh_token` TO `refreshToken`,
RENAME COLUMN `l$_balance` TO `lDollarBalance`,
RENAME COLUMN `avatar_name` TO `avatarName`,
RENAME COLUMN `created_at` TO `createdAt`,
RENAME COLUMN `updated_at` TO `updatedAt`;

