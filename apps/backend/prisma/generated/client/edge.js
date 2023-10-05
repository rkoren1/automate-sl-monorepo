
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.0
 * Query Engine version: a5596b96668f0f4b397761ce0956db54e17e48c4
 */
Prisma.prismaVersion = {
  client: "5.4.0",
  engine: "a5596b96668f0f4b397761ce0956db54e17e48c4"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BotScalarFieldEnum = {
  id: 'id',
  loginFirstName: 'loginFirstName',
  loginLastName: 'loginLastName',
  loginPassword: 'loginPassword',
  loginSpawnLocation: 'loginSpawnLocation',
  userId: 'userId',
  running: 'running',
  shouldRun: 'shouldRun',
  loginRegion: 'loginRegion',
  packageId: 'packageId',
  uuid: 'uuid',
  imageId: 'imageId',
  actionId: 'actionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BotLogScalarFieldEnum = {
  id: 'id',
  name: 'name',
  botUuid: 'botUuid',
  message: 'message',
  event: 'event',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CouponScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  duration: 'duration',
  uses: 'uses',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DiscordSettingsScalarFieldEnum = {
  id: 'id',
  botId: 'botId',
  webHookUrl: 'webHookUrl',
  slGroupUuid: 'slGroupUuid',
  discChannelId: 'discChannelId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GroupImAvatarScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  groupImListId: 'groupImListId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GroupImListScalarFieldEnum = {
  id: 'id',
  listName: 'listName',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubPackageScalarFieldEnum = {
  id: 'id',
  packageName: 'packageName',
  packageDescription: 'packageDescription',
  pricePerWeek: 'pricePerWeek',
  discount: 'discount',
  pricePerMonth: 'pricePerMonth',
  couponId: 'couponId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentLogScalarFieldEnum = {
  id: 'id',
  userUuid: 'userUuid',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SharedBotScalarFieldEnum = {
  id: 'id',
  loginFirstName: 'loginFirstName',
  loginLastName: 'loginLastName',
  loginPassword: 'loginPassword',
  loginSpawnLocation: 'loginSpawnLocation',
  running: 'running',
  loginRegion: 'loginRegion',
  packageId: 'packageId',
  uuid: 'uuid',
  imageId: 'imageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SharedBotUserSubscriptionScalarFieldEnum = {
  id: 'id',
  sharedBotId: 'sharedBotId',
  userId: 'userId',
  subscriptionStart: 'subscriptionStart',
  subscriptionEnd: 'subscriptionEnd',
  packageId: 'packageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  packageId: 'packageId',
  subscriptionStart: 'subscriptionStart',
  subscriptionEnd: 'subscriptionEnd',
  botId: 'botId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TerminalScalarFieldEnum = {
  id: 'id',
  name: 'name',
  apiKey: 'apiKey',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TerminalOwnerScalarFieldEnum = {
  id: 'id',
  avatarUuid: 'avatarUuid',
  avatarName: 'avatarName',
  parcelName: 'parcelName',
  slUrl: 'slUrl',
  lastActive: 'lastActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  refreshToken: 'refreshToken',
  ldollarBalance: 'ldollarBalance',
  uuid: 'uuid',
  avatarName: 'avatarName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  bot: 'bot',
  botLog: 'botLog',
  coupon: 'coupon',
  discordSettings: 'discordSettings',
  groupImAvatar: 'groupImAvatar',
  groupImList: 'groupImList',
  subPackage: 'subPackage',
  paymentLog: 'paymentLog',
  sharedBot: 'sharedBot',
  sharedBotUserSubscription: 'sharedBotUserSubscription',
  subscription: 'subscription',
  terminal: 'terminal',
  terminalOwner: 'terminalOwner',
  user: 'user'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/rokkoren/Desktop/sl/automate-sl/apps/backend/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../../.env",
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.0",
  "engineVersion": "a5596b96668f0f4b397761ce0956db54e17e48c4",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBib3QgewogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbG9naW5GaXJzdE5hbWUgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBsb2dpbkxhc3ROYW1lICAgICAgU3RyaW5nICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIGxvZ2luUGFzc3dvcmQgICAgICAgU3RyaW5nICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIGxvZ2luU3Bhd25Mb2NhdGlvbiBTdHJpbmcgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgdXNlcklkICAgICAgICAgICAgICBJbnQKICBydW5uaW5nICAgICAgICAgICAgICBCb29sZWFuCiAgc2hvdWxkUnVuICAgICAgICAgICBCb29sZWFuPwogIGxvZ2luUmVnaW9uICAgICAgICAgU3RyaW5nPyAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHBhY2thZ2VJZCAgICAgICAgICAgSW50PwogIHV1aWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBkYi5WYXJDaGFyKDM2KQogIGltYWdlSWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGRiLlZhckNoYXIoMzYpCiAgYWN0aW9uSWQgICAgICAgICAgICBJbnQ/CiAgY3JlYXRlZEF0ICAgICAgICAgICBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICB1cGRhdGVkQXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgIEBkYi5EYXRlVGltZSgwKQogIHVzZXIgICAgICAgICAgICAgICAgIHVzZXIgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAiYm90X2liZmtfMSIpCiAgc3Vic2NyaXB0aW9uICAgICAgICAgc3Vic2NyaXB0aW9uW10KCiAgQEBpbmRleChbdXNlcklkXSwgbWFwOiAidXNlcklkIikKfQoKbW9kZWwgYm90TG9nIHsKICBpZCAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkKICBib3RVdWlkICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkKICBtZXNzYWdlICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpCiAgZXZlbnQgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjU1KQogIGNyZWF0ZWRBdCBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAZGIuRGF0ZVRpbWUoMCkKfQoKbW9kZWwgY291cG9uIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgdHlwZSAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgZHVyYXRpb24gICAgICAgSW50CiAgdXNlcyAgICAgICAgICAgSW50CiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZT8gICAgICAgIEBkYi5EYXRlVGltZSgwKQogIHVwZGF0ZWRBdCAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBzdWJQYWNrYWdlIHN1YlBhY2thZ2VbXQp9Cgptb2RlbCBkaXNjb3JkU2V0dGluZ3MgewogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBib3RJZCAgICAgICAgICBJbnQKICB3ZWJIb29rVXJsICAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcigyNTUpCiAgc2xHcm91cFV1aWQgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjU1KQogIGRpc2NDaGFubmVsSWQgU3RyaW5nPyAgIEBkYi5WYXJDaGFyKDI1NSkKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQp9Cgptb2RlbCBncm91cEltQXZhdGFyIHsKICBpZCAgICAgICAgICAgICAgIEludCAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1dWlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIGdyb3VwSW1MaXN0SWQgSW50CiAgY3JlYXRlZEF0ICAgICAgIERhdGVUaW1lPyAgICAgQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0ICAgICAgIERhdGVUaW1lPyAgICAgQGRiLkRhdGVUaW1lKDApCiAgZ3JvdXBJbUxpc3QgICAgZ3JvdXBJbUxpc3QgQHJlbGF0aW9uKGZpZWxkczogW2dyb3VwSW1MaXN0SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAiZ3JvdXBJbUF2YXRhcl9pYmZrXzEiKQoKICBAQGluZGV4KFtncm91cEltTGlzdElkXSwgbWFwOiAiZ3JvdXBJbUxpc3RJZCIpCn0KCm1vZGVsIGdyb3VwSW1MaXN0IHsKICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBsaXN0TmFtZSAgICAgICBTdHJpbmcgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgdXNlcklkICAgICAgICAgSW50CiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWU/ICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWU/ICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgZ3JvdXBJbUF2YXRhciBncm91cEltQXZhdGFyW10KICB1c2VyICAgICAgICAgICAgdXNlciAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBtYXA6ICJncm91cEltTGlzdF9pYmZrXzEiKQoKICBAQGluZGV4KFt1c2VySWRdLCBtYXA6ICJ1c2VySWQiKQp9CgovLy8gVGhpcyBtb2RlbCBoYXMgYmVlbiByZW5hbWVkIHRvICdzdWJQYWNrYWdlJyBkdXJpbmcgaW50cm9zcGVjdGlvbiwgYmVjYXVzZSB0aGUgb3JpZ2luYWwgbmFtZSAncGFja2FnZScgaXMgcmVzZXJ2ZWQuCm1vZGVsIHN1YlBhY2thZ2UgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcGFja2FnZU5hbWUgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgcGFja2FnZURlc2NyaXB0aW9uICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgcHJpY2VQZXJXZWVrICAgICAgICAgICAgICAgSW50CiAgZGlzY291bnQgICAgICAgICAgICAgICAgICAgICBJbnQKICBwcmljZVBlck1vbnRoICAgICAgICAgICAgICBJbnQKICBjb3Vwb25JZCAgICAgICAgICAgICAgICAgICAgSW50PwogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBjb3Vwb24gICAgICAgICAgICAgICAgICAgICAgIGNvdXBvbj8gICAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY291cG9uSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAicGFja2FnZV9pYmZrXzEiKQogIHNoYXJlZEJvdFVzZXJTdWJzY3JpcHRpb24gc2hhcmVkQm90VXNlclN1YnNjcmlwdGlvbltdCiAgc3Vic2NyaXB0aW9uICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25bXQoKICBAQGluZGV4KFtjb3Vwb25JZF0sIG1hcDogImNvdXBvbklkIikKICBAQG1hcCgicGFja2FnZSIpCn0KCm1vZGVsIHBheW1lbnRMb2cgewogIGlkICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdXNlclV1aWQgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpCiAgYW1vdW50ICAgICBJbnQKICBjcmVhdGVkQXQgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCiAgdXNlciAgICAgICB1c2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJVdWlkXSwgcmVmZXJlbmNlczogW3V1aWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAicGF5bWVudExvZ19pYmZrXzEiKQoKICBAQGluZGV4KFt1c2VyVXVpZF0sIG1hcDogInVzZXJVdWlkIikKfQoKbW9kZWwgc2hhcmVkQm90IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGxvZ2luRmlyc3ROYW1lICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgbG9naW5MYXN0TmFtZSAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBsb2dpblBhc3N3b3JkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBsb2dpblNwYXduTG9jYXRpb24gICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHJ1bm5pbmcgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbgogIGxvZ2luUmVnaW9uICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIHBhY2thZ2VJZCAgICAgICAgICAgICAgICAgICBJbnQ/CiAgdXVpZCAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMzYpCiAgaW1hZ2VJZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigzNikKICBjcmVhdGVkQXQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICAgICAgICAgICAgIEBkYi5EYXRlVGltZSgwKQogIHVwZGF0ZWRBdCAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgc2hhcmVkQm90VXNlclN1YnNjcmlwdGlvbiBzaGFyZWRCb3RVc2VyU3Vic2NyaXB0aW9uW10KfQoKbW9kZWwgc2hhcmVkQm90VXNlclN1YnNjcmlwdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgc2hhcmVkQm90SWQgICAgICBJbnQKICB1c2VySWQgICAgICAgICAgICBJbnQKICBzdWJzY3JpcHRpb25TdGFydCBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICBzdWJzY3JpcHRpb25FbmQgICBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICBwYWNrYWdlSWQgICAgICAgICBJbnQKICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICB1cGRhdGVkQXQgICAgICAgICBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICBzaGFyZWRCb3QgICAgICAgICBzaGFyZWRCb3QgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzaGFyZWRCb3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBtYXA6ICJzaGFyZWRCb3RVc2VyU3Vic2NyaXB0aW9uX2liZmtfMSIpCiAgdXNlciAgICAgICAgICAgICAgIHVzZXIgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAic2hhcmVkQm90VXNlclN1YnNjcmlwdGlvbl9pYmZrXzIiKQogIHN1YlBhY2thZ2UgICAgIHN1YlBhY2thZ2UgQHJlbGF0aW9uKGZpZWxkczogW3BhY2thZ2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBtYXA6ICJzaGFyZWRCb3RVc2VyU3Vic2NyaXB0aW9uX2liZmtfMyIpCgogIEBAaW5kZXgoW3BhY2thZ2VJZF0sIG1hcDogInBhY2thZ2VJZCIpCiAgQEBpbmRleChbc2hhcmVkQm90SWRdLCBtYXA6ICJzaGFyZWRCb3RJZCIpCiAgQEBpbmRleChbdXNlcklkXSwgbWFwOiAidXNlcklkIikKfQoKbW9kZWwgc3Vic2NyaXB0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwYWNrYWdlSWQgICAgICAgICBJbnQKICBzdWJzY3JpcHRpb25TdGFydCBEYXRlVGltZSAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBzdWJzY3JpcHRpb25FbmQgICBEYXRlVGltZSAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBib3RJZCAgICAgICAgICAgICBJbnQKICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICB1cGRhdGVkQXQgICAgICAgICBEYXRlVGltZT8gICAgICBAZGIuRGF0ZVRpbWUoMCkKICBzdWJQYWNrYWdlICAgICBzdWJQYWNrYWdlIEByZWxhdGlvbihmaWVsZHM6IFtwYWNrYWdlSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgbWFwOiAic3Vic2NyaXB0aW9uX2liZmtfMSIpCiAgYm90ICAgICAgICAgICAgICAgIGJvdCAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtib3RJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBtYXA6ICJzdWJzY3JpcHRpb25faWJma18yIikKCiAgQEB1bmlxdWUoW3BhY2thZ2VJZCwgYm90SWRdLCBtYXA6ICJzdWJzY3JpcHRpb25QYWNrYWdlSWRCb3RJZF91bmlxdWUiKQogIEBAaW5kZXgoW2JvdElkXSwgbWFwOiAiYm90SWQiKQp9Cgptb2RlbCB0ZXJtaW5hbCB7CiAgaWQgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpCiAgYXBpS2V5ICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpCiAgY3JlYXRlZEF0IERhdGVUaW1lPyBAZGIuRGF0ZVRpbWUoMCkKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBkYi5EYXRlVGltZSgwKQp9Cgptb2RlbCB0ZXJtaW5hbE93bmVyIHsKICBpZCAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhdmF0YXJVdWlkIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpCiAgYXZhdGFyTmFtZSBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjU1KQogIHBhcmNlbE5hbWUgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDI1NSkKICBzbFVybCAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcigyNTUpCiAgbGFzdEFjdGl2ZSBEYXRlVGltZSAgQGRiLkRhdGVUaW1lKDApCiAgY3JlYXRlZEF0ICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0ICBEYXRlVGltZT8gQGRiLkRhdGVUaW1lKDApCn0KCm1vZGVsIHVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZW1haWwgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZShtYXA6ICJlbWFpbCIpIEBkYi5WYXJDaGFyKDI1NSkKICBwYXNzd29yZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgcmVmcmVzaFRva2VuICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgbGRvbGxhckJhbGFuY2UgICAgICAgICAgICAgICAgICAgSW50PyAgICAgICAgICAgICAgICAgICAgICAgQGRiLkludAogIHV1aWQgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAidXVpZCIpIEBkYi5WYXJDaGFyKDM2KQogIGF2YXRhck5hbWUgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMjU1KQogIGNyZWF0ZWRBdCAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgICAgICAgICAgICAgQGRiLkRhdGVUaW1lKDApCiAgdXBkYXRlZEF0ICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgICAgICAgICAgICBAZGIuRGF0ZVRpbWUoMCkKICBib3QgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdFtdCiAgZ3JvdXBJbUxpc3QgICAgICAgICAgICAgICAgZ3JvdXBJbUxpc3RbXQogIHBheW1lbnRMb2cgICAgICAgICAgICAgICAgICBwYXltZW50TG9nW10KICBzaGFyZWRCb3RVc2VyU3Vic2NyaXB0aW9uIHNoYXJlZEJvdFVzZXJTdWJzY3JpcHRpb25bXQp9Cgo=",
  "inlineSchemaHash": "4ff09a8f963d35bf61f68e9dbcdf0a3a3676158f5d35b6c049f52c52e60a2d09",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"bot\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginFirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginLastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginPassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginSpawnLocation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"running\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shouldRun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginRegion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"botTouser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subscription\",\"relationName\":\"botTosubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"botLog\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"botUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"coupon\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uses\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subPackage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subPackage\",\"relationName\":\"couponTosubPackage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"discordSettings\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"botId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webHookUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slGroupUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discChannelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"groupImAvatar\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupImListId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupImList\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"groupImList\",\"relationName\":\"groupImAvatarTogroupImList\",\"relationFromFields\":[\"groupImListId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"groupImList\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupImAvatar\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"groupImAvatar\",\"relationName\":\"groupImAvatarTogroupImList\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"groupImListTouser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subPackage\":{\"dbName\":\"package\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricePerWeek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pricePerMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"couponId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coupon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"coupon\",\"relationName\":\"couponTosubPackage\",\"relationFromFields\":[\"couponId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sharedBotUserSubscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sharedBotUserSubscription\",\"relationName\":\"sharedBotUserSubscriptionTosubPackage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subscription\",\"relationName\":\"subPackageTosubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model has been renamed to 'subPackage' during introspection, because the original name 'package' is reserved.\"},\"paymentLog\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"paymentLogTouser\",\"relationFromFields\":[\"userUuid\"],\"relationToFields\":[\"uuid\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sharedBot\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginFirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginLastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginPassword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginSpawnLocation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"running\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginRegion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sharedBotUserSubscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sharedBotUserSubscription\",\"relationName\":\"sharedBotTosharedBotUserSubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sharedBotUserSubscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sharedBotId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionStart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionEnd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sharedBot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sharedBot\",\"relationName\":\"sharedBotTosharedBotUserSubscription\",\"relationFromFields\":[\"sharedBotId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"relationName\":\"sharedBotUserSubscriptionTouser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subPackage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subPackage\",\"relationName\":\"sharedBotUserSubscriptionTosubPackage\",\"relationFromFields\":[\"packageId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"subscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"packageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionStart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionEnd\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"botId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subPackage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"subPackage\",\"relationName\":\"subPackageTosubscription\",\"relationFromFields\":[\"packageId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bot\",\"relationName\":\"botTosubscription\",\"relationFromFields\":[\"botId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"packageId\",\"botId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"packageId\",\"botId\"]}],\"isGenerated\":false},\"terminal\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apiKey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"terminalOwner\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarUuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parcelName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ldollarBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bot\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bot\",\"relationName\":\"botTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupImList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"groupImList\",\"relationName\":\"groupImListTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentLog\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"paymentLog\",\"relationName\":\"paymentLogTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sharedBotUserSubscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sharedBotUserSubscription\",\"relationName\":\"sharedBotUserSubscriptionTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

