
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
