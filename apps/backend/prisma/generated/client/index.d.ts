
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bot
 * 
 */
export type bot = $Result.DefaultSelection<Prisma.$botPayload>
/**
 * Model botLog
 * 
 */
export type botLog = $Result.DefaultSelection<Prisma.$botLogPayload>
/**
 * Model coupon
 * 
 */
export type coupon = $Result.DefaultSelection<Prisma.$couponPayload>
/**
 * Model discordSettings
 * 
 */
export type discordSettings = $Result.DefaultSelection<Prisma.$discordSettingsPayload>
/**
 * Model groupImAvatar
 * 
 */
export type groupImAvatar = $Result.DefaultSelection<Prisma.$groupImAvatarPayload>
/**
 * Model groupImList
 * 
 */
export type groupImList = $Result.DefaultSelection<Prisma.$groupImListPayload>
/**
 * Model subPackage
 * This model has been renamed to 'subPackage' during introspection, because the original name 'package' is reserved.
 */
export type subPackage = $Result.DefaultSelection<Prisma.$subPackagePayload>
/**
 * Model paymentLog
 * 
 */
export type paymentLog = $Result.DefaultSelection<Prisma.$paymentLogPayload>
/**
 * Model sharedBot
 * 
 */
export type sharedBot = $Result.DefaultSelection<Prisma.$sharedBotPayload>
/**
 * Model sharedBotUserSubscription
 * 
 */
export type sharedBotUserSubscription = $Result.DefaultSelection<Prisma.$sharedBotUserSubscriptionPayload>
/**
 * Model subscription
 * 
 */
export type subscription = $Result.DefaultSelection<Prisma.$subscriptionPayload>
/**
 * Model terminal
 * 
 */
export type terminal = $Result.DefaultSelection<Prisma.$terminalPayload>
/**
 * Model terminalOwner
 * 
 */
export type terminalOwner = $Result.DefaultSelection<Prisma.$terminalOwnerPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bots
 * const bots = await prisma.bot.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bots
   * const bots = await prisma.bot.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bot`: Exposes CRUD operations for the **bot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bots
    * const bots = await prisma.bot.findMany()
    * ```
    */
  get bot(): Prisma.botDelegate<ExtArgs>;

  /**
   * `prisma.botLog`: Exposes CRUD operations for the **botLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotLogs
    * const botLogs = await prisma.botLog.findMany()
    * ```
    */
  get botLog(): Prisma.botLogDelegate<ExtArgs>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.couponDelegate<ExtArgs>;

  /**
   * `prisma.discordSettings`: Exposes CRUD operations for the **discordSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscordSettings
    * const discordSettings = await prisma.discordSettings.findMany()
    * ```
    */
  get discordSettings(): Prisma.discordSettingsDelegate<ExtArgs>;

  /**
   * `prisma.groupImAvatar`: Exposes CRUD operations for the **groupImAvatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupImAvatars
    * const groupImAvatars = await prisma.groupImAvatar.findMany()
    * ```
    */
  get groupImAvatar(): Prisma.groupImAvatarDelegate<ExtArgs>;

  /**
   * `prisma.groupImList`: Exposes CRUD operations for the **groupImList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupImLists
    * const groupImLists = await prisma.groupImList.findMany()
    * ```
    */
  get groupImList(): Prisma.groupImListDelegate<ExtArgs>;

  /**
   * `prisma.subPackage`: Exposes CRUD operations for the **subPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubPackages
    * const subPackages = await prisma.subPackage.findMany()
    * ```
    */
  get subPackage(): Prisma.subPackageDelegate<ExtArgs>;

  /**
   * `prisma.paymentLog`: Exposes CRUD operations for the **paymentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentLogs
    * const paymentLogs = await prisma.paymentLog.findMany()
    * ```
    */
  get paymentLog(): Prisma.paymentLogDelegate<ExtArgs>;

  /**
   * `prisma.sharedBot`: Exposes CRUD operations for the **sharedBot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedBots
    * const sharedBots = await prisma.sharedBot.findMany()
    * ```
    */
  get sharedBot(): Prisma.sharedBotDelegate<ExtArgs>;

  /**
   * `prisma.sharedBotUserSubscription`: Exposes CRUD operations for the **sharedBotUserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedBotUserSubscriptions
    * const sharedBotUserSubscriptions = await prisma.sharedBotUserSubscription.findMany()
    * ```
    */
  get sharedBotUserSubscription(): Prisma.sharedBotUserSubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.subscriptionDelegate<ExtArgs>;

  /**
   * `prisma.terminal`: Exposes CRUD operations for the **terminal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terminals
    * const terminals = await prisma.terminal.findMany()
    * ```
    */
  get terminal(): Prisma.terminalDelegate<ExtArgs>;

  /**
   * `prisma.terminalOwner`: Exposes CRUD operations for the **terminalOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TerminalOwners
    * const terminalOwners = await prisma.terminalOwner.findMany()
    * ```
    */
  get terminalOwner(): Prisma.terminalOwnerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.0
   * Query Engine version: a5596b96668f0f4b397761ce0956db54e17e48c4
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'bot' | 'botLog' | 'coupon' | 'discordSettings' | 'groupImAvatar' | 'groupImList' | 'subPackage' | 'paymentLog' | 'sharedBot' | 'sharedBotUserSubscription' | 'subscription' | 'terminal' | 'terminalOwner' | 'user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      bot: {
        payload: Prisma.$botPayload<ExtArgs>
        fields: Prisma.botFieldRefs
        operations: {
          findUnique: {
            args: Prisma.botFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.botFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>
          }
          findFirst: {
            args: Prisma.botFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.botFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>
          }
          findMany: {
            args: Prisma.botFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>[]
          }
          create: {
            args: Prisma.botCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>
          }
          createMany: {
            args: Prisma.botCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.botDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>
          }
          update: {
            args: Prisma.botUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>
          }
          deleteMany: {
            args: Prisma.botDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.botUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.botUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botPayload>
          }
          aggregate: {
            args: Prisma.BotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBot>
          }
          groupBy: {
            args: Prisma.botGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BotGroupByOutputType>[]
          }
          count: {
            args: Prisma.botCountArgs<ExtArgs>,
            result: $Utils.Optional<BotCountAggregateOutputType> | number
          }
        }
      }
      botLog: {
        payload: Prisma.$botLogPayload<ExtArgs>
        fields: Prisma.botLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.botLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.botLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>
          }
          findFirst: {
            args: Prisma.botLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.botLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>
          }
          findMany: {
            args: Prisma.botLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>[]
          }
          create: {
            args: Prisma.botLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>
          }
          createMany: {
            args: Prisma.botLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.botLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>
          }
          update: {
            args: Prisma.botLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>
          }
          deleteMany: {
            args: Prisma.botLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.botLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.botLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$botLogPayload>
          }
          aggregate: {
            args: Prisma.BotLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBotLog>
          }
          groupBy: {
            args: Prisma.botLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BotLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.botLogCountArgs<ExtArgs>,
            result: $Utils.Optional<BotLogCountAggregateOutputType> | number
          }
        }
      }
      coupon: {
        payload: Prisma.$couponPayload<ExtArgs>
        fields: Prisma.couponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.couponFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.couponFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>
          }
          findFirst: {
            args: Prisma.couponFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.couponFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>
          }
          findMany: {
            args: Prisma.couponFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>[]
          }
          create: {
            args: Prisma.couponCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>
          }
          createMany: {
            args: Prisma.couponCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.couponDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>
          }
          update: {
            args: Prisma.couponUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>
          }
          deleteMany: {
            args: Prisma.couponDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.couponUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.couponUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$couponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.couponGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.couponCountArgs<ExtArgs>,
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      discordSettings: {
        payload: Prisma.$discordSettingsPayload<ExtArgs>
        fields: Prisma.discordSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.discordSettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.discordSettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>
          }
          findFirst: {
            args: Prisma.discordSettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.discordSettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>
          }
          findMany: {
            args: Prisma.discordSettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>[]
          }
          create: {
            args: Prisma.discordSettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>
          }
          createMany: {
            args: Prisma.discordSettingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.discordSettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>
          }
          update: {
            args: Prisma.discordSettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>
          }
          deleteMany: {
            args: Prisma.discordSettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.discordSettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.discordSettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$discordSettingsPayload>
          }
          aggregate: {
            args: Prisma.DiscordSettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDiscordSettings>
          }
          groupBy: {
            args: Prisma.discordSettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DiscordSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.discordSettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<DiscordSettingsCountAggregateOutputType> | number
          }
        }
      }
      groupImAvatar: {
        payload: Prisma.$groupImAvatarPayload<ExtArgs>
        fields: Prisma.groupImAvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupImAvatarFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupImAvatarFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>
          }
          findFirst: {
            args: Prisma.groupImAvatarFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupImAvatarFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>
          }
          findMany: {
            args: Prisma.groupImAvatarFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>[]
          }
          create: {
            args: Prisma.groupImAvatarCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>
          }
          createMany: {
            args: Prisma.groupImAvatarCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.groupImAvatarDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>
          }
          update: {
            args: Prisma.groupImAvatarUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>
          }
          deleteMany: {
            args: Prisma.groupImAvatarDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.groupImAvatarUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.groupImAvatarUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImAvatarPayload>
          }
          aggregate: {
            args: Prisma.GroupImAvatarAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupImAvatar>
          }
          groupBy: {
            args: Prisma.groupImAvatarGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupImAvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupImAvatarCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupImAvatarCountAggregateOutputType> | number
          }
        }
      }
      groupImList: {
        payload: Prisma.$groupImListPayload<ExtArgs>
        fields: Prisma.groupImListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupImListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupImListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>
          }
          findFirst: {
            args: Prisma.groupImListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupImListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>
          }
          findMany: {
            args: Prisma.groupImListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>[]
          }
          create: {
            args: Prisma.groupImListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>
          }
          createMany: {
            args: Prisma.groupImListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.groupImListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>
          }
          update: {
            args: Prisma.groupImListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>
          }
          deleteMany: {
            args: Prisma.groupImListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.groupImListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.groupImListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$groupImListPayload>
          }
          aggregate: {
            args: Prisma.GroupImListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupImList>
          }
          groupBy: {
            args: Prisma.groupImListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupImListGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupImListCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupImListCountAggregateOutputType> | number
          }
        }
      }
      subPackage: {
        payload: Prisma.$subPackagePayload<ExtArgs>
        fields: Prisma.subPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subPackageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subPackageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>
          }
          findFirst: {
            args: Prisma.subPackageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subPackageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>
          }
          findMany: {
            args: Prisma.subPackageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>[]
          }
          create: {
            args: Prisma.subPackageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>
          }
          createMany: {
            args: Prisma.subPackageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subPackageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>
          }
          update: {
            args: Prisma.subPackageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>
          }
          deleteMany: {
            args: Prisma.subPackageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subPackageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subPackageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subPackagePayload>
          }
          aggregate: {
            args: Prisma.SubPackageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubPackage>
          }
          groupBy: {
            args: Prisma.subPackageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.subPackageCountArgs<ExtArgs>,
            result: $Utils.Optional<SubPackageCountAggregateOutputType> | number
          }
        }
      }
      paymentLog: {
        payload: Prisma.$paymentLogPayload<ExtArgs>
        fields: Prisma.paymentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>
          }
          findFirst: {
            args: Prisma.paymentLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>
          }
          findMany: {
            args: Prisma.paymentLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>[]
          }
          create: {
            args: Prisma.paymentLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>
          }
          createMany: {
            args: Prisma.paymentLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.paymentLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>
          }
          update: {
            args: Prisma.paymentLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>
          }
          deleteMany: {
            args: Prisma.paymentLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.paymentLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.paymentLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentLogPayload>
          }
          aggregate: {
            args: Prisma.PaymentLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentLog>
          }
          groupBy: {
            args: Prisma.paymentLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentLogCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentLogCountAggregateOutputType> | number
          }
        }
      }
      sharedBot: {
        payload: Prisma.$sharedBotPayload<ExtArgs>
        fields: Prisma.sharedBotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sharedBotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sharedBotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>
          }
          findFirst: {
            args: Prisma.sharedBotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sharedBotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>
          }
          findMany: {
            args: Prisma.sharedBotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>[]
          }
          create: {
            args: Prisma.sharedBotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>
          }
          createMany: {
            args: Prisma.sharedBotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sharedBotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>
          }
          update: {
            args: Prisma.sharedBotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>
          }
          deleteMany: {
            args: Prisma.sharedBotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sharedBotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sharedBotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotPayload>
          }
          aggregate: {
            args: Prisma.SharedBotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSharedBot>
          }
          groupBy: {
            args: Prisma.sharedBotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SharedBotGroupByOutputType>[]
          }
          count: {
            args: Prisma.sharedBotCountArgs<ExtArgs>,
            result: $Utils.Optional<SharedBotCountAggregateOutputType> | number
          }
        }
      }
      sharedBotUserSubscription: {
        payload: Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>
        fields: Prisma.sharedBotUserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sharedBotUserSubscriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sharedBotUserSubscriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.sharedBotUserSubscriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sharedBotUserSubscriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.sharedBotUserSubscriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.sharedBotUserSubscriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.sharedBotUserSubscriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sharedBotUserSubscriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>
          }
          update: {
            args: Prisma.sharedBotUserSubscriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.sharedBotUserSubscriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sharedBotUserSubscriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sharedBotUserSubscriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sharedBotUserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SharedBotUserSubscriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSharedBotUserSubscription>
          }
          groupBy: {
            args: Prisma.sharedBotUserSubscriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SharedBotUserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sharedBotUserSubscriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<SharedBotUserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      subscription: {
        payload: Prisma.$subscriptionPayload<ExtArgs>
        fields: Prisma.subscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          findFirst: {
            args: Prisma.subscriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          findMany: {
            args: Prisma.subscriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>[]
          }
          create: {
            args: Prisma.subscriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          createMany: {
            args: Prisma.subscriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subscriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          update: {
            args: Prisma.subscriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          deleteMany: {
            args: Prisma.subscriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subscriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$subscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.subscriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      terminal: {
        payload: Prisma.$terminalPayload<ExtArgs>
        fields: Prisma.terminalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.terminalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.terminalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>
          }
          findFirst: {
            args: Prisma.terminalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.terminalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>
          }
          findMany: {
            args: Prisma.terminalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>[]
          }
          create: {
            args: Prisma.terminalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>
          }
          createMany: {
            args: Prisma.terminalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.terminalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>
          }
          update: {
            args: Prisma.terminalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>
          }
          deleteMany: {
            args: Prisma.terminalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.terminalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.terminalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalPayload>
          }
          aggregate: {
            args: Prisma.TerminalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTerminal>
          }
          groupBy: {
            args: Prisma.terminalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TerminalGroupByOutputType>[]
          }
          count: {
            args: Prisma.terminalCountArgs<ExtArgs>,
            result: $Utils.Optional<TerminalCountAggregateOutputType> | number
          }
        }
      }
      terminalOwner: {
        payload: Prisma.$terminalOwnerPayload<ExtArgs>
        fields: Prisma.terminalOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.terminalOwnerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.terminalOwnerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>
          }
          findFirst: {
            args: Prisma.terminalOwnerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.terminalOwnerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>
          }
          findMany: {
            args: Prisma.terminalOwnerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>[]
          }
          create: {
            args: Prisma.terminalOwnerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>
          }
          createMany: {
            args: Prisma.terminalOwnerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.terminalOwnerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>
          }
          update: {
            args: Prisma.terminalOwnerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>
          }
          deleteMany: {
            args: Prisma.terminalOwnerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.terminalOwnerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.terminalOwnerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$terminalOwnerPayload>
          }
          aggregate: {
            args: Prisma.TerminalOwnerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTerminalOwner>
          }
          groupBy: {
            args: Prisma.terminalOwnerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TerminalOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.terminalOwnerCountArgs<ExtArgs>,
            result: $Utils.Optional<TerminalOwnerCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BotCountOutputType
   */

  export type BotCountOutputType = {
    subscription: number
  }

  export type BotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | BotCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes

  /**
   * BotCountOutputType without action
   */
  export type BotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotCountOutputType
     */
    select?: BotCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BotCountOutputType without action
   */
  export type BotCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput
  }



  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    subPackage: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subPackage?: boolean | CouponCountOutputTypeCountSubPackageArgs
  }

  // Custom InputTypes

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountSubPackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subPackageWhereInput
  }



  /**
   * Count Type GroupImListCountOutputType
   */

  export type GroupImListCountOutputType = {
    groupImAvatar: number
  }

  export type GroupImListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupImAvatar?: boolean | GroupImListCountOutputTypeCountGroupImAvatarArgs
  }

  // Custom InputTypes

  /**
   * GroupImListCountOutputType without action
   */
  export type GroupImListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupImListCountOutputType
     */
    select?: GroupImListCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupImListCountOutputType without action
   */
  export type GroupImListCountOutputTypeCountGroupImAvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupImAvatarWhereInput
  }



  /**
   * Count Type SubPackageCountOutputType
   */

  export type SubPackageCountOutputType = {
    sharedBotUserSubscription: number
    subscription: number
  }

  export type SubPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBotUserSubscription?: boolean | SubPackageCountOutputTypeCountSharedBotUserSubscriptionArgs
    subscription?: boolean | SubPackageCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes

  /**
   * SubPackageCountOutputType without action
   */
  export type SubPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubPackageCountOutputType
     */
    select?: SubPackageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubPackageCountOutputType without action
   */
  export type SubPackageCountOutputTypeCountSharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sharedBotUserSubscriptionWhereInput
  }


  /**
   * SubPackageCountOutputType without action
   */
  export type SubPackageCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput
  }



  /**
   * Count Type SharedBotCountOutputType
   */

  export type SharedBotCountOutputType = {
    sharedBotUserSubscription: number
  }

  export type SharedBotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBotUserSubscription?: boolean | SharedBotCountOutputTypeCountSharedBotUserSubscriptionArgs
  }

  // Custom InputTypes

  /**
   * SharedBotCountOutputType without action
   */
  export type SharedBotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedBotCountOutputType
     */
    select?: SharedBotCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SharedBotCountOutputType without action
   */
  export type SharedBotCountOutputTypeCountSharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sharedBotUserSubscriptionWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bot: number
    groupImList: number
    paymentLog: number
    sharedBotUserSubscription: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bot?: boolean | UserCountOutputTypeCountBotArgs
    groupImList?: boolean | UserCountOutputTypeCountGroupImListArgs
    paymentLog?: boolean | UserCountOutputTypeCountPaymentLogArgs
    sharedBotUserSubscription?: boolean | UserCountOutputTypeCountSharedBotUserSubscriptionArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: botWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupImListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupImListWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentLogWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sharedBotUserSubscriptionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model bot
   */

  export type AggregateBot = {
    _count: BotCountAggregateOutputType | null
    _avg: BotAvgAggregateOutputType | null
    _sum: BotSumAggregateOutputType | null
    _min: BotMinAggregateOutputType | null
    _max: BotMaxAggregateOutputType | null
  }

  export type BotAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    packageId: number | null
    actionId: number | null
  }

  export type BotSumAggregateOutputType = {
    id: number | null
    userId: number | null
    packageId: number | null
    actionId: number | null
  }

  export type BotMinAggregateOutputType = {
    id: number | null
    loginFirstName: string | null
    loginLastName: string | null
    loginPassword: string | null
    loginSpawnLocation: string | null
    userId: number | null
    running: boolean | null
    shouldRun: boolean | null
    loginRegion: string | null
    packageId: number | null
    uuid: string | null
    imageId: string | null
    actionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BotMaxAggregateOutputType = {
    id: number | null
    loginFirstName: string | null
    loginLastName: string | null
    loginPassword: string | null
    loginSpawnLocation: string | null
    userId: number | null
    running: boolean | null
    shouldRun: boolean | null
    loginRegion: string | null
    packageId: number | null
    uuid: string | null
    imageId: string | null
    actionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BotCountAggregateOutputType = {
    id: number
    loginFirstName: number
    loginLastName: number
    loginPassword: number
    loginSpawnLocation: number
    userId: number
    running: number
    shouldRun: number
    loginRegion: number
    packageId: number
    uuid: number
    imageId: number
    actionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BotAvgAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    actionId?: true
  }

  export type BotSumAggregateInputType = {
    id?: true
    userId?: true
    packageId?: true
    actionId?: true
  }

  export type BotMinAggregateInputType = {
    id?: true
    loginFirstName?: true
    loginLastName?: true
    loginPassword?: true
    loginSpawnLocation?: true
    userId?: true
    running?: true
    shouldRun?: true
    loginRegion?: true
    packageId?: true
    uuid?: true
    imageId?: true
    actionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BotMaxAggregateInputType = {
    id?: true
    loginFirstName?: true
    loginLastName?: true
    loginPassword?: true
    loginSpawnLocation?: true
    userId?: true
    running?: true
    shouldRun?: true
    loginRegion?: true
    packageId?: true
    uuid?: true
    imageId?: true
    actionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BotCountAggregateInputType = {
    id?: true
    loginFirstName?: true
    loginLastName?: true
    loginPassword?: true
    loginSpawnLocation?: true
    userId?: true
    running?: true
    shouldRun?: true
    loginRegion?: true
    packageId?: true
    uuid?: true
    imageId?: true
    actionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bot to aggregate.
     */
    where?: botWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bots to fetch.
     */
    orderBy?: botOrderByWithRelationInput | botOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: botWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bots
    **/
    _count?: true | BotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotMaxAggregateInputType
  }

  export type GetBotAggregateType<T extends BotAggregateArgs> = {
        [P in keyof T & keyof AggregateBot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBot[P]>
      : GetScalarType<T[P], AggregateBot[P]>
  }




  export type botGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: botWhereInput
    orderBy?: botOrderByWithAggregationInput | botOrderByWithAggregationInput[]
    by: BotScalarFieldEnum[] | BotScalarFieldEnum
    having?: botScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotCountAggregateInputType | true
    _avg?: BotAvgAggregateInputType
    _sum?: BotSumAggregateInputType
    _min?: BotMinAggregateInputType
    _max?: BotMaxAggregateInputType
  }

  export type BotGroupByOutputType = {
    id: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    userId: number
    running: boolean
    shouldRun: boolean | null
    loginRegion: string | null
    packageId: number | null
    uuid: string
    imageId: string
    actionId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: BotCountAggregateOutputType | null
    _avg: BotAvgAggregateOutputType | null
    _sum: BotSumAggregateOutputType | null
    _min: BotMinAggregateOutputType | null
    _max: BotMaxAggregateOutputType | null
  }

  type GetBotGroupByPayload<T extends botGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotGroupByOutputType[P]>
            : GetScalarType<T[P], BotGroupByOutputType[P]>
        }
      >
    >


  export type botSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loginFirstName?: boolean
    loginLastName?: boolean
    loginPassword?: boolean
    loginSpawnLocation?: boolean
    userId?: boolean
    running?: boolean
    shouldRun?: boolean
    loginRegion?: boolean
    packageId?: boolean
    uuid?: boolean
    imageId?: boolean
    actionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    subscription?: boolean | bot$subscriptionArgs<ExtArgs>
    _count?: boolean | BotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bot"]>

  export type botSelectScalar = {
    id?: boolean
    loginFirstName?: boolean
    loginLastName?: boolean
    loginPassword?: boolean
    loginSpawnLocation?: boolean
    userId?: boolean
    running?: boolean
    shouldRun?: boolean
    loginRegion?: boolean
    packageId?: boolean
    uuid?: boolean
    imageId?: boolean
    actionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type botInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    subscription?: boolean | bot$subscriptionArgs<ExtArgs>
    _count?: boolean | BotCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $botPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bot"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      subscription: Prisma.$subscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loginFirstName: string
      loginLastName: string
      loginPassword: string
      loginSpawnLocation: string
      userId: number
      running: boolean
      shouldRun: boolean | null
      loginRegion: string | null
      packageId: number | null
      uuid: string
      imageId: string
      actionId: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["bot"]>
    composites: {}
  }


  type botGetPayload<S extends boolean | null | undefined | botDefaultArgs> = $Result.GetResult<Prisma.$botPayload, S>

  type botCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<botFindManyArgs, 'select' | 'include'> & {
      select?: BotCountAggregateInputType | true
    }

  export interface botDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bot'], meta: { name: 'bot' } }
    /**
     * Find zero or one Bot that matches the filter.
     * @param {botFindUniqueArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends botFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, botFindUniqueArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {botFindUniqueOrThrowArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends botFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, botFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botFindFirstArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends botFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, botFindFirstArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botFindFirstOrThrowArgs} args - Arguments to find a Bot
     * @example
     * // Get one Bot
     * const bot = await prisma.bot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends botFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, botFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bots
     * const bots = await prisma.bot.findMany()
     * 
     * // Get first 10 Bots
     * const bots = await prisma.bot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botWithIdOnly = await prisma.bot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends botFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, botFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bot.
     * @param {botCreateArgs} args - Arguments to create a Bot.
     * @example
     * // Create one Bot
     * const Bot = await prisma.bot.create({
     *   data: {
     *     // ... data to create a Bot
     *   }
     * })
     * 
    **/
    create<T extends botCreateArgs<ExtArgs>>(
      args: SelectSubset<T, botCreateArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bots.
     *     @param {botCreateManyArgs} args - Arguments to create many Bots.
     *     @example
     *     // Create many Bots
     *     const bot = await prisma.bot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends botCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, botCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bot.
     * @param {botDeleteArgs} args - Arguments to delete one Bot.
     * @example
     * // Delete one Bot
     * const Bot = await prisma.bot.delete({
     *   where: {
     *     // ... filter to delete one Bot
     *   }
     * })
     * 
    **/
    delete<T extends botDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, botDeleteArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bot.
     * @param {botUpdateArgs} args - Arguments to update one Bot.
     * @example
     * // Update one Bot
     * const bot = await prisma.bot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends botUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, botUpdateArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bots.
     * @param {botDeleteManyArgs} args - Arguments to filter Bots to delete.
     * @example
     * // Delete a few Bots
     * const { count } = await prisma.bot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends botDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, botDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bots
     * const bot = await prisma.bot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends botUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, botUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bot.
     * @param {botUpsertArgs} args - Arguments to update or create a Bot.
     * @example
     * // Update or create a Bot
     * const bot = await prisma.bot.upsert({
     *   create: {
     *     // ... data to create a Bot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bot we want to update
     *   }
     * })
    **/
    upsert<T extends botUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, botUpsertArgs<ExtArgs>>
    ): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botCountArgs} args - Arguments to filter Bots to count.
     * @example
     * // Count the number of Bots
     * const count = await prisma.bot.count({
     *   where: {
     *     // ... the filter for the Bots we want to count
     *   }
     * })
    **/
    count<T extends botCountArgs>(
      args?: Subset<T, botCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BotAggregateArgs>(args: Subset<T, BotAggregateArgs>): Prisma.PrismaPromise<GetBotAggregateType<T>>

    /**
     * Group by Bot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends botGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: botGroupByArgs['orderBy'] }
        : { orderBy?: botGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, botGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bot model
   */
  readonly fields: botFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__botClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subscription<T extends bot$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, bot$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the bot model
   */ 
  interface botFieldRefs {
    readonly id: FieldRef<"bot", 'Int'>
    readonly loginFirstName: FieldRef<"bot", 'String'>
    readonly loginLastName: FieldRef<"bot", 'String'>
    readonly loginPassword: FieldRef<"bot", 'String'>
    readonly loginSpawnLocation: FieldRef<"bot", 'String'>
    readonly userId: FieldRef<"bot", 'Int'>
    readonly running: FieldRef<"bot", 'Boolean'>
    readonly shouldRun: FieldRef<"bot", 'Boolean'>
    readonly loginRegion: FieldRef<"bot", 'String'>
    readonly packageId: FieldRef<"bot", 'Int'>
    readonly uuid: FieldRef<"bot", 'String'>
    readonly imageId: FieldRef<"bot", 'String'>
    readonly actionId: FieldRef<"bot", 'Int'>
    readonly createdAt: FieldRef<"bot", 'DateTime'>
    readonly updatedAt: FieldRef<"bot", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * bot findUnique
   */
  export type botFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * Filter, which bot to fetch.
     */
    where: botWhereUniqueInput
  }


  /**
   * bot findUniqueOrThrow
   */
  export type botFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * Filter, which bot to fetch.
     */
    where: botWhereUniqueInput
  }


  /**
   * bot findFirst
   */
  export type botFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * Filter, which bot to fetch.
     */
    where?: botWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bots to fetch.
     */
    orderBy?: botOrderByWithRelationInput | botOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bots.
     */
    cursor?: botWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bots.
     */
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[]
  }


  /**
   * bot findFirstOrThrow
   */
  export type botFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * Filter, which bot to fetch.
     */
    where?: botWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bots to fetch.
     */
    orderBy?: botOrderByWithRelationInput | botOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bots.
     */
    cursor?: botWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bots.
     */
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[]
  }


  /**
   * bot findMany
   */
  export type botFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * Filter, which bots to fetch.
     */
    where?: botWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bots to fetch.
     */
    orderBy?: botOrderByWithRelationInput | botOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bots.
     */
    cursor?: botWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bots.
     */
    skip?: number
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[]
  }


  /**
   * bot create
   */
  export type botCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * The data needed to create a bot.
     */
    data: XOR<botCreateInput, botUncheckedCreateInput>
  }


  /**
   * bot createMany
   */
  export type botCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bots.
     */
    data: botCreateManyInput | botCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bot update
   */
  export type botUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * The data needed to update a bot.
     */
    data: XOR<botUpdateInput, botUncheckedUpdateInput>
    /**
     * Choose, which bot to update.
     */
    where: botWhereUniqueInput
  }


  /**
   * bot updateMany
   */
  export type botUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bots.
     */
    data: XOR<botUpdateManyMutationInput, botUncheckedUpdateManyInput>
    /**
     * Filter which bots to update
     */
    where?: botWhereInput
  }


  /**
   * bot upsert
   */
  export type botUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * The filter to search for the bot to update in case it exists.
     */
    where: botWhereUniqueInput
    /**
     * In case the bot found by the `where` argument doesn't exist, create a new bot with this data.
     */
    create: XOR<botCreateInput, botUncheckedCreateInput>
    /**
     * In case the bot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<botUpdateInput, botUncheckedUpdateInput>
  }


  /**
   * bot delete
   */
  export type botDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    /**
     * Filter which bot to delete.
     */
    where: botWhereUniqueInput
  }


  /**
   * bot deleteMany
   */
  export type botDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bots to delete
     */
    where?: botWhereInput
  }


  /**
   * bot.subscription
   */
  export type bot$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    where?: subscriptionWhereInput
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    cursor?: subscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * bot without action
   */
  export type botDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
  }



  /**
   * Model botLog
   */

  export type AggregateBotLog = {
    _count: BotLogCountAggregateOutputType | null
    _avg: BotLogAvgAggregateOutputType | null
    _sum: BotLogSumAggregateOutputType | null
    _min: BotLogMinAggregateOutputType | null
    _max: BotLogMaxAggregateOutputType | null
  }

  export type BotLogAvgAggregateOutputType = {
    id: number | null
  }

  export type BotLogSumAggregateOutputType = {
    id: number | null
  }

  export type BotLogMinAggregateOutputType = {
    id: number | null
    name: string | null
    botUuid: string | null
    message: string | null
    event: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BotLogMaxAggregateOutputType = {
    id: number | null
    name: string | null
    botUuid: string | null
    message: string | null
    event: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BotLogCountAggregateOutputType = {
    id: number
    name: number
    botUuid: number
    message: number
    event: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BotLogAvgAggregateInputType = {
    id?: true
  }

  export type BotLogSumAggregateInputType = {
    id?: true
  }

  export type BotLogMinAggregateInputType = {
    id?: true
    name?: true
    botUuid?: true
    message?: true
    event?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BotLogMaxAggregateInputType = {
    id?: true
    name?: true
    botUuid?: true
    message?: true
    event?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BotLogCountAggregateInputType = {
    id?: true
    name?: true
    botUuid?: true
    message?: true
    event?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BotLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which botLog to aggregate.
     */
    where?: botLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of botLogs to fetch.
     */
    orderBy?: botLogOrderByWithRelationInput | botLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: botLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` botLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` botLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned botLogs
    **/
    _count?: true | BotLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BotLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BotLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotLogMaxAggregateInputType
  }

  export type GetBotLogAggregateType<T extends BotLogAggregateArgs> = {
        [P in keyof T & keyof AggregateBotLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotLog[P]>
      : GetScalarType<T[P], AggregateBotLog[P]>
  }




  export type botLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: botLogWhereInput
    orderBy?: botLogOrderByWithAggregationInput | botLogOrderByWithAggregationInput[]
    by: BotLogScalarFieldEnum[] | BotLogScalarFieldEnum
    having?: botLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotLogCountAggregateInputType | true
    _avg?: BotLogAvgAggregateInputType
    _sum?: BotLogSumAggregateInputType
    _min?: BotLogMinAggregateInputType
    _max?: BotLogMaxAggregateInputType
  }

  export type BotLogGroupByOutputType = {
    id: number
    name: string
    botUuid: string
    message: string
    event: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: BotLogCountAggregateOutputType | null
    _avg: BotLogAvgAggregateOutputType | null
    _sum: BotLogSumAggregateOutputType | null
    _min: BotLogMinAggregateOutputType | null
    _max: BotLogMaxAggregateOutputType | null
  }

  type GetBotLogGroupByPayload<T extends botLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotLogGroupByOutputType[P]>
            : GetScalarType<T[P], BotLogGroupByOutputType[P]>
        }
      >
    >


  export type botLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    botUuid?: boolean
    message?: boolean
    event?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["botLog"]>

  export type botLogSelectScalar = {
    id?: boolean
    name?: boolean
    botUuid?: boolean
    message?: boolean
    event?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $botLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "botLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      botUuid: string
      message: string
      event: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["botLog"]>
    composites: {}
  }


  type botLogGetPayload<S extends boolean | null | undefined | botLogDefaultArgs> = $Result.GetResult<Prisma.$botLogPayload, S>

  type botLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<botLogFindManyArgs, 'select' | 'include'> & {
      select?: BotLogCountAggregateInputType | true
    }

  export interface botLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['botLog'], meta: { name: 'botLog' } }
    /**
     * Find zero or one BotLog that matches the filter.
     * @param {botLogFindUniqueArgs} args - Arguments to find a BotLog
     * @example
     * // Get one BotLog
     * const botLog = await prisma.botLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends botLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, botLogFindUniqueArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BotLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {botLogFindUniqueOrThrowArgs} args - Arguments to find a BotLog
     * @example
     * // Get one BotLog
     * const botLog = await prisma.botLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends botLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, botLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BotLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botLogFindFirstArgs} args - Arguments to find a BotLog
     * @example
     * // Get one BotLog
     * const botLog = await prisma.botLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends botLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, botLogFindFirstArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BotLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botLogFindFirstOrThrowArgs} args - Arguments to find a BotLog
     * @example
     * // Get one BotLog
     * const botLog = await prisma.botLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends botLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, botLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BotLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotLogs
     * const botLogs = await prisma.botLog.findMany()
     * 
     * // Get first 10 BotLogs
     * const botLogs = await prisma.botLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const botLogWithIdOnly = await prisma.botLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends botLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, botLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BotLog.
     * @param {botLogCreateArgs} args - Arguments to create a BotLog.
     * @example
     * // Create one BotLog
     * const BotLog = await prisma.botLog.create({
     *   data: {
     *     // ... data to create a BotLog
     *   }
     * })
     * 
    **/
    create<T extends botLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, botLogCreateArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BotLogs.
     *     @param {botLogCreateManyArgs} args - Arguments to create many BotLogs.
     *     @example
     *     // Create many BotLogs
     *     const botLog = await prisma.botLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends botLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, botLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BotLog.
     * @param {botLogDeleteArgs} args - Arguments to delete one BotLog.
     * @example
     * // Delete one BotLog
     * const BotLog = await prisma.botLog.delete({
     *   where: {
     *     // ... filter to delete one BotLog
     *   }
     * })
     * 
    **/
    delete<T extends botLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, botLogDeleteArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BotLog.
     * @param {botLogUpdateArgs} args - Arguments to update one BotLog.
     * @example
     * // Update one BotLog
     * const botLog = await prisma.botLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends botLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, botLogUpdateArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BotLogs.
     * @param {botLogDeleteManyArgs} args - Arguments to filter BotLogs to delete.
     * @example
     * // Delete a few BotLogs
     * const { count } = await prisma.botLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends botLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, botLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotLogs
     * const botLog = await prisma.botLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends botLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, botLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BotLog.
     * @param {botLogUpsertArgs} args - Arguments to update or create a BotLog.
     * @example
     * // Update or create a BotLog
     * const botLog = await prisma.botLog.upsert({
     *   create: {
     *     // ... data to create a BotLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotLog we want to update
     *   }
     * })
    **/
    upsert<T extends botLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, botLogUpsertArgs<ExtArgs>>
    ): Prisma__botLogClient<$Result.GetResult<Prisma.$botLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BotLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botLogCountArgs} args - Arguments to filter BotLogs to count.
     * @example
     * // Count the number of BotLogs
     * const count = await prisma.botLog.count({
     *   where: {
     *     // ... the filter for the BotLogs we want to count
     *   }
     * })
    **/
    count<T extends botLogCountArgs>(
      args?: Subset<T, botLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BotLogAggregateArgs>(args: Subset<T, BotLogAggregateArgs>): Prisma.PrismaPromise<GetBotLogAggregateType<T>>

    /**
     * Group by BotLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {botLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends botLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: botLogGroupByArgs['orderBy'] }
        : { orderBy?: botLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, botLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the botLog model
   */
  readonly fields: botLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for botLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__botLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the botLog model
   */ 
  interface botLogFieldRefs {
    readonly id: FieldRef<"botLog", 'Int'>
    readonly name: FieldRef<"botLog", 'String'>
    readonly botUuid: FieldRef<"botLog", 'String'>
    readonly message: FieldRef<"botLog", 'String'>
    readonly event: FieldRef<"botLog", 'String'>
    readonly createdAt: FieldRef<"botLog", 'DateTime'>
    readonly updatedAt: FieldRef<"botLog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * botLog findUnique
   */
  export type botLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * Filter, which botLog to fetch.
     */
    where: botLogWhereUniqueInput
  }


  /**
   * botLog findUniqueOrThrow
   */
  export type botLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * Filter, which botLog to fetch.
     */
    where: botLogWhereUniqueInput
  }


  /**
   * botLog findFirst
   */
  export type botLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * Filter, which botLog to fetch.
     */
    where?: botLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of botLogs to fetch.
     */
    orderBy?: botLogOrderByWithRelationInput | botLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for botLogs.
     */
    cursor?: botLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` botLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` botLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of botLogs.
     */
    distinct?: BotLogScalarFieldEnum | BotLogScalarFieldEnum[]
  }


  /**
   * botLog findFirstOrThrow
   */
  export type botLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * Filter, which botLog to fetch.
     */
    where?: botLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of botLogs to fetch.
     */
    orderBy?: botLogOrderByWithRelationInput | botLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for botLogs.
     */
    cursor?: botLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` botLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` botLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of botLogs.
     */
    distinct?: BotLogScalarFieldEnum | BotLogScalarFieldEnum[]
  }


  /**
   * botLog findMany
   */
  export type botLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * Filter, which botLogs to fetch.
     */
    where?: botLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of botLogs to fetch.
     */
    orderBy?: botLogOrderByWithRelationInput | botLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing botLogs.
     */
    cursor?: botLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` botLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` botLogs.
     */
    skip?: number
    distinct?: BotLogScalarFieldEnum | BotLogScalarFieldEnum[]
  }


  /**
   * botLog create
   */
  export type botLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * The data needed to create a botLog.
     */
    data: XOR<botLogCreateInput, botLogUncheckedCreateInput>
  }


  /**
   * botLog createMany
   */
  export type botLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many botLogs.
     */
    data: botLogCreateManyInput | botLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * botLog update
   */
  export type botLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * The data needed to update a botLog.
     */
    data: XOR<botLogUpdateInput, botLogUncheckedUpdateInput>
    /**
     * Choose, which botLog to update.
     */
    where: botLogWhereUniqueInput
  }


  /**
   * botLog updateMany
   */
  export type botLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update botLogs.
     */
    data: XOR<botLogUpdateManyMutationInput, botLogUncheckedUpdateManyInput>
    /**
     * Filter which botLogs to update
     */
    where?: botLogWhereInput
  }


  /**
   * botLog upsert
   */
  export type botLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * The filter to search for the botLog to update in case it exists.
     */
    where: botLogWhereUniqueInput
    /**
     * In case the botLog found by the `where` argument doesn't exist, create a new botLog with this data.
     */
    create: XOR<botLogCreateInput, botLogUncheckedCreateInput>
    /**
     * In case the botLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<botLogUpdateInput, botLogUncheckedUpdateInput>
  }


  /**
   * botLog delete
   */
  export type botLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
    /**
     * Filter which botLog to delete.
     */
    where: botLogWhereUniqueInput
  }


  /**
   * botLog deleteMany
   */
  export type botLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which botLogs to delete
     */
    where?: botLogWhereInput
  }


  /**
   * botLog without action
   */
  export type botLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the botLog
     */
    select?: botLogSelect<ExtArgs> | null
  }



  /**
   * Model coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    uses: number | null
  }

  export type CouponSumAggregateOutputType = {
    id: number | null
    duration: number | null
    uses: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    duration: number | null
    uses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    duration: number | null
    uses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    name: number
    type: number
    duration: number
    uses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    id?: true
    duration?: true
    uses?: true
  }

  export type CouponSumAggregateInputType = {
    id?: true
    duration?: true
    uses?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    duration?: true
    uses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    duration?: true
    uses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    duration?: true
    uses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coupon to aggregate.
     */
    where?: couponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponOrderByWithRelationInput | couponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: couponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type couponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: couponWhereInput
    orderBy?: couponOrderByWithAggregationInput | couponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: couponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: number
    name: string
    type: string
    duration: number
    uses: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends couponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type couponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    duration?: boolean
    uses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subPackage?: boolean | coupon$subPackageArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type couponSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    duration?: boolean
    uses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type couponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subPackage?: boolean | coupon$subPackageArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $couponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "coupon"
    objects: {
      subPackage: Prisma.$subPackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      duration: number
      uses: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }


  type couponGetPayload<S extends boolean | null | undefined | couponDefaultArgs> = $Result.GetResult<Prisma.$couponPayload, S>

  type couponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<couponFindManyArgs, 'select' | 'include'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface couponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['coupon'], meta: { name: 'coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {couponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends couponFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, couponFindUniqueArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Coupon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {couponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends couponFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, couponFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends couponFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, couponFindFirstArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends couponFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, couponFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends couponFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, couponFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Coupon.
     * @param {couponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
    **/
    create<T extends couponCreateArgs<ExtArgs>>(
      args: SelectSubset<T, couponCreateArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Coupons.
     *     @param {couponCreateManyArgs} args - Arguments to create many Coupons.
     *     @example
     *     // Create many Coupons
     *     const coupon = await prisma.coupon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends couponCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, couponCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {couponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
    **/
    delete<T extends couponDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, couponDeleteArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Coupon.
     * @param {couponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends couponUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, couponUpdateArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Coupons.
     * @param {couponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends couponDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, couponDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends couponUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, couponUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {couponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
    **/
    upsert<T extends couponUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, couponUpsertArgs<ExtArgs>>
    ): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends couponCountArgs>(
      args?: Subset<T, couponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {couponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends couponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: couponGroupByArgs['orderBy'] }
        : { orderBy?: couponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, couponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the coupon model
   */
  readonly fields: couponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__couponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subPackage<T extends coupon$subPackageArgs<ExtArgs> = {}>(args?: Subset<T, coupon$subPackageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the coupon model
   */ 
  interface couponFieldRefs {
    readonly id: FieldRef<"coupon", 'Int'>
    readonly name: FieldRef<"coupon", 'String'>
    readonly type: FieldRef<"coupon", 'String'>
    readonly duration: FieldRef<"coupon", 'Int'>
    readonly uses: FieldRef<"coupon", 'Int'>
    readonly createdAt: FieldRef<"coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"coupon", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * coupon findUnique
   */
  export type couponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * Filter, which coupon to fetch.
     */
    where: couponWhereUniqueInput
  }


  /**
   * coupon findUniqueOrThrow
   */
  export type couponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * Filter, which coupon to fetch.
     */
    where: couponWhereUniqueInput
  }


  /**
   * coupon findFirst
   */
  export type couponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * Filter, which coupon to fetch.
     */
    where?: couponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponOrderByWithRelationInput | couponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     */
    cursor?: couponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }


  /**
   * coupon findFirstOrThrow
   */
  export type couponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * Filter, which coupon to fetch.
     */
    where?: couponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponOrderByWithRelationInput | couponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coupons.
     */
    cursor?: couponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }


  /**
   * coupon findMany
   */
  export type couponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * Filter, which coupons to fetch.
     */
    where?: couponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coupons to fetch.
     */
    orderBy?: couponOrderByWithRelationInput | couponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coupons.
     */
    cursor?: couponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }


  /**
   * coupon create
   */
  export type couponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * The data needed to create a coupon.
     */
    data: XOR<couponCreateInput, couponUncheckedCreateInput>
  }


  /**
   * coupon createMany
   */
  export type couponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many coupons.
     */
    data: couponCreateManyInput | couponCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * coupon update
   */
  export type couponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * The data needed to update a coupon.
     */
    data: XOR<couponUpdateInput, couponUncheckedUpdateInput>
    /**
     * Choose, which coupon to update.
     */
    where: couponWhereUniqueInput
  }


  /**
   * coupon updateMany
   */
  export type couponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update coupons.
     */
    data: XOR<couponUpdateManyMutationInput, couponUncheckedUpdateManyInput>
    /**
     * Filter which coupons to update
     */
    where?: couponWhereInput
  }


  /**
   * coupon upsert
   */
  export type couponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * The filter to search for the coupon to update in case it exists.
     */
    where: couponWhereUniqueInput
    /**
     * In case the coupon found by the `where` argument doesn't exist, create a new coupon with this data.
     */
    create: XOR<couponCreateInput, couponUncheckedCreateInput>
    /**
     * In case the coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<couponUpdateInput, couponUncheckedUpdateInput>
  }


  /**
   * coupon delete
   */
  export type couponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    /**
     * Filter which coupon to delete.
     */
    where: couponWhereUniqueInput
  }


  /**
   * coupon deleteMany
   */
  export type couponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coupons to delete
     */
    where?: couponWhereInput
  }


  /**
   * coupon.subPackage
   */
  export type coupon$subPackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    where?: subPackageWhereInput
    orderBy?: subPackageOrderByWithRelationInput | subPackageOrderByWithRelationInput[]
    cursor?: subPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubPackageScalarFieldEnum | SubPackageScalarFieldEnum[]
  }


  /**
   * coupon without action
   */
  export type couponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
  }



  /**
   * Model discordSettings
   */

  export type AggregateDiscordSettings = {
    _count: DiscordSettingsCountAggregateOutputType | null
    _avg: DiscordSettingsAvgAggregateOutputType | null
    _sum: DiscordSettingsSumAggregateOutputType | null
    _min: DiscordSettingsMinAggregateOutputType | null
    _max: DiscordSettingsMaxAggregateOutputType | null
  }

  export type DiscordSettingsAvgAggregateOutputType = {
    id: number | null
    botId: number | null
  }

  export type DiscordSettingsSumAggregateOutputType = {
    id: number | null
    botId: number | null
  }

  export type DiscordSettingsMinAggregateOutputType = {
    id: number | null
    botId: number | null
    webHookUrl: string | null
    slGroupUuid: string | null
    discChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscordSettingsMaxAggregateOutputType = {
    id: number | null
    botId: number | null
    webHookUrl: string | null
    slGroupUuid: string | null
    discChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiscordSettingsCountAggregateOutputType = {
    id: number
    botId: number
    webHookUrl: number
    slGroupUuid: number
    discChannelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiscordSettingsAvgAggregateInputType = {
    id?: true
    botId?: true
  }

  export type DiscordSettingsSumAggregateInputType = {
    id?: true
    botId?: true
  }

  export type DiscordSettingsMinAggregateInputType = {
    id?: true
    botId?: true
    webHookUrl?: true
    slGroupUuid?: true
    discChannelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscordSettingsMaxAggregateInputType = {
    id?: true
    botId?: true
    webHookUrl?: true
    slGroupUuid?: true
    discChannelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiscordSettingsCountAggregateInputType = {
    id?: true
    botId?: true
    webHookUrl?: true
    slGroupUuid?: true
    discChannelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiscordSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discordSettings to aggregate.
     */
    where?: discordSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discordSettings to fetch.
     */
    orderBy?: discordSettingsOrderByWithRelationInput | discordSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: discordSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discordSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discordSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned discordSettings
    **/
    _count?: true | DiscordSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscordSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscordSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscordSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscordSettingsMaxAggregateInputType
  }

  export type GetDiscordSettingsAggregateType<T extends DiscordSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscordSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscordSettings[P]>
      : GetScalarType<T[P], AggregateDiscordSettings[P]>
  }




  export type discordSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: discordSettingsWhereInput
    orderBy?: discordSettingsOrderByWithAggregationInput | discordSettingsOrderByWithAggregationInput[]
    by: DiscordSettingsScalarFieldEnum[] | DiscordSettingsScalarFieldEnum
    having?: discordSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscordSettingsCountAggregateInputType | true
    _avg?: DiscordSettingsAvgAggregateInputType
    _sum?: DiscordSettingsSumAggregateInputType
    _min?: DiscordSettingsMinAggregateInputType
    _max?: DiscordSettingsMaxAggregateInputType
  }

  export type DiscordSettingsGroupByOutputType = {
    id: number
    botId: number
    webHookUrl: string | null
    slGroupUuid: string | null
    discChannelId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: DiscordSettingsCountAggregateOutputType | null
    _avg: DiscordSettingsAvgAggregateOutputType | null
    _sum: DiscordSettingsSumAggregateOutputType | null
    _min: DiscordSettingsMinAggregateOutputType | null
    _max: DiscordSettingsMaxAggregateOutputType | null
  }

  type GetDiscordSettingsGroupByPayload<T extends discordSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscordSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscordSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscordSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], DiscordSettingsGroupByOutputType[P]>
        }
      >
    >


  export type discordSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    botId?: boolean
    webHookUrl?: boolean
    slGroupUuid?: boolean
    discChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["discordSettings"]>

  export type discordSettingsSelectScalar = {
    id?: boolean
    botId?: boolean
    webHookUrl?: boolean
    slGroupUuid?: boolean
    discChannelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $discordSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "discordSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      botId: number
      webHookUrl: string | null
      slGroupUuid: string | null
      discChannelId: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["discordSettings"]>
    composites: {}
  }


  type discordSettingsGetPayload<S extends boolean | null | undefined | discordSettingsDefaultArgs> = $Result.GetResult<Prisma.$discordSettingsPayload, S>

  type discordSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<discordSettingsFindManyArgs, 'select' | 'include'> & {
      select?: DiscordSettingsCountAggregateInputType | true
    }

  export interface discordSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['discordSettings'], meta: { name: 'discordSettings' } }
    /**
     * Find zero or one DiscordSettings that matches the filter.
     * @param {discordSettingsFindUniqueArgs} args - Arguments to find a DiscordSettings
     * @example
     * // Get one DiscordSettings
     * const discordSettings = await prisma.discordSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends discordSettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, discordSettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DiscordSettings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {discordSettingsFindUniqueOrThrowArgs} args - Arguments to find a DiscordSettings
     * @example
     * // Get one DiscordSettings
     * const discordSettings = await prisma.discordSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends discordSettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, discordSettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DiscordSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordSettingsFindFirstArgs} args - Arguments to find a DiscordSettings
     * @example
     * // Get one DiscordSettings
     * const discordSettings = await prisma.discordSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends discordSettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, discordSettingsFindFirstArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DiscordSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordSettingsFindFirstOrThrowArgs} args - Arguments to find a DiscordSettings
     * @example
     * // Get one DiscordSettings
     * const discordSettings = await prisma.discordSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends discordSettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, discordSettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DiscordSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordSettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscordSettings
     * const discordSettings = await prisma.discordSettings.findMany()
     * 
     * // Get first 10 DiscordSettings
     * const discordSettings = await prisma.discordSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discordSettingsWithIdOnly = await prisma.discordSettings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends discordSettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discordSettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DiscordSettings.
     * @param {discordSettingsCreateArgs} args - Arguments to create a DiscordSettings.
     * @example
     * // Create one DiscordSettings
     * const DiscordSettings = await prisma.discordSettings.create({
     *   data: {
     *     // ... data to create a DiscordSettings
     *   }
     * })
     * 
    **/
    create<T extends discordSettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, discordSettingsCreateArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DiscordSettings.
     *     @param {discordSettingsCreateManyArgs} args - Arguments to create many DiscordSettings.
     *     @example
     *     // Create many DiscordSettings
     *     const discordSettings = await prisma.discordSettings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends discordSettingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discordSettingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiscordSettings.
     * @param {discordSettingsDeleteArgs} args - Arguments to delete one DiscordSettings.
     * @example
     * // Delete one DiscordSettings
     * const DiscordSettings = await prisma.discordSettings.delete({
     *   where: {
     *     // ... filter to delete one DiscordSettings
     *   }
     * })
     * 
    **/
    delete<T extends discordSettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, discordSettingsDeleteArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DiscordSettings.
     * @param {discordSettingsUpdateArgs} args - Arguments to update one DiscordSettings.
     * @example
     * // Update one DiscordSettings
     * const discordSettings = await prisma.discordSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends discordSettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, discordSettingsUpdateArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DiscordSettings.
     * @param {discordSettingsDeleteManyArgs} args - Arguments to filter DiscordSettings to delete.
     * @example
     * // Delete a few DiscordSettings
     * const { count } = await prisma.discordSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends discordSettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, discordSettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscordSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscordSettings
     * const discordSettings = await prisma.discordSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends discordSettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, discordSettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiscordSettings.
     * @param {discordSettingsUpsertArgs} args - Arguments to update or create a DiscordSettings.
     * @example
     * // Update or create a DiscordSettings
     * const discordSettings = await prisma.discordSettings.upsert({
     *   create: {
     *     // ... data to create a DiscordSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscordSettings we want to update
     *   }
     * })
    **/
    upsert<T extends discordSettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, discordSettingsUpsertArgs<ExtArgs>>
    ): Prisma__discordSettingsClient<$Result.GetResult<Prisma.$discordSettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DiscordSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordSettingsCountArgs} args - Arguments to filter DiscordSettings to count.
     * @example
     * // Count the number of DiscordSettings
     * const count = await prisma.discordSettings.count({
     *   where: {
     *     // ... the filter for the DiscordSettings we want to count
     *   }
     * })
    **/
    count<T extends discordSettingsCountArgs>(
      args?: Subset<T, discordSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscordSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscordSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscordSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscordSettingsAggregateArgs>(args: Subset<T, DiscordSettingsAggregateArgs>): Prisma.PrismaPromise<GetDiscordSettingsAggregateType<T>>

    /**
     * Group by DiscordSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {discordSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends discordSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: discordSettingsGroupByArgs['orderBy'] }
        : { orderBy?: discordSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, discordSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscordSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the discordSettings model
   */
  readonly fields: discordSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for discordSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__discordSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the discordSettings model
   */ 
  interface discordSettingsFieldRefs {
    readonly id: FieldRef<"discordSettings", 'Int'>
    readonly botId: FieldRef<"discordSettings", 'Int'>
    readonly webHookUrl: FieldRef<"discordSettings", 'String'>
    readonly slGroupUuid: FieldRef<"discordSettings", 'String'>
    readonly discChannelId: FieldRef<"discordSettings", 'String'>
    readonly createdAt: FieldRef<"discordSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"discordSettings", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * discordSettings findUnique
   */
  export type discordSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * Filter, which discordSettings to fetch.
     */
    where: discordSettingsWhereUniqueInput
  }


  /**
   * discordSettings findUniqueOrThrow
   */
  export type discordSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * Filter, which discordSettings to fetch.
     */
    where: discordSettingsWhereUniqueInput
  }


  /**
   * discordSettings findFirst
   */
  export type discordSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * Filter, which discordSettings to fetch.
     */
    where?: discordSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discordSettings to fetch.
     */
    orderBy?: discordSettingsOrderByWithRelationInput | discordSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discordSettings.
     */
    cursor?: discordSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discordSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discordSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discordSettings.
     */
    distinct?: DiscordSettingsScalarFieldEnum | DiscordSettingsScalarFieldEnum[]
  }


  /**
   * discordSettings findFirstOrThrow
   */
  export type discordSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * Filter, which discordSettings to fetch.
     */
    where?: discordSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discordSettings to fetch.
     */
    orderBy?: discordSettingsOrderByWithRelationInput | discordSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for discordSettings.
     */
    cursor?: discordSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discordSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discordSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of discordSettings.
     */
    distinct?: DiscordSettingsScalarFieldEnum | DiscordSettingsScalarFieldEnum[]
  }


  /**
   * discordSettings findMany
   */
  export type discordSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * Filter, which discordSettings to fetch.
     */
    where?: discordSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of discordSettings to fetch.
     */
    orderBy?: discordSettingsOrderByWithRelationInput | discordSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing discordSettings.
     */
    cursor?: discordSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` discordSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` discordSettings.
     */
    skip?: number
    distinct?: DiscordSettingsScalarFieldEnum | DiscordSettingsScalarFieldEnum[]
  }


  /**
   * discordSettings create
   */
  export type discordSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * The data needed to create a discordSettings.
     */
    data: XOR<discordSettingsCreateInput, discordSettingsUncheckedCreateInput>
  }


  /**
   * discordSettings createMany
   */
  export type discordSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many discordSettings.
     */
    data: discordSettingsCreateManyInput | discordSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * discordSettings update
   */
  export type discordSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * The data needed to update a discordSettings.
     */
    data: XOR<discordSettingsUpdateInput, discordSettingsUncheckedUpdateInput>
    /**
     * Choose, which discordSettings to update.
     */
    where: discordSettingsWhereUniqueInput
  }


  /**
   * discordSettings updateMany
   */
  export type discordSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update discordSettings.
     */
    data: XOR<discordSettingsUpdateManyMutationInput, discordSettingsUncheckedUpdateManyInput>
    /**
     * Filter which discordSettings to update
     */
    where?: discordSettingsWhereInput
  }


  /**
   * discordSettings upsert
   */
  export type discordSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * The filter to search for the discordSettings to update in case it exists.
     */
    where: discordSettingsWhereUniqueInput
    /**
     * In case the discordSettings found by the `where` argument doesn't exist, create a new discordSettings with this data.
     */
    create: XOR<discordSettingsCreateInput, discordSettingsUncheckedCreateInput>
    /**
     * In case the discordSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<discordSettingsUpdateInput, discordSettingsUncheckedUpdateInput>
  }


  /**
   * discordSettings delete
   */
  export type discordSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
    /**
     * Filter which discordSettings to delete.
     */
    where: discordSettingsWhereUniqueInput
  }


  /**
   * discordSettings deleteMany
   */
  export type discordSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which discordSettings to delete
     */
    where?: discordSettingsWhereInput
  }


  /**
   * discordSettings without action
   */
  export type discordSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the discordSettings
     */
    select?: discordSettingsSelect<ExtArgs> | null
  }



  /**
   * Model groupImAvatar
   */

  export type AggregateGroupImAvatar = {
    _count: GroupImAvatarCountAggregateOutputType | null
    _avg: GroupImAvatarAvgAggregateOutputType | null
    _sum: GroupImAvatarSumAggregateOutputType | null
    _min: GroupImAvatarMinAggregateOutputType | null
    _max: GroupImAvatarMaxAggregateOutputType | null
  }

  export type GroupImAvatarAvgAggregateOutputType = {
    id: number | null
    groupImListId: number | null
  }

  export type GroupImAvatarSumAggregateOutputType = {
    id: number | null
    groupImListId: number | null
  }

  export type GroupImAvatarMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    groupImListId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupImAvatarMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    groupImListId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupImAvatarCountAggregateOutputType = {
    id: number
    uuid: number
    groupImListId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupImAvatarAvgAggregateInputType = {
    id?: true
    groupImListId?: true
  }

  export type GroupImAvatarSumAggregateInputType = {
    id?: true
    groupImListId?: true
  }

  export type GroupImAvatarMinAggregateInputType = {
    id?: true
    uuid?: true
    groupImListId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupImAvatarMaxAggregateInputType = {
    id?: true
    uuid?: true
    groupImListId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupImAvatarCountAggregateInputType = {
    id?: true
    uuid?: true
    groupImListId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupImAvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groupImAvatar to aggregate.
     */
    where?: groupImAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImAvatars to fetch.
     */
    orderBy?: groupImAvatarOrderByWithRelationInput | groupImAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupImAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groupImAvatars
    **/
    _count?: true | GroupImAvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupImAvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupImAvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupImAvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupImAvatarMaxAggregateInputType
  }

  export type GetGroupImAvatarAggregateType<T extends GroupImAvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupImAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupImAvatar[P]>
      : GetScalarType<T[P], AggregateGroupImAvatar[P]>
  }




  export type groupImAvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupImAvatarWhereInput
    orderBy?: groupImAvatarOrderByWithAggregationInput | groupImAvatarOrderByWithAggregationInput[]
    by: GroupImAvatarScalarFieldEnum[] | GroupImAvatarScalarFieldEnum
    having?: groupImAvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupImAvatarCountAggregateInputType | true
    _avg?: GroupImAvatarAvgAggregateInputType
    _sum?: GroupImAvatarSumAggregateInputType
    _min?: GroupImAvatarMinAggregateInputType
    _max?: GroupImAvatarMaxAggregateInputType
  }

  export type GroupImAvatarGroupByOutputType = {
    id: number
    uuid: string
    groupImListId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: GroupImAvatarCountAggregateOutputType | null
    _avg: GroupImAvatarAvgAggregateOutputType | null
    _sum: GroupImAvatarSumAggregateOutputType | null
    _min: GroupImAvatarMinAggregateOutputType | null
    _max: GroupImAvatarMaxAggregateOutputType | null
  }

  type GetGroupImAvatarGroupByPayload<T extends groupImAvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupImAvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupImAvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupImAvatarGroupByOutputType[P]>
            : GetScalarType<T[P], GroupImAvatarGroupByOutputType[P]>
        }
      >
    >


  export type groupImAvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    groupImListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupImList?: boolean | groupImListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupImAvatar"]>

  export type groupImAvatarSelectScalar = {
    id?: boolean
    uuid?: boolean
    groupImListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type groupImAvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupImList?: boolean | groupImListDefaultArgs<ExtArgs>
  }


  export type $groupImAvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groupImAvatar"
    objects: {
      groupImList: Prisma.$groupImListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      groupImListId: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["groupImAvatar"]>
    composites: {}
  }


  type groupImAvatarGetPayload<S extends boolean | null | undefined | groupImAvatarDefaultArgs> = $Result.GetResult<Prisma.$groupImAvatarPayload, S>

  type groupImAvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<groupImAvatarFindManyArgs, 'select' | 'include'> & {
      select?: GroupImAvatarCountAggregateInputType | true
    }

  export interface groupImAvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groupImAvatar'], meta: { name: 'groupImAvatar' } }
    /**
     * Find zero or one GroupImAvatar that matches the filter.
     * @param {groupImAvatarFindUniqueArgs} args - Arguments to find a GroupImAvatar
     * @example
     * // Get one GroupImAvatar
     * const groupImAvatar = await prisma.groupImAvatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends groupImAvatarFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, groupImAvatarFindUniqueArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupImAvatar that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {groupImAvatarFindUniqueOrThrowArgs} args - Arguments to find a GroupImAvatar
     * @example
     * // Get one GroupImAvatar
     * const groupImAvatar = await prisma.groupImAvatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends groupImAvatarFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImAvatarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupImAvatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImAvatarFindFirstArgs} args - Arguments to find a GroupImAvatar
     * @example
     * // Get one GroupImAvatar
     * const groupImAvatar = await prisma.groupImAvatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends groupImAvatarFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImAvatarFindFirstArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupImAvatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImAvatarFindFirstOrThrowArgs} args - Arguments to find a GroupImAvatar
     * @example
     * // Get one GroupImAvatar
     * const groupImAvatar = await prisma.groupImAvatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends groupImAvatarFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImAvatarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupImAvatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImAvatarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupImAvatars
     * const groupImAvatars = await prisma.groupImAvatar.findMany()
     * 
     * // Get first 10 GroupImAvatars
     * const groupImAvatars = await prisma.groupImAvatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupImAvatarWithIdOnly = await prisma.groupImAvatar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends groupImAvatarFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImAvatarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupImAvatar.
     * @param {groupImAvatarCreateArgs} args - Arguments to create a GroupImAvatar.
     * @example
     * // Create one GroupImAvatar
     * const GroupImAvatar = await prisma.groupImAvatar.create({
     *   data: {
     *     // ... data to create a GroupImAvatar
     *   }
     * })
     * 
    **/
    create<T extends groupImAvatarCreateArgs<ExtArgs>>(
      args: SelectSubset<T, groupImAvatarCreateArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupImAvatars.
     *     @param {groupImAvatarCreateManyArgs} args - Arguments to create many GroupImAvatars.
     *     @example
     *     // Create many GroupImAvatars
     *     const groupImAvatar = await prisma.groupImAvatar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends groupImAvatarCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImAvatarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupImAvatar.
     * @param {groupImAvatarDeleteArgs} args - Arguments to delete one GroupImAvatar.
     * @example
     * // Delete one GroupImAvatar
     * const GroupImAvatar = await prisma.groupImAvatar.delete({
     *   where: {
     *     // ... filter to delete one GroupImAvatar
     *   }
     * })
     * 
    **/
    delete<T extends groupImAvatarDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, groupImAvatarDeleteArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupImAvatar.
     * @param {groupImAvatarUpdateArgs} args - Arguments to update one GroupImAvatar.
     * @example
     * // Update one GroupImAvatar
     * const groupImAvatar = await prisma.groupImAvatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends groupImAvatarUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, groupImAvatarUpdateArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupImAvatars.
     * @param {groupImAvatarDeleteManyArgs} args - Arguments to filter GroupImAvatars to delete.
     * @example
     * // Delete a few GroupImAvatars
     * const { count } = await prisma.groupImAvatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends groupImAvatarDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImAvatarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupImAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImAvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupImAvatars
     * const groupImAvatar = await prisma.groupImAvatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends groupImAvatarUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, groupImAvatarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupImAvatar.
     * @param {groupImAvatarUpsertArgs} args - Arguments to update or create a GroupImAvatar.
     * @example
     * // Update or create a GroupImAvatar
     * const groupImAvatar = await prisma.groupImAvatar.upsert({
     *   create: {
     *     // ... data to create a GroupImAvatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupImAvatar we want to update
     *   }
     * })
    **/
    upsert<T extends groupImAvatarUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, groupImAvatarUpsertArgs<ExtArgs>>
    ): Prisma__groupImAvatarClient<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GroupImAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImAvatarCountArgs} args - Arguments to filter GroupImAvatars to count.
     * @example
     * // Count the number of GroupImAvatars
     * const count = await prisma.groupImAvatar.count({
     *   where: {
     *     // ... the filter for the GroupImAvatars we want to count
     *   }
     * })
    **/
    count<T extends groupImAvatarCountArgs>(
      args?: Subset<T, groupImAvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupImAvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupImAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupImAvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupImAvatarAggregateArgs>(args: Subset<T, GroupImAvatarAggregateArgs>): Prisma.PrismaPromise<GetGroupImAvatarAggregateType<T>>

    /**
     * Group by GroupImAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImAvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends groupImAvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupImAvatarGroupByArgs['orderBy'] }
        : { orderBy?: groupImAvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, groupImAvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupImAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groupImAvatar model
   */
  readonly fields: groupImAvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groupImAvatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupImAvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    groupImList<T extends groupImListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupImListDefaultArgs<ExtArgs>>): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the groupImAvatar model
   */ 
  interface groupImAvatarFieldRefs {
    readonly id: FieldRef<"groupImAvatar", 'Int'>
    readonly uuid: FieldRef<"groupImAvatar", 'String'>
    readonly groupImListId: FieldRef<"groupImAvatar", 'Int'>
    readonly createdAt: FieldRef<"groupImAvatar", 'DateTime'>
    readonly updatedAt: FieldRef<"groupImAvatar", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * groupImAvatar findUnique
   */
  export type groupImAvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * Filter, which groupImAvatar to fetch.
     */
    where: groupImAvatarWhereUniqueInput
  }


  /**
   * groupImAvatar findUniqueOrThrow
   */
  export type groupImAvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * Filter, which groupImAvatar to fetch.
     */
    where: groupImAvatarWhereUniqueInput
  }


  /**
   * groupImAvatar findFirst
   */
  export type groupImAvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * Filter, which groupImAvatar to fetch.
     */
    where?: groupImAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImAvatars to fetch.
     */
    orderBy?: groupImAvatarOrderByWithRelationInput | groupImAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groupImAvatars.
     */
    cursor?: groupImAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groupImAvatars.
     */
    distinct?: GroupImAvatarScalarFieldEnum | GroupImAvatarScalarFieldEnum[]
  }


  /**
   * groupImAvatar findFirstOrThrow
   */
  export type groupImAvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * Filter, which groupImAvatar to fetch.
     */
    where?: groupImAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImAvatars to fetch.
     */
    orderBy?: groupImAvatarOrderByWithRelationInput | groupImAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groupImAvatars.
     */
    cursor?: groupImAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groupImAvatars.
     */
    distinct?: GroupImAvatarScalarFieldEnum | GroupImAvatarScalarFieldEnum[]
  }


  /**
   * groupImAvatar findMany
   */
  export type groupImAvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * Filter, which groupImAvatars to fetch.
     */
    where?: groupImAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImAvatars to fetch.
     */
    orderBy?: groupImAvatarOrderByWithRelationInput | groupImAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groupImAvatars.
     */
    cursor?: groupImAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImAvatars.
     */
    skip?: number
    distinct?: GroupImAvatarScalarFieldEnum | GroupImAvatarScalarFieldEnum[]
  }


  /**
   * groupImAvatar create
   */
  export type groupImAvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a groupImAvatar.
     */
    data: XOR<groupImAvatarCreateInput, groupImAvatarUncheckedCreateInput>
  }


  /**
   * groupImAvatar createMany
   */
  export type groupImAvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groupImAvatars.
     */
    data: groupImAvatarCreateManyInput | groupImAvatarCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * groupImAvatar update
   */
  export type groupImAvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a groupImAvatar.
     */
    data: XOR<groupImAvatarUpdateInput, groupImAvatarUncheckedUpdateInput>
    /**
     * Choose, which groupImAvatar to update.
     */
    where: groupImAvatarWhereUniqueInput
  }


  /**
   * groupImAvatar updateMany
   */
  export type groupImAvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groupImAvatars.
     */
    data: XOR<groupImAvatarUpdateManyMutationInput, groupImAvatarUncheckedUpdateManyInput>
    /**
     * Filter which groupImAvatars to update
     */
    where?: groupImAvatarWhereInput
  }


  /**
   * groupImAvatar upsert
   */
  export type groupImAvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the groupImAvatar to update in case it exists.
     */
    where: groupImAvatarWhereUniqueInput
    /**
     * In case the groupImAvatar found by the `where` argument doesn't exist, create a new groupImAvatar with this data.
     */
    create: XOR<groupImAvatarCreateInput, groupImAvatarUncheckedCreateInput>
    /**
     * In case the groupImAvatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupImAvatarUpdateInput, groupImAvatarUncheckedUpdateInput>
  }


  /**
   * groupImAvatar delete
   */
  export type groupImAvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    /**
     * Filter which groupImAvatar to delete.
     */
    where: groupImAvatarWhereUniqueInput
  }


  /**
   * groupImAvatar deleteMany
   */
  export type groupImAvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groupImAvatars to delete
     */
    where?: groupImAvatarWhereInput
  }


  /**
   * groupImAvatar without action
   */
  export type groupImAvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
  }



  /**
   * Model groupImList
   */

  export type AggregateGroupImList = {
    _count: GroupImListCountAggregateOutputType | null
    _avg: GroupImListAvgAggregateOutputType | null
    _sum: GroupImListSumAggregateOutputType | null
    _min: GroupImListMinAggregateOutputType | null
    _max: GroupImListMaxAggregateOutputType | null
  }

  export type GroupImListAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GroupImListSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GroupImListMinAggregateOutputType = {
    id: number | null
    listName: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupImListMaxAggregateOutputType = {
    id: number | null
    listName: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupImListCountAggregateOutputType = {
    id: number
    listName: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupImListAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GroupImListSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GroupImListMinAggregateInputType = {
    id?: true
    listName?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupImListMaxAggregateInputType = {
    id?: true
    listName?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupImListCountAggregateInputType = {
    id?: true
    listName?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupImListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groupImList to aggregate.
     */
    where?: groupImListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImLists to fetch.
     */
    orderBy?: groupImListOrderByWithRelationInput | groupImListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupImListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groupImLists
    **/
    _count?: true | GroupImListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupImListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupImListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupImListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupImListMaxAggregateInputType
  }

  export type GetGroupImListAggregateType<T extends GroupImListAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupImList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupImList[P]>
      : GetScalarType<T[P], AggregateGroupImList[P]>
  }




  export type groupImListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupImListWhereInput
    orderBy?: groupImListOrderByWithAggregationInput | groupImListOrderByWithAggregationInput[]
    by: GroupImListScalarFieldEnum[] | GroupImListScalarFieldEnum
    having?: groupImListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupImListCountAggregateInputType | true
    _avg?: GroupImListAvgAggregateInputType
    _sum?: GroupImListSumAggregateInputType
    _min?: GroupImListMinAggregateInputType
    _max?: GroupImListMaxAggregateInputType
  }

  export type GroupImListGroupByOutputType = {
    id: number
    listName: string
    userId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: GroupImListCountAggregateOutputType | null
    _avg: GroupImListAvgAggregateOutputType | null
    _sum: GroupImListSumAggregateOutputType | null
    _min: GroupImListMinAggregateOutputType | null
    _max: GroupImListMaxAggregateOutputType | null
  }

  type GetGroupImListGroupByPayload<T extends groupImListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupImListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupImListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupImListGroupByOutputType[P]>
            : GetScalarType<T[P], GroupImListGroupByOutputType[P]>
        }
      >
    >


  export type groupImListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listName?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupImAvatar?: boolean | groupImList$groupImAvatarArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | GroupImListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupImList"]>

  export type groupImListSelectScalar = {
    id?: boolean
    listName?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type groupImListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupImAvatar?: boolean | groupImList$groupImAvatarArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | GroupImListCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $groupImListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groupImList"
    objects: {
      groupImAvatar: Prisma.$groupImAvatarPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listName: string
      userId: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["groupImList"]>
    composites: {}
  }


  type groupImListGetPayload<S extends boolean | null | undefined | groupImListDefaultArgs> = $Result.GetResult<Prisma.$groupImListPayload, S>

  type groupImListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<groupImListFindManyArgs, 'select' | 'include'> & {
      select?: GroupImListCountAggregateInputType | true
    }

  export interface groupImListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groupImList'], meta: { name: 'groupImList' } }
    /**
     * Find zero or one GroupImList that matches the filter.
     * @param {groupImListFindUniqueArgs} args - Arguments to find a GroupImList
     * @example
     * // Get one GroupImList
     * const groupImList = await prisma.groupImList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends groupImListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, groupImListFindUniqueArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupImList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {groupImListFindUniqueOrThrowArgs} args - Arguments to find a GroupImList
     * @example
     * // Get one GroupImList
     * const groupImList = await prisma.groupImList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends groupImListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupImList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImListFindFirstArgs} args - Arguments to find a GroupImList
     * @example
     * // Get one GroupImList
     * const groupImList = await prisma.groupImList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends groupImListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImListFindFirstArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupImList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImListFindFirstOrThrowArgs} args - Arguments to find a GroupImList
     * @example
     * // Get one GroupImList
     * const groupImList = await prisma.groupImList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends groupImListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupImLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupImLists
     * const groupImLists = await prisma.groupImList.findMany()
     * 
     * // Get first 10 GroupImLists
     * const groupImLists = await prisma.groupImList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupImListWithIdOnly = await prisma.groupImList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends groupImListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupImList.
     * @param {groupImListCreateArgs} args - Arguments to create a GroupImList.
     * @example
     * // Create one GroupImList
     * const GroupImList = await prisma.groupImList.create({
     *   data: {
     *     // ... data to create a GroupImList
     *   }
     * })
     * 
    **/
    create<T extends groupImListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, groupImListCreateArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupImLists.
     *     @param {groupImListCreateManyArgs} args - Arguments to create many GroupImLists.
     *     @example
     *     // Create many GroupImLists
     *     const groupImList = await prisma.groupImList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends groupImListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupImList.
     * @param {groupImListDeleteArgs} args - Arguments to delete one GroupImList.
     * @example
     * // Delete one GroupImList
     * const GroupImList = await prisma.groupImList.delete({
     *   where: {
     *     // ... filter to delete one GroupImList
     *   }
     * })
     * 
    **/
    delete<T extends groupImListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, groupImListDeleteArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupImList.
     * @param {groupImListUpdateArgs} args - Arguments to update one GroupImList.
     * @example
     * // Update one GroupImList
     * const groupImList = await prisma.groupImList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends groupImListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, groupImListUpdateArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupImLists.
     * @param {groupImListDeleteManyArgs} args - Arguments to filter GroupImLists to delete.
     * @example
     * // Delete a few GroupImLists
     * const { count } = await prisma.groupImList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends groupImListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, groupImListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupImLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupImLists
     * const groupImList = await prisma.groupImList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends groupImListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, groupImListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupImList.
     * @param {groupImListUpsertArgs} args - Arguments to update or create a GroupImList.
     * @example
     * // Update or create a GroupImList
     * const groupImList = await prisma.groupImList.upsert({
     *   create: {
     *     // ... data to create a GroupImList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupImList we want to update
     *   }
     * })
    **/
    upsert<T extends groupImListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, groupImListUpsertArgs<ExtArgs>>
    ): Prisma__groupImListClient<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GroupImLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImListCountArgs} args - Arguments to filter GroupImLists to count.
     * @example
     * // Count the number of GroupImLists
     * const count = await prisma.groupImList.count({
     *   where: {
     *     // ... the filter for the GroupImLists we want to count
     *   }
     * })
    **/
    count<T extends groupImListCountArgs>(
      args?: Subset<T, groupImListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupImListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupImList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupImListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupImListAggregateArgs>(args: Subset<T, GroupImListAggregateArgs>): Prisma.PrismaPromise<GetGroupImListAggregateType<T>>

    /**
     * Group by GroupImList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupImListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends groupImListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupImListGroupByArgs['orderBy'] }
        : { orderBy?: groupImListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, groupImListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupImListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groupImList model
   */
  readonly fields: groupImListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groupImList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupImListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    groupImAvatar<T extends groupImList$groupImAvatarArgs<ExtArgs> = {}>(args?: Subset<T, groupImList$groupImAvatarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupImAvatarPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the groupImList model
   */ 
  interface groupImListFieldRefs {
    readonly id: FieldRef<"groupImList", 'Int'>
    readonly listName: FieldRef<"groupImList", 'String'>
    readonly userId: FieldRef<"groupImList", 'Int'>
    readonly createdAt: FieldRef<"groupImList", 'DateTime'>
    readonly updatedAt: FieldRef<"groupImList", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * groupImList findUnique
   */
  export type groupImListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * Filter, which groupImList to fetch.
     */
    where: groupImListWhereUniqueInput
  }


  /**
   * groupImList findUniqueOrThrow
   */
  export type groupImListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * Filter, which groupImList to fetch.
     */
    where: groupImListWhereUniqueInput
  }


  /**
   * groupImList findFirst
   */
  export type groupImListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * Filter, which groupImList to fetch.
     */
    where?: groupImListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImLists to fetch.
     */
    orderBy?: groupImListOrderByWithRelationInput | groupImListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groupImLists.
     */
    cursor?: groupImListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groupImLists.
     */
    distinct?: GroupImListScalarFieldEnum | GroupImListScalarFieldEnum[]
  }


  /**
   * groupImList findFirstOrThrow
   */
  export type groupImListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * Filter, which groupImList to fetch.
     */
    where?: groupImListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImLists to fetch.
     */
    orderBy?: groupImListOrderByWithRelationInput | groupImListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groupImLists.
     */
    cursor?: groupImListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groupImLists.
     */
    distinct?: GroupImListScalarFieldEnum | GroupImListScalarFieldEnum[]
  }


  /**
   * groupImList findMany
   */
  export type groupImListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * Filter, which groupImLists to fetch.
     */
    where?: groupImListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupImLists to fetch.
     */
    orderBy?: groupImListOrderByWithRelationInput | groupImListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groupImLists.
     */
    cursor?: groupImListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupImLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupImLists.
     */
    skip?: number
    distinct?: GroupImListScalarFieldEnum | GroupImListScalarFieldEnum[]
  }


  /**
   * groupImList create
   */
  export type groupImListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * The data needed to create a groupImList.
     */
    data: XOR<groupImListCreateInput, groupImListUncheckedCreateInput>
  }


  /**
   * groupImList createMany
   */
  export type groupImListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groupImLists.
     */
    data: groupImListCreateManyInput | groupImListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * groupImList update
   */
  export type groupImListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * The data needed to update a groupImList.
     */
    data: XOR<groupImListUpdateInput, groupImListUncheckedUpdateInput>
    /**
     * Choose, which groupImList to update.
     */
    where: groupImListWhereUniqueInput
  }


  /**
   * groupImList updateMany
   */
  export type groupImListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groupImLists.
     */
    data: XOR<groupImListUpdateManyMutationInput, groupImListUncheckedUpdateManyInput>
    /**
     * Filter which groupImLists to update
     */
    where?: groupImListWhereInput
  }


  /**
   * groupImList upsert
   */
  export type groupImListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * The filter to search for the groupImList to update in case it exists.
     */
    where: groupImListWhereUniqueInput
    /**
     * In case the groupImList found by the `where` argument doesn't exist, create a new groupImList with this data.
     */
    create: XOR<groupImListCreateInput, groupImListUncheckedCreateInput>
    /**
     * In case the groupImList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupImListUpdateInput, groupImListUncheckedUpdateInput>
  }


  /**
   * groupImList delete
   */
  export type groupImListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    /**
     * Filter which groupImList to delete.
     */
    where: groupImListWhereUniqueInput
  }


  /**
   * groupImList deleteMany
   */
  export type groupImListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groupImLists to delete
     */
    where?: groupImListWhereInput
  }


  /**
   * groupImList.groupImAvatar
   */
  export type groupImList$groupImAvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImAvatar
     */
    select?: groupImAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImAvatarInclude<ExtArgs> | null
    where?: groupImAvatarWhereInput
    orderBy?: groupImAvatarOrderByWithRelationInput | groupImAvatarOrderByWithRelationInput[]
    cursor?: groupImAvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupImAvatarScalarFieldEnum | GroupImAvatarScalarFieldEnum[]
  }


  /**
   * groupImList without action
   */
  export type groupImListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
  }



  /**
   * Model subPackage
   */

  export type AggregateSubPackage = {
    _count: SubPackageCountAggregateOutputType | null
    _avg: SubPackageAvgAggregateOutputType | null
    _sum: SubPackageSumAggregateOutputType | null
    _min: SubPackageMinAggregateOutputType | null
    _max: SubPackageMaxAggregateOutputType | null
  }

  export type SubPackageAvgAggregateOutputType = {
    id: number | null
    pricePerWeek: number | null
    discount: number | null
    pricePerMonth: number | null
    couponId: number | null
  }

  export type SubPackageSumAggregateOutputType = {
    id: number | null
    pricePerWeek: number | null
    discount: number | null
    pricePerMonth: number | null
    couponId: number | null
  }

  export type SubPackageMinAggregateOutputType = {
    id: number | null
    packageName: string | null
    packageDescription: string | null
    pricePerWeek: number | null
    discount: number | null
    pricePerMonth: number | null
    couponId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubPackageMaxAggregateOutputType = {
    id: number | null
    packageName: string | null
    packageDescription: string | null
    pricePerWeek: number | null
    discount: number | null
    pricePerMonth: number | null
    couponId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubPackageCountAggregateOutputType = {
    id: number
    packageName: number
    packageDescription: number
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    couponId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubPackageAvgAggregateInputType = {
    id?: true
    pricePerWeek?: true
    discount?: true
    pricePerMonth?: true
    couponId?: true
  }

  export type SubPackageSumAggregateInputType = {
    id?: true
    pricePerWeek?: true
    discount?: true
    pricePerMonth?: true
    couponId?: true
  }

  export type SubPackageMinAggregateInputType = {
    id?: true
    packageName?: true
    packageDescription?: true
    pricePerWeek?: true
    discount?: true
    pricePerMonth?: true
    couponId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubPackageMaxAggregateInputType = {
    id?: true
    packageName?: true
    packageDescription?: true
    pricePerWeek?: true
    discount?: true
    pricePerMonth?: true
    couponId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubPackageCountAggregateInputType = {
    id?: true
    packageName?: true
    packageDescription?: true
    pricePerWeek?: true
    discount?: true
    pricePerMonth?: true
    couponId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subPackage to aggregate.
     */
    where?: subPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subPackages to fetch.
     */
    orderBy?: subPackageOrderByWithRelationInput | subPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subPackages
    **/
    _count?: true | SubPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubPackageMaxAggregateInputType
  }

  export type GetSubPackageAggregateType<T extends SubPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateSubPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubPackage[P]>
      : GetScalarType<T[P], AggregateSubPackage[P]>
  }




  export type subPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subPackageWhereInput
    orderBy?: subPackageOrderByWithAggregationInput | subPackageOrderByWithAggregationInput[]
    by: SubPackageScalarFieldEnum[] | SubPackageScalarFieldEnum
    having?: subPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubPackageCountAggregateInputType | true
    _avg?: SubPackageAvgAggregateInputType
    _sum?: SubPackageSumAggregateInputType
    _min?: SubPackageMinAggregateInputType
    _max?: SubPackageMaxAggregateInputType
  }

  export type SubPackageGroupByOutputType = {
    id: number
    packageName: string
    packageDescription: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    couponId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: SubPackageCountAggregateOutputType | null
    _avg: SubPackageAvgAggregateOutputType | null
    _sum: SubPackageSumAggregateOutputType | null
    _min: SubPackageMinAggregateOutputType | null
    _max: SubPackageMaxAggregateOutputType | null
  }

  type GetSubPackageGroupByPayload<T extends subPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubPackageGroupByOutputType[P]>
            : GetScalarType<T[P], SubPackageGroupByOutputType[P]>
        }
      >
    >


  export type subPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageName?: boolean
    packageDescription?: boolean
    pricePerWeek?: boolean
    discount?: boolean
    pricePerMonth?: boolean
    couponId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coupon?: boolean | subPackage$couponArgs<ExtArgs>
    sharedBotUserSubscription?: boolean | subPackage$sharedBotUserSubscriptionArgs<ExtArgs>
    subscription?: boolean | subPackage$subscriptionArgs<ExtArgs>
    _count?: boolean | SubPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subPackage"]>

  export type subPackageSelectScalar = {
    id?: boolean
    packageName?: boolean
    packageDescription?: boolean
    pricePerWeek?: boolean
    discount?: boolean
    pricePerMonth?: boolean
    couponId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type subPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | subPackage$couponArgs<ExtArgs>
    sharedBotUserSubscription?: boolean | subPackage$sharedBotUserSubscriptionArgs<ExtArgs>
    subscription?: boolean | subPackage$subscriptionArgs<ExtArgs>
    _count?: boolean | SubPackageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $subPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subPackage"
    objects: {
      coupon: Prisma.$couponPayload<ExtArgs> | null
      sharedBotUserSubscription: Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>[]
      subscription: Prisma.$subscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      packageName: string
      packageDescription: string | null
      pricePerWeek: number
      discount: number
      pricePerMonth: number
      couponId: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["subPackage"]>
    composites: {}
  }


  type subPackageGetPayload<S extends boolean | null | undefined | subPackageDefaultArgs> = $Result.GetResult<Prisma.$subPackagePayload, S>

  type subPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<subPackageFindManyArgs, 'select' | 'include'> & {
      select?: SubPackageCountAggregateInputType | true
    }

  export interface subPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subPackage'], meta: { name: 'subPackage' } }
    /**
     * Find zero or one SubPackage that matches the filter.
     * @param {subPackageFindUniqueArgs} args - Arguments to find a SubPackage
     * @example
     * // Get one SubPackage
     * const subPackage = await prisma.subPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subPackageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subPackageFindUniqueArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubPackage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subPackageFindUniqueOrThrowArgs} args - Arguments to find a SubPackage
     * @example
     * // Get one SubPackage
     * const subPackage = await prisma.subPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subPackageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subPackageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subPackageFindFirstArgs} args - Arguments to find a SubPackage
     * @example
     * // Get one SubPackage
     * const subPackage = await prisma.subPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subPackageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subPackageFindFirstArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subPackageFindFirstOrThrowArgs} args - Arguments to find a SubPackage
     * @example
     * // Get one SubPackage
     * const subPackage = await prisma.subPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subPackageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subPackageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subPackageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubPackages
     * const subPackages = await prisma.subPackage.findMany()
     * 
     * // Get first 10 SubPackages
     * const subPackages = await prisma.subPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subPackageWithIdOnly = await prisma.subPackage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends subPackageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subPackageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubPackage.
     * @param {subPackageCreateArgs} args - Arguments to create a SubPackage.
     * @example
     * // Create one SubPackage
     * const SubPackage = await prisma.subPackage.create({
     *   data: {
     *     // ... data to create a SubPackage
     *   }
     * })
     * 
    **/
    create<T extends subPackageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subPackageCreateArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubPackages.
     *     @param {subPackageCreateManyArgs} args - Arguments to create many SubPackages.
     *     @example
     *     // Create many SubPackages
     *     const subPackage = await prisma.subPackage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subPackageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subPackageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubPackage.
     * @param {subPackageDeleteArgs} args - Arguments to delete one SubPackage.
     * @example
     * // Delete one SubPackage
     * const SubPackage = await prisma.subPackage.delete({
     *   where: {
     *     // ... filter to delete one SubPackage
     *   }
     * })
     * 
    **/
    delete<T extends subPackageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subPackageDeleteArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubPackage.
     * @param {subPackageUpdateArgs} args - Arguments to update one SubPackage.
     * @example
     * // Update one SubPackage
     * const subPackage = await prisma.subPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subPackageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subPackageUpdateArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubPackages.
     * @param {subPackageDeleteManyArgs} args - Arguments to filter SubPackages to delete.
     * @example
     * // Delete a few SubPackages
     * const { count } = await prisma.subPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subPackageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subPackageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubPackages
     * const subPackage = await prisma.subPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subPackageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subPackageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubPackage.
     * @param {subPackageUpsertArgs} args - Arguments to update or create a SubPackage.
     * @example
     * // Update or create a SubPackage
     * const subPackage = await prisma.subPackage.upsert({
     *   create: {
     *     // ... data to create a SubPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubPackage we want to update
     *   }
     * })
    **/
    upsert<T extends subPackageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subPackageUpsertArgs<ExtArgs>>
    ): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subPackageCountArgs} args - Arguments to filter SubPackages to count.
     * @example
     * // Count the number of SubPackages
     * const count = await prisma.subPackage.count({
     *   where: {
     *     // ... the filter for the SubPackages we want to count
     *   }
     * })
    **/
    count<T extends subPackageCountArgs>(
      args?: Subset<T, subPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubPackageAggregateArgs>(args: Subset<T, SubPackageAggregateArgs>): Prisma.PrismaPromise<GetSubPackageAggregateType<T>>

    /**
     * Group by SubPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subPackageGroupByArgs['orderBy'] }
        : { orderBy?: subPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subPackage model
   */
  readonly fields: subPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    coupon<T extends subPackage$couponArgs<ExtArgs> = {}>(args?: Subset<T, subPackage$couponArgs<ExtArgs>>): Prisma__couponClient<$Result.GetResult<Prisma.$couponPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    sharedBotUserSubscription<T extends subPackage$sharedBotUserSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, subPackage$sharedBotUserSubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    subscription<T extends subPackage$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, subPackage$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the subPackage model
   */ 
  interface subPackageFieldRefs {
    readonly id: FieldRef<"subPackage", 'Int'>
    readonly packageName: FieldRef<"subPackage", 'String'>
    readonly packageDescription: FieldRef<"subPackage", 'String'>
    readonly pricePerWeek: FieldRef<"subPackage", 'Int'>
    readonly discount: FieldRef<"subPackage", 'Int'>
    readonly pricePerMonth: FieldRef<"subPackage", 'Int'>
    readonly couponId: FieldRef<"subPackage", 'Int'>
    readonly createdAt: FieldRef<"subPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"subPackage", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * subPackage findUnique
   */
  export type subPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * Filter, which subPackage to fetch.
     */
    where: subPackageWhereUniqueInput
  }


  /**
   * subPackage findUniqueOrThrow
   */
  export type subPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * Filter, which subPackage to fetch.
     */
    where: subPackageWhereUniqueInput
  }


  /**
   * subPackage findFirst
   */
  export type subPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * Filter, which subPackage to fetch.
     */
    where?: subPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subPackages to fetch.
     */
    orderBy?: subPackageOrderByWithRelationInput | subPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subPackages.
     */
    cursor?: subPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subPackages.
     */
    distinct?: SubPackageScalarFieldEnum | SubPackageScalarFieldEnum[]
  }


  /**
   * subPackage findFirstOrThrow
   */
  export type subPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * Filter, which subPackage to fetch.
     */
    where?: subPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subPackages to fetch.
     */
    orderBy?: subPackageOrderByWithRelationInput | subPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subPackages.
     */
    cursor?: subPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subPackages.
     */
    distinct?: SubPackageScalarFieldEnum | SubPackageScalarFieldEnum[]
  }


  /**
   * subPackage findMany
   */
  export type subPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * Filter, which subPackages to fetch.
     */
    where?: subPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subPackages to fetch.
     */
    orderBy?: subPackageOrderByWithRelationInput | subPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subPackages.
     */
    cursor?: subPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subPackages.
     */
    skip?: number
    distinct?: SubPackageScalarFieldEnum | SubPackageScalarFieldEnum[]
  }


  /**
   * subPackage create
   */
  export type subPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a subPackage.
     */
    data: XOR<subPackageCreateInput, subPackageUncheckedCreateInput>
  }


  /**
   * subPackage createMany
   */
  export type subPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subPackages.
     */
    data: subPackageCreateManyInput | subPackageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subPackage update
   */
  export type subPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a subPackage.
     */
    data: XOR<subPackageUpdateInput, subPackageUncheckedUpdateInput>
    /**
     * Choose, which subPackage to update.
     */
    where: subPackageWhereUniqueInput
  }


  /**
   * subPackage updateMany
   */
  export type subPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subPackages.
     */
    data: XOR<subPackageUpdateManyMutationInput, subPackageUncheckedUpdateManyInput>
    /**
     * Filter which subPackages to update
     */
    where?: subPackageWhereInput
  }


  /**
   * subPackage upsert
   */
  export type subPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the subPackage to update in case it exists.
     */
    where: subPackageWhereUniqueInput
    /**
     * In case the subPackage found by the `where` argument doesn't exist, create a new subPackage with this data.
     */
    create: XOR<subPackageCreateInput, subPackageUncheckedCreateInput>
    /**
     * In case the subPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subPackageUpdateInput, subPackageUncheckedUpdateInput>
  }


  /**
   * subPackage delete
   */
  export type subPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
    /**
     * Filter which subPackage to delete.
     */
    where: subPackageWhereUniqueInput
  }


  /**
   * subPackage deleteMany
   */
  export type subPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subPackages to delete
     */
    where?: subPackageWhereInput
  }


  /**
   * subPackage.coupon
   */
  export type subPackage$couponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coupon
     */
    select?: couponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: couponInclude<ExtArgs> | null
    where?: couponWhereInput
  }


  /**
   * subPackage.sharedBotUserSubscription
   */
  export type subPackage$sharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    where?: sharedBotUserSubscriptionWhereInput
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedBotUserSubscriptionScalarFieldEnum | SharedBotUserSubscriptionScalarFieldEnum[]
  }


  /**
   * subPackage.subscription
   */
  export type subPackage$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    where?: subscriptionWhereInput
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    cursor?: subscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * subPackage without action
   */
  export type subPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subPackage
     */
    select?: subPackageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subPackageInclude<ExtArgs> | null
  }



  /**
   * Model paymentLog
   */

  export type AggregatePaymentLog = {
    _count: PaymentLogCountAggregateOutputType | null
    _avg: PaymentLogAvgAggregateOutputType | null
    _sum: PaymentLogSumAggregateOutputType | null
    _min: PaymentLogMinAggregateOutputType | null
    _max: PaymentLogMaxAggregateOutputType | null
  }

  export type PaymentLogAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentLogSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentLogMinAggregateOutputType = {
    id: number | null
    userUuid: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentLogMaxAggregateOutputType = {
    id: number | null
    userUuid: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentLogCountAggregateOutputType = {
    id: number
    userUuid: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentLogAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentLogSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentLogMinAggregateInputType = {
    id?: true
    userUuid?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentLogMaxAggregateInputType = {
    id?: true
    userUuid?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentLogCountAggregateInputType = {
    id?: true
    userUuid?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentLog to aggregate.
     */
    where?: paymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentLogs to fetch.
     */
    orderBy?: paymentLogOrderByWithRelationInput | paymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paymentLogs
    **/
    _count?: true | PaymentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentLogMaxAggregateInputType
  }

  export type GetPaymentLogAggregateType<T extends PaymentLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentLog[P]>
      : GetScalarType<T[P], AggregatePaymentLog[P]>
  }




  export type paymentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentLogWhereInput
    orderBy?: paymentLogOrderByWithAggregationInput | paymentLogOrderByWithAggregationInput[]
    by: PaymentLogScalarFieldEnum[] | PaymentLogScalarFieldEnum
    having?: paymentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentLogCountAggregateInputType | true
    _avg?: PaymentLogAvgAggregateInputType
    _sum?: PaymentLogSumAggregateInputType
    _min?: PaymentLogMinAggregateInputType
    _max?: PaymentLogMaxAggregateInputType
  }

  export type PaymentLogGroupByOutputType = {
    id: number
    userUuid: string
    amount: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: PaymentLogCountAggregateOutputType | null
    _avg: PaymentLogAvgAggregateOutputType | null
    _sum: PaymentLogSumAggregateOutputType | null
    _min: PaymentLogMinAggregateOutputType | null
    _max: PaymentLogMaxAggregateOutputType | null
  }

  type GetPaymentLogGroupByPayload<T extends paymentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
        }
      >
    >


  export type paymentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userUuid?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLog"]>

  export type paymentLogSelectScalar = {
    id?: boolean
    userUuid?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type paymentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $paymentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paymentLog"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userUuid: string
      amount: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["paymentLog"]>
    composites: {}
  }


  type paymentLogGetPayload<S extends boolean | null | undefined | paymentLogDefaultArgs> = $Result.GetResult<Prisma.$paymentLogPayload, S>

  type paymentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paymentLogFindManyArgs, 'select' | 'include'> & {
      select?: PaymentLogCountAggregateInputType | true
    }

  export interface paymentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paymentLog'], meta: { name: 'paymentLog' } }
    /**
     * Find zero or one PaymentLog that matches the filter.
     * @param {paymentLogFindUniqueArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends paymentLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentLogFindUniqueArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {paymentLogFindUniqueOrThrowArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends paymentLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentLogFindFirstArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends paymentLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentLogFindFirstArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentLogFindFirstOrThrowArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends paymentLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentLogs
     * const paymentLogs = await prisma.paymentLog.findMany()
     * 
     * // Get first 10 PaymentLogs
     * const paymentLogs = await prisma.paymentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentLogWithIdOnly = await prisma.paymentLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends paymentLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentLog.
     * @param {paymentLogCreateArgs} args - Arguments to create a PaymentLog.
     * @example
     * // Create one PaymentLog
     * const PaymentLog = await prisma.paymentLog.create({
     *   data: {
     *     // ... data to create a PaymentLog
     *   }
     * })
     * 
    **/
    create<T extends paymentLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentLogCreateArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentLogs.
     *     @param {paymentLogCreateManyArgs} args - Arguments to create many PaymentLogs.
     *     @example
     *     // Create many PaymentLogs
     *     const paymentLog = await prisma.paymentLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends paymentLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentLog.
     * @param {paymentLogDeleteArgs} args - Arguments to delete one PaymentLog.
     * @example
     * // Delete one PaymentLog
     * const PaymentLog = await prisma.paymentLog.delete({
     *   where: {
     *     // ... filter to delete one PaymentLog
     *   }
     * })
     * 
    **/
    delete<T extends paymentLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentLogDeleteArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentLog.
     * @param {paymentLogUpdateArgs} args - Arguments to update one PaymentLog.
     * @example
     * // Update one PaymentLog
     * const paymentLog = await prisma.paymentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends paymentLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentLogUpdateArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentLogs.
     * @param {paymentLogDeleteManyArgs} args - Arguments to filter PaymentLogs to delete.
     * @example
     * // Delete a few PaymentLogs
     * const { count } = await prisma.paymentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends paymentLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentLogs
     * const paymentLog = await prisma.paymentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends paymentLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentLog.
     * @param {paymentLogUpsertArgs} args - Arguments to update or create a PaymentLog.
     * @example
     * // Update or create a PaymentLog
     * const paymentLog = await prisma.paymentLog.upsert({
     *   create: {
     *     // ... data to create a PaymentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentLog we want to update
     *   }
     * })
    **/
    upsert<T extends paymentLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentLogUpsertArgs<ExtArgs>>
    ): Prisma__paymentLogClient<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentLogCountArgs} args - Arguments to filter PaymentLogs to count.
     * @example
     * // Count the number of PaymentLogs
     * const count = await prisma.paymentLog.count({
     *   where: {
     *     // ... the filter for the PaymentLogs we want to count
     *   }
     * })
    **/
    count<T extends paymentLogCountArgs>(
      args?: Subset<T, paymentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentLogAggregateArgs>(args: Subset<T, PaymentLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentLogAggregateType<T>>

    /**
     * Group by PaymentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentLogGroupByArgs['orderBy'] }
        : { orderBy?: paymentLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paymentLog model
   */
  readonly fields: paymentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paymentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the paymentLog model
   */ 
  interface paymentLogFieldRefs {
    readonly id: FieldRef<"paymentLog", 'Int'>
    readonly userUuid: FieldRef<"paymentLog", 'String'>
    readonly amount: FieldRef<"paymentLog", 'Int'>
    readonly createdAt: FieldRef<"paymentLog", 'DateTime'>
    readonly updatedAt: FieldRef<"paymentLog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * paymentLog findUnique
   */
  export type paymentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * Filter, which paymentLog to fetch.
     */
    where: paymentLogWhereUniqueInput
  }


  /**
   * paymentLog findUniqueOrThrow
   */
  export type paymentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * Filter, which paymentLog to fetch.
     */
    where: paymentLogWhereUniqueInput
  }


  /**
   * paymentLog findFirst
   */
  export type paymentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * Filter, which paymentLog to fetch.
     */
    where?: paymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentLogs to fetch.
     */
    orderBy?: paymentLogOrderByWithRelationInput | paymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentLogs.
     */
    cursor?: paymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentLogs.
     */
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }


  /**
   * paymentLog findFirstOrThrow
   */
  export type paymentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * Filter, which paymentLog to fetch.
     */
    where?: paymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentLogs to fetch.
     */
    orderBy?: paymentLogOrderByWithRelationInput | paymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentLogs.
     */
    cursor?: paymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentLogs.
     */
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }


  /**
   * paymentLog findMany
   */
  export type paymentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * Filter, which paymentLogs to fetch.
     */
    where?: paymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentLogs to fetch.
     */
    orderBy?: paymentLogOrderByWithRelationInput | paymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paymentLogs.
     */
    cursor?: paymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentLogs.
     */
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }


  /**
   * paymentLog create
   */
  export type paymentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a paymentLog.
     */
    data: XOR<paymentLogCreateInput, paymentLogUncheckedCreateInput>
  }


  /**
   * paymentLog createMany
   */
  export type paymentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentLogs.
     */
    data: paymentLogCreateManyInput | paymentLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * paymentLog update
   */
  export type paymentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a paymentLog.
     */
    data: XOR<paymentLogUpdateInput, paymentLogUncheckedUpdateInput>
    /**
     * Choose, which paymentLog to update.
     */
    where: paymentLogWhereUniqueInput
  }


  /**
   * paymentLog updateMany
   */
  export type paymentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentLogs.
     */
    data: XOR<paymentLogUpdateManyMutationInput, paymentLogUncheckedUpdateManyInput>
    /**
     * Filter which paymentLogs to update
     */
    where?: paymentLogWhereInput
  }


  /**
   * paymentLog upsert
   */
  export type paymentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the paymentLog to update in case it exists.
     */
    where: paymentLogWhereUniqueInput
    /**
     * In case the paymentLog found by the `where` argument doesn't exist, create a new paymentLog with this data.
     */
    create: XOR<paymentLogCreateInput, paymentLogUncheckedCreateInput>
    /**
     * In case the paymentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentLogUpdateInput, paymentLogUncheckedUpdateInput>
  }


  /**
   * paymentLog delete
   */
  export type paymentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    /**
     * Filter which paymentLog to delete.
     */
    where: paymentLogWhereUniqueInput
  }


  /**
   * paymentLog deleteMany
   */
  export type paymentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentLogs to delete
     */
    where?: paymentLogWhereInput
  }


  /**
   * paymentLog without action
   */
  export type paymentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
  }



  /**
   * Model sharedBot
   */

  export type AggregateSharedBot = {
    _count: SharedBotCountAggregateOutputType | null
    _avg: SharedBotAvgAggregateOutputType | null
    _sum: SharedBotSumAggregateOutputType | null
    _min: SharedBotMinAggregateOutputType | null
    _max: SharedBotMaxAggregateOutputType | null
  }

  export type SharedBotAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type SharedBotSumAggregateOutputType = {
    id: number | null
    packageId: number | null
  }

  export type SharedBotMinAggregateOutputType = {
    id: number | null
    loginFirstName: string | null
    loginLastName: string | null
    loginPassword: string | null
    loginSpawnLocation: string | null
    running: boolean | null
    loginRegion: string | null
    packageId: number | null
    uuid: string | null
    imageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedBotMaxAggregateOutputType = {
    id: number | null
    loginFirstName: string | null
    loginLastName: string | null
    loginPassword: string | null
    loginSpawnLocation: string | null
    running: boolean | null
    loginRegion: string | null
    packageId: number | null
    uuid: string | null
    imageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedBotCountAggregateOutputType = {
    id: number
    loginFirstName: number
    loginLastName: number
    loginPassword: number
    loginSpawnLocation: number
    running: number
    loginRegion: number
    packageId: number
    uuid: number
    imageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharedBotAvgAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type SharedBotSumAggregateInputType = {
    id?: true
    packageId?: true
  }

  export type SharedBotMinAggregateInputType = {
    id?: true
    loginFirstName?: true
    loginLastName?: true
    loginPassword?: true
    loginSpawnLocation?: true
    running?: true
    loginRegion?: true
    packageId?: true
    uuid?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedBotMaxAggregateInputType = {
    id?: true
    loginFirstName?: true
    loginLastName?: true
    loginPassword?: true
    loginSpawnLocation?: true
    running?: true
    loginRegion?: true
    packageId?: true
    uuid?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedBotCountAggregateInputType = {
    id?: true
    loginFirstName?: true
    loginLastName?: true
    loginPassword?: true
    loginSpawnLocation?: true
    running?: true
    loginRegion?: true
    packageId?: true
    uuid?: true
    imageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharedBotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sharedBot to aggregate.
     */
    where?: sharedBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBots to fetch.
     */
    orderBy?: sharedBotOrderByWithRelationInput | sharedBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sharedBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sharedBots
    **/
    _count?: true | SharedBotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedBotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedBotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedBotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedBotMaxAggregateInputType
  }

  export type GetSharedBotAggregateType<T extends SharedBotAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedBot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedBot[P]>
      : GetScalarType<T[P], AggregateSharedBot[P]>
  }




  export type sharedBotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sharedBotWhereInput
    orderBy?: sharedBotOrderByWithAggregationInput | sharedBotOrderByWithAggregationInput[]
    by: SharedBotScalarFieldEnum[] | SharedBotScalarFieldEnum
    having?: sharedBotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedBotCountAggregateInputType | true
    _avg?: SharedBotAvgAggregateInputType
    _sum?: SharedBotSumAggregateInputType
    _min?: SharedBotMinAggregateInputType
    _max?: SharedBotMaxAggregateInputType
  }

  export type SharedBotGroupByOutputType = {
    id: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    loginRegion: string | null
    packageId: number | null
    uuid: string
    imageId: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: SharedBotCountAggregateOutputType | null
    _avg: SharedBotAvgAggregateOutputType | null
    _sum: SharedBotSumAggregateOutputType | null
    _min: SharedBotMinAggregateOutputType | null
    _max: SharedBotMaxAggregateOutputType | null
  }

  type GetSharedBotGroupByPayload<T extends sharedBotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedBotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedBotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedBotGroupByOutputType[P]>
            : GetScalarType<T[P], SharedBotGroupByOutputType[P]>
        }
      >
    >


  export type sharedBotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loginFirstName?: boolean
    loginLastName?: boolean
    loginPassword?: boolean
    loginSpawnLocation?: boolean
    running?: boolean
    loginRegion?: boolean
    packageId?: boolean
    uuid?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sharedBotUserSubscription?: boolean | sharedBot$sharedBotUserSubscriptionArgs<ExtArgs>
    _count?: boolean | SharedBotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedBot"]>

  export type sharedBotSelectScalar = {
    id?: boolean
    loginFirstName?: boolean
    loginLastName?: boolean
    loginPassword?: boolean
    loginSpawnLocation?: boolean
    running?: boolean
    loginRegion?: boolean
    packageId?: boolean
    uuid?: boolean
    imageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sharedBotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBotUserSubscription?: boolean | sharedBot$sharedBotUserSubscriptionArgs<ExtArgs>
    _count?: boolean | SharedBotCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $sharedBotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sharedBot"
    objects: {
      sharedBotUserSubscription: Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loginFirstName: string
      loginLastName: string
      loginPassword: string
      loginSpawnLocation: string
      running: boolean
      loginRegion: string | null
      packageId: number | null
      uuid: string
      imageId: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["sharedBot"]>
    composites: {}
  }


  type sharedBotGetPayload<S extends boolean | null | undefined | sharedBotDefaultArgs> = $Result.GetResult<Prisma.$sharedBotPayload, S>

  type sharedBotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sharedBotFindManyArgs, 'select' | 'include'> & {
      select?: SharedBotCountAggregateInputType | true
    }

  export interface sharedBotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sharedBot'], meta: { name: 'sharedBot' } }
    /**
     * Find zero or one SharedBot that matches the filter.
     * @param {sharedBotFindUniqueArgs} args - Arguments to find a SharedBot
     * @example
     * // Get one SharedBot
     * const sharedBot = await prisma.sharedBot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sharedBotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotFindUniqueArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SharedBot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sharedBotFindUniqueOrThrowArgs} args - Arguments to find a SharedBot
     * @example
     * // Get one SharedBot
     * const sharedBot = await prisma.sharedBot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sharedBotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SharedBot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotFindFirstArgs} args - Arguments to find a SharedBot
     * @example
     * // Get one SharedBot
     * const sharedBot = await prisma.sharedBot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sharedBotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotFindFirstArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SharedBot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotFindFirstOrThrowArgs} args - Arguments to find a SharedBot
     * @example
     * // Get one SharedBot
     * const sharedBot = await prisma.sharedBot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sharedBotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SharedBots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedBots
     * const sharedBots = await prisma.sharedBot.findMany()
     * 
     * // Get first 10 SharedBots
     * const sharedBots = await prisma.sharedBot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedBotWithIdOnly = await prisma.sharedBot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sharedBotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SharedBot.
     * @param {sharedBotCreateArgs} args - Arguments to create a SharedBot.
     * @example
     * // Create one SharedBot
     * const SharedBot = await prisma.sharedBot.create({
     *   data: {
     *     // ... data to create a SharedBot
     *   }
     * })
     * 
    **/
    create<T extends sharedBotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotCreateArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SharedBots.
     *     @param {sharedBotCreateManyArgs} args - Arguments to create many SharedBots.
     *     @example
     *     // Create many SharedBots
     *     const sharedBot = await prisma.sharedBot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sharedBotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SharedBot.
     * @param {sharedBotDeleteArgs} args - Arguments to delete one SharedBot.
     * @example
     * // Delete one SharedBot
     * const SharedBot = await prisma.sharedBot.delete({
     *   where: {
     *     // ... filter to delete one SharedBot
     *   }
     * })
     * 
    **/
    delete<T extends sharedBotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotDeleteArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SharedBot.
     * @param {sharedBotUpdateArgs} args - Arguments to update one SharedBot.
     * @example
     * // Update one SharedBot
     * const sharedBot = await prisma.sharedBot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sharedBotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUpdateArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SharedBots.
     * @param {sharedBotDeleteManyArgs} args - Arguments to filter SharedBots to delete.
     * @example
     * // Delete a few SharedBots
     * const { count } = await prisma.sharedBot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sharedBotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedBots
     * const sharedBot = await prisma.sharedBot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sharedBotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedBot.
     * @param {sharedBotUpsertArgs} args - Arguments to update or create a SharedBot.
     * @example
     * // Update or create a SharedBot
     * const sharedBot = await prisma.sharedBot.upsert({
     *   create: {
     *     // ... data to create a SharedBot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedBot we want to update
     *   }
     * })
    **/
    upsert<T extends sharedBotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUpsertArgs<ExtArgs>>
    ): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SharedBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotCountArgs} args - Arguments to filter SharedBots to count.
     * @example
     * // Count the number of SharedBots
     * const count = await prisma.sharedBot.count({
     *   where: {
     *     // ... the filter for the SharedBots we want to count
     *   }
     * })
    **/
    count<T extends sharedBotCountArgs>(
      args?: Subset<T, sharedBotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedBotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedBotAggregateArgs>(args: Subset<T, SharedBotAggregateArgs>): Prisma.PrismaPromise<GetSharedBotAggregateType<T>>

    /**
     * Group by SharedBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sharedBotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sharedBotGroupByArgs['orderBy'] }
        : { orderBy?: sharedBotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sharedBotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sharedBot model
   */
  readonly fields: sharedBotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sharedBot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sharedBotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sharedBotUserSubscription<T extends sharedBot$sharedBotUserSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, sharedBot$sharedBotUserSubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the sharedBot model
   */ 
  interface sharedBotFieldRefs {
    readonly id: FieldRef<"sharedBot", 'Int'>
    readonly loginFirstName: FieldRef<"sharedBot", 'String'>
    readonly loginLastName: FieldRef<"sharedBot", 'String'>
    readonly loginPassword: FieldRef<"sharedBot", 'String'>
    readonly loginSpawnLocation: FieldRef<"sharedBot", 'String'>
    readonly running: FieldRef<"sharedBot", 'Boolean'>
    readonly loginRegion: FieldRef<"sharedBot", 'String'>
    readonly packageId: FieldRef<"sharedBot", 'Int'>
    readonly uuid: FieldRef<"sharedBot", 'String'>
    readonly imageId: FieldRef<"sharedBot", 'String'>
    readonly createdAt: FieldRef<"sharedBot", 'DateTime'>
    readonly updatedAt: FieldRef<"sharedBot", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * sharedBot findUnique
   */
  export type sharedBotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * Filter, which sharedBot to fetch.
     */
    where: sharedBotWhereUniqueInput
  }


  /**
   * sharedBot findUniqueOrThrow
   */
  export type sharedBotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * Filter, which sharedBot to fetch.
     */
    where: sharedBotWhereUniqueInput
  }


  /**
   * sharedBot findFirst
   */
  export type sharedBotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * Filter, which sharedBot to fetch.
     */
    where?: sharedBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBots to fetch.
     */
    orderBy?: sharedBotOrderByWithRelationInput | sharedBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sharedBots.
     */
    cursor?: sharedBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sharedBots.
     */
    distinct?: SharedBotScalarFieldEnum | SharedBotScalarFieldEnum[]
  }


  /**
   * sharedBot findFirstOrThrow
   */
  export type sharedBotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * Filter, which sharedBot to fetch.
     */
    where?: sharedBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBots to fetch.
     */
    orderBy?: sharedBotOrderByWithRelationInput | sharedBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sharedBots.
     */
    cursor?: sharedBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sharedBots.
     */
    distinct?: SharedBotScalarFieldEnum | SharedBotScalarFieldEnum[]
  }


  /**
   * sharedBot findMany
   */
  export type sharedBotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * Filter, which sharedBots to fetch.
     */
    where?: sharedBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBots to fetch.
     */
    orderBy?: sharedBotOrderByWithRelationInput | sharedBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sharedBots.
     */
    cursor?: sharedBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBots.
     */
    skip?: number
    distinct?: SharedBotScalarFieldEnum | SharedBotScalarFieldEnum[]
  }


  /**
   * sharedBot create
   */
  export type sharedBotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * The data needed to create a sharedBot.
     */
    data: XOR<sharedBotCreateInput, sharedBotUncheckedCreateInput>
  }


  /**
   * sharedBot createMany
   */
  export type sharedBotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sharedBots.
     */
    data: sharedBotCreateManyInput | sharedBotCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * sharedBot update
   */
  export type sharedBotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * The data needed to update a sharedBot.
     */
    data: XOR<sharedBotUpdateInput, sharedBotUncheckedUpdateInput>
    /**
     * Choose, which sharedBot to update.
     */
    where: sharedBotWhereUniqueInput
  }


  /**
   * sharedBot updateMany
   */
  export type sharedBotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sharedBots.
     */
    data: XOR<sharedBotUpdateManyMutationInput, sharedBotUncheckedUpdateManyInput>
    /**
     * Filter which sharedBots to update
     */
    where?: sharedBotWhereInput
  }


  /**
   * sharedBot upsert
   */
  export type sharedBotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * The filter to search for the sharedBot to update in case it exists.
     */
    where: sharedBotWhereUniqueInput
    /**
     * In case the sharedBot found by the `where` argument doesn't exist, create a new sharedBot with this data.
     */
    create: XOR<sharedBotCreateInput, sharedBotUncheckedCreateInput>
    /**
     * In case the sharedBot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sharedBotUpdateInput, sharedBotUncheckedUpdateInput>
  }


  /**
   * sharedBot delete
   */
  export type sharedBotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
    /**
     * Filter which sharedBot to delete.
     */
    where: sharedBotWhereUniqueInput
  }


  /**
   * sharedBot deleteMany
   */
  export type sharedBotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sharedBots to delete
     */
    where?: sharedBotWhereInput
  }


  /**
   * sharedBot.sharedBotUserSubscription
   */
  export type sharedBot$sharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    where?: sharedBotUserSubscriptionWhereInput
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedBotUserSubscriptionScalarFieldEnum | SharedBotUserSubscriptionScalarFieldEnum[]
  }


  /**
   * sharedBot without action
   */
  export type sharedBotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBot
     */
    select?: sharedBotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotInclude<ExtArgs> | null
  }



  /**
   * Model sharedBotUserSubscription
   */

  export type AggregateSharedBotUserSubscription = {
    _count: SharedBotUserSubscriptionCountAggregateOutputType | null
    _avg: SharedBotUserSubscriptionAvgAggregateOutputType | null
    _sum: SharedBotUserSubscriptionSumAggregateOutputType | null
    _min: SharedBotUserSubscriptionMinAggregateOutputType | null
    _max: SharedBotUserSubscriptionMaxAggregateOutputType | null
  }

  export type SharedBotUserSubscriptionAvgAggregateOutputType = {
    id: number | null
    sharedBotId: number | null
    userId: number | null
    packageId: number | null
  }

  export type SharedBotUserSubscriptionSumAggregateOutputType = {
    id: number | null
    sharedBotId: number | null
    userId: number | null
    packageId: number | null
  }

  export type SharedBotUserSubscriptionMinAggregateOutputType = {
    id: number | null
    sharedBotId: number | null
    userId: number | null
    subscriptionStart: Date | null
    subscriptionEnd: Date | null
    packageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedBotUserSubscriptionMaxAggregateOutputType = {
    id: number | null
    sharedBotId: number | null
    userId: number | null
    subscriptionStart: Date | null
    subscriptionEnd: Date | null
    packageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedBotUserSubscriptionCountAggregateOutputType = {
    id: number
    sharedBotId: number
    userId: number
    subscriptionStart: number
    subscriptionEnd: number
    packageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharedBotUserSubscriptionAvgAggregateInputType = {
    id?: true
    sharedBotId?: true
    userId?: true
    packageId?: true
  }

  export type SharedBotUserSubscriptionSumAggregateInputType = {
    id?: true
    sharedBotId?: true
    userId?: true
    packageId?: true
  }

  export type SharedBotUserSubscriptionMinAggregateInputType = {
    id?: true
    sharedBotId?: true
    userId?: true
    subscriptionStart?: true
    subscriptionEnd?: true
    packageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedBotUserSubscriptionMaxAggregateInputType = {
    id?: true
    sharedBotId?: true
    userId?: true
    subscriptionStart?: true
    subscriptionEnd?: true
    packageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedBotUserSubscriptionCountAggregateInputType = {
    id?: true
    sharedBotId?: true
    userId?: true
    subscriptionStart?: true
    subscriptionEnd?: true
    packageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharedBotUserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sharedBotUserSubscription to aggregate.
     */
    where?: sharedBotUserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBotUserSubscriptions to fetch.
     */
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBotUserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBotUserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sharedBotUserSubscriptions
    **/
    _count?: true | SharedBotUserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedBotUserSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedBotUserSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedBotUserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedBotUserSubscriptionMaxAggregateInputType
  }

  export type GetSharedBotUserSubscriptionAggregateType<T extends SharedBotUserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedBotUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedBotUserSubscription[P]>
      : GetScalarType<T[P], AggregateSharedBotUserSubscription[P]>
  }




  export type sharedBotUserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sharedBotUserSubscriptionWhereInput
    orderBy?: sharedBotUserSubscriptionOrderByWithAggregationInput | sharedBotUserSubscriptionOrderByWithAggregationInput[]
    by: SharedBotUserSubscriptionScalarFieldEnum[] | SharedBotUserSubscriptionScalarFieldEnum
    having?: sharedBotUserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedBotUserSubscriptionCountAggregateInputType | true
    _avg?: SharedBotUserSubscriptionAvgAggregateInputType
    _sum?: SharedBotUserSubscriptionSumAggregateInputType
    _min?: SharedBotUserSubscriptionMinAggregateInputType
    _max?: SharedBotUserSubscriptionMaxAggregateInputType
  }

  export type SharedBotUserSubscriptionGroupByOutputType = {
    id: number
    sharedBotId: number
    userId: number
    subscriptionStart: Date | null
    subscriptionEnd: Date | null
    packageId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: SharedBotUserSubscriptionCountAggregateOutputType | null
    _avg: SharedBotUserSubscriptionAvgAggregateOutputType | null
    _sum: SharedBotUserSubscriptionSumAggregateOutputType | null
    _min: SharedBotUserSubscriptionMinAggregateOutputType | null
    _max: SharedBotUserSubscriptionMaxAggregateOutputType | null
  }

  type GetSharedBotUserSubscriptionGroupByPayload<T extends sharedBotUserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedBotUserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedBotUserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedBotUserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SharedBotUserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type sharedBotUserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedBotId?: boolean
    userId?: boolean
    subscriptionStart?: boolean
    subscriptionEnd?: boolean
    packageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sharedBot?: boolean | sharedBotDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    subPackage?: boolean | subPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedBotUserSubscription"]>

  export type sharedBotUserSubscriptionSelectScalar = {
    id?: boolean
    sharedBotId?: boolean
    userId?: boolean
    subscriptionStart?: boolean
    subscriptionEnd?: boolean
    packageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sharedBotUserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedBot?: boolean | sharedBotDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    subPackage?: boolean | subPackageDefaultArgs<ExtArgs>
  }


  export type $sharedBotUserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sharedBotUserSubscription"
    objects: {
      sharedBot: Prisma.$sharedBotPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      subPackage: Prisma.$subPackagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sharedBotId: number
      userId: number
      subscriptionStart: Date | null
      subscriptionEnd: Date | null
      packageId: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["sharedBotUserSubscription"]>
    composites: {}
  }


  type sharedBotUserSubscriptionGetPayload<S extends boolean | null | undefined | sharedBotUserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload, S>

  type sharedBotUserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sharedBotUserSubscriptionFindManyArgs, 'select' | 'include'> & {
      select?: SharedBotUserSubscriptionCountAggregateInputType | true
    }

  export interface sharedBotUserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sharedBotUserSubscription'], meta: { name: 'sharedBotUserSubscription' } }
    /**
     * Find zero or one SharedBotUserSubscription that matches the filter.
     * @param {sharedBotUserSubscriptionFindUniqueArgs} args - Arguments to find a SharedBotUserSubscription
     * @example
     * // Get one SharedBotUserSubscription
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sharedBotUserSubscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUserSubscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SharedBotUserSubscription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sharedBotUserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a SharedBotUserSubscription
     * @example
     * // Get one SharedBotUserSubscription
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sharedBotUserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotUserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SharedBotUserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUserSubscriptionFindFirstArgs} args - Arguments to find a SharedBotUserSubscription
     * @example
     * // Get one SharedBotUserSubscription
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sharedBotUserSubscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotUserSubscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SharedBotUserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a SharedBotUserSubscription
     * @example
     * // Get one SharedBotUserSubscription
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sharedBotUserSubscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotUserSubscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SharedBotUserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUserSubscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedBotUserSubscriptions
     * const sharedBotUserSubscriptions = await prisma.sharedBotUserSubscription.findMany()
     * 
     * // Get first 10 SharedBotUserSubscriptions
     * const sharedBotUserSubscriptions = await prisma.sharedBotUserSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedBotUserSubscriptionWithIdOnly = await prisma.sharedBotUserSubscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sharedBotUserSubscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotUserSubscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SharedBotUserSubscription.
     * @param {sharedBotUserSubscriptionCreateArgs} args - Arguments to create a SharedBotUserSubscription.
     * @example
     * // Create one SharedBotUserSubscription
     * const SharedBotUserSubscription = await prisma.sharedBotUserSubscription.create({
     *   data: {
     *     // ... data to create a SharedBotUserSubscription
     *   }
     * })
     * 
    **/
    create<T extends sharedBotUserSubscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUserSubscriptionCreateArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SharedBotUserSubscriptions.
     *     @param {sharedBotUserSubscriptionCreateManyArgs} args - Arguments to create many SharedBotUserSubscriptions.
     *     @example
     *     // Create many SharedBotUserSubscriptions
     *     const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sharedBotUserSubscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotUserSubscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SharedBotUserSubscription.
     * @param {sharedBotUserSubscriptionDeleteArgs} args - Arguments to delete one SharedBotUserSubscription.
     * @example
     * // Delete one SharedBotUserSubscription
     * const SharedBotUserSubscription = await prisma.sharedBotUserSubscription.delete({
     *   where: {
     *     // ... filter to delete one SharedBotUserSubscription
     *   }
     * })
     * 
    **/
    delete<T extends sharedBotUserSubscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUserSubscriptionDeleteArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SharedBotUserSubscription.
     * @param {sharedBotUserSubscriptionUpdateArgs} args - Arguments to update one SharedBotUserSubscription.
     * @example
     * // Update one SharedBotUserSubscription
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sharedBotUserSubscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUserSubscriptionUpdateArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SharedBotUserSubscriptions.
     * @param {sharedBotUserSubscriptionDeleteManyArgs} args - Arguments to filter SharedBotUserSubscriptions to delete.
     * @example
     * // Delete a few SharedBotUserSubscriptions
     * const { count } = await prisma.sharedBotUserSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sharedBotUserSubscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sharedBotUserSubscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedBotUserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedBotUserSubscriptions
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sharedBotUserSubscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUserSubscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedBotUserSubscription.
     * @param {sharedBotUserSubscriptionUpsertArgs} args - Arguments to update or create a SharedBotUserSubscription.
     * @example
     * // Update or create a SharedBotUserSubscription
     * const sharedBotUserSubscription = await prisma.sharedBotUserSubscription.upsert({
     *   create: {
     *     // ... data to create a SharedBotUserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedBotUserSubscription we want to update
     *   }
     * })
    **/
    upsert<T extends sharedBotUserSubscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sharedBotUserSubscriptionUpsertArgs<ExtArgs>>
    ): Prisma__sharedBotUserSubscriptionClient<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SharedBotUserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUserSubscriptionCountArgs} args - Arguments to filter SharedBotUserSubscriptions to count.
     * @example
     * // Count the number of SharedBotUserSubscriptions
     * const count = await prisma.sharedBotUserSubscription.count({
     *   where: {
     *     // ... the filter for the SharedBotUserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends sharedBotUserSubscriptionCountArgs>(
      args?: Subset<T, sharedBotUserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedBotUserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedBotUserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedBotUserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedBotUserSubscriptionAggregateArgs>(args: Subset<T, SharedBotUserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSharedBotUserSubscriptionAggregateType<T>>

    /**
     * Group by SharedBotUserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sharedBotUserSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sharedBotUserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sharedBotUserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: sharedBotUserSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sharedBotUserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedBotUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sharedBotUserSubscription model
   */
  readonly fields: sharedBotUserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sharedBotUserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sharedBotUserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sharedBot<T extends sharedBotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sharedBotDefaultArgs<ExtArgs>>): Prisma__sharedBotClient<$Result.GetResult<Prisma.$sharedBotPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subPackage<T extends subPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subPackageDefaultArgs<ExtArgs>>): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the sharedBotUserSubscription model
   */ 
  interface sharedBotUserSubscriptionFieldRefs {
    readonly id: FieldRef<"sharedBotUserSubscription", 'Int'>
    readonly sharedBotId: FieldRef<"sharedBotUserSubscription", 'Int'>
    readonly userId: FieldRef<"sharedBotUserSubscription", 'Int'>
    readonly subscriptionStart: FieldRef<"sharedBotUserSubscription", 'DateTime'>
    readonly subscriptionEnd: FieldRef<"sharedBotUserSubscription", 'DateTime'>
    readonly packageId: FieldRef<"sharedBotUserSubscription", 'Int'>
    readonly createdAt: FieldRef<"sharedBotUserSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"sharedBotUserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * sharedBotUserSubscription findUnique
   */
  export type sharedBotUserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which sharedBotUserSubscription to fetch.
     */
    where: sharedBotUserSubscriptionWhereUniqueInput
  }


  /**
   * sharedBotUserSubscription findUniqueOrThrow
   */
  export type sharedBotUserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which sharedBotUserSubscription to fetch.
     */
    where: sharedBotUserSubscriptionWhereUniqueInput
  }


  /**
   * sharedBotUserSubscription findFirst
   */
  export type sharedBotUserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which sharedBotUserSubscription to fetch.
     */
    where?: sharedBotUserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBotUserSubscriptions to fetch.
     */
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sharedBotUserSubscriptions.
     */
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBotUserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBotUserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sharedBotUserSubscriptions.
     */
    distinct?: SharedBotUserSubscriptionScalarFieldEnum | SharedBotUserSubscriptionScalarFieldEnum[]
  }


  /**
   * sharedBotUserSubscription findFirstOrThrow
   */
  export type sharedBotUserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which sharedBotUserSubscription to fetch.
     */
    where?: sharedBotUserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBotUserSubscriptions to fetch.
     */
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sharedBotUserSubscriptions.
     */
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBotUserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBotUserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sharedBotUserSubscriptions.
     */
    distinct?: SharedBotUserSubscriptionScalarFieldEnum | SharedBotUserSubscriptionScalarFieldEnum[]
  }


  /**
   * sharedBotUserSubscription findMany
   */
  export type sharedBotUserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which sharedBotUserSubscriptions to fetch.
     */
    where?: sharedBotUserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sharedBotUserSubscriptions to fetch.
     */
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sharedBotUserSubscriptions.
     */
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sharedBotUserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sharedBotUserSubscriptions.
     */
    skip?: number
    distinct?: SharedBotUserSubscriptionScalarFieldEnum | SharedBotUserSubscriptionScalarFieldEnum[]
  }


  /**
   * sharedBotUserSubscription create
   */
  export type sharedBotUserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a sharedBotUserSubscription.
     */
    data: XOR<sharedBotUserSubscriptionCreateInput, sharedBotUserSubscriptionUncheckedCreateInput>
  }


  /**
   * sharedBotUserSubscription createMany
   */
  export type sharedBotUserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sharedBotUserSubscriptions.
     */
    data: sharedBotUserSubscriptionCreateManyInput | sharedBotUserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * sharedBotUserSubscription update
   */
  export type sharedBotUserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a sharedBotUserSubscription.
     */
    data: XOR<sharedBotUserSubscriptionUpdateInput, sharedBotUserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which sharedBotUserSubscription to update.
     */
    where: sharedBotUserSubscriptionWhereUniqueInput
  }


  /**
   * sharedBotUserSubscription updateMany
   */
  export type sharedBotUserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sharedBotUserSubscriptions.
     */
    data: XOR<sharedBotUserSubscriptionUpdateManyMutationInput, sharedBotUserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which sharedBotUserSubscriptions to update
     */
    where?: sharedBotUserSubscriptionWhereInput
  }


  /**
   * sharedBotUserSubscription upsert
   */
  export type sharedBotUserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the sharedBotUserSubscription to update in case it exists.
     */
    where: sharedBotUserSubscriptionWhereUniqueInput
    /**
     * In case the sharedBotUserSubscription found by the `where` argument doesn't exist, create a new sharedBotUserSubscription with this data.
     */
    create: XOR<sharedBotUserSubscriptionCreateInput, sharedBotUserSubscriptionUncheckedCreateInput>
    /**
     * In case the sharedBotUserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sharedBotUserSubscriptionUpdateInput, sharedBotUserSubscriptionUncheckedUpdateInput>
  }


  /**
   * sharedBotUserSubscription delete
   */
  export type sharedBotUserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which sharedBotUserSubscription to delete.
     */
    where: sharedBotUserSubscriptionWhereUniqueInput
  }


  /**
   * sharedBotUserSubscription deleteMany
   */
  export type sharedBotUserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sharedBotUserSubscriptions to delete
     */
    where?: sharedBotUserSubscriptionWhereInput
  }


  /**
   * sharedBotUserSubscription without action
   */
  export type sharedBotUserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
  }



  /**
   * Model subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    packageId: number | null
    botId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    packageId: number | null
    botId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    packageId: number | null
    subscriptionStart: Date | null
    subscriptionEnd: Date | null
    botId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    packageId: number | null
    subscriptionStart: Date | null
    subscriptionEnd: Date | null
    botId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    packageId: number
    subscriptionStart: number
    subscriptionEnd: number
    botId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    packageId?: true
    botId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    packageId?: true
    botId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    packageId?: true
    subscriptionStart?: true
    subscriptionEnd?: true
    botId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    packageId?: true
    subscriptionStart?: true
    subscriptionEnd?: true
    botId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    packageId?: true
    subscriptionStart?: true
    subscriptionEnd?: true
    botId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscription to aggregate.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type subscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionWhereInput
    orderBy?: subscriptionOrderByWithAggregationInput | subscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: subscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    packageId: number
    subscriptionStart: Date
    subscriptionEnd: Date
    botId: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends subscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type subscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    subscriptionStart?: boolean
    subscriptionEnd?: boolean
    botId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subPackage?: boolean | subPackageDefaultArgs<ExtArgs>
    bot?: boolean | botDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type subscriptionSelectScalar = {
    id?: boolean
    packageId?: boolean
    subscriptionStart?: boolean
    subscriptionEnd?: boolean
    botId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type subscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subPackage?: boolean | subPackageDefaultArgs<ExtArgs>
    bot?: boolean | botDefaultArgs<ExtArgs>
  }


  export type $subscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscription"
    objects: {
      subPackage: Prisma.$subPackagePayload<ExtArgs>
      bot: Prisma.$botPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      packageId: number
      subscriptionStart: Date
      subscriptionEnd: Date
      botId: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }


  type subscriptionGetPayload<S extends boolean | null | undefined | subscriptionDefaultArgs> = $Result.GetResult<Prisma.$subscriptionPayload, S>

  type subscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<subscriptionFindManyArgs, 'select' | 'include'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface subscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscription'], meta: { name: 'subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {subscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends subscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subscription.
     * @param {subscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
    **/
    create<T extends subscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionCreateArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subscriptions.
     *     @param {subscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     *     @example
     *     // Create many Subscriptions
     *     const subscription = await prisma.subscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {subscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
    **/
    delete<T extends subscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionDeleteArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {subscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpdateArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {subscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
    **/
    upsert<T extends subscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subscriptionUpsertArgs<ExtArgs>>
    ): Prisma__subscriptionClient<$Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends subscriptionCountArgs>(
      args?: Subset<T, subscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscription model
   */
  readonly fields: subscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subPackage<T extends subPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subPackageDefaultArgs<ExtArgs>>): Prisma__subPackageClient<$Result.GetResult<Prisma.$subPackagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bot<T extends botDefaultArgs<ExtArgs> = {}>(args?: Subset<T, botDefaultArgs<ExtArgs>>): Prisma__botClient<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the subscription model
   */ 
  interface subscriptionFieldRefs {
    readonly id: FieldRef<"subscription", 'Int'>
    readonly packageId: FieldRef<"subscription", 'Int'>
    readonly subscriptionStart: FieldRef<"subscription", 'DateTime'>
    readonly subscriptionEnd: FieldRef<"subscription", 'DateTime'>
    readonly botId: FieldRef<"subscription", 'Int'>
    readonly createdAt: FieldRef<"subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"subscription", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * subscription findUnique
   */
  export type subscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput
  }


  /**
   * subscription findUniqueOrThrow
   */
  export type subscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where: subscriptionWhereUniqueInput
  }


  /**
   * subscription findFirst
   */
  export type subscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * subscription findFirstOrThrow
   */
  export type subscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscription to fetch.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * subscription findMany
   */
  export type subscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionOrderByWithRelationInput | subscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }


  /**
   * subscription create
   */
  export type subscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a subscription.
     */
    data: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>
  }


  /**
   * subscription createMany
   */
  export type subscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionCreateManyInput | subscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subscription update
   */
  export type subscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a subscription.
     */
    data: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>
    /**
     * Choose, which subscription to update.
     */
    where: subscriptionWhereUniqueInput
  }


  /**
   * subscription updateMany
   */
  export type subscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionWhereInput
  }


  /**
   * subscription upsert
   */
  export type subscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the subscription to update in case it exists.
     */
    where: subscriptionWhereUniqueInput
    /**
     * In case the subscription found by the `where` argument doesn't exist, create a new subscription with this data.
     */
    create: XOR<subscriptionCreateInput, subscriptionUncheckedCreateInput>
    /**
     * In case the subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionUpdateInput, subscriptionUncheckedUpdateInput>
  }


  /**
   * subscription delete
   */
  export type subscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
    /**
     * Filter which subscription to delete.
     */
    where: subscriptionWhereUniqueInput
  }


  /**
   * subscription deleteMany
   */
  export type subscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionWhereInput
  }


  /**
   * subscription without action
   */
  export type subscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscription
     */
    select?: subscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: subscriptionInclude<ExtArgs> | null
  }



  /**
   * Model terminal
   */

  export type AggregateTerminal = {
    _count: TerminalCountAggregateOutputType | null
    _avg: TerminalAvgAggregateOutputType | null
    _sum: TerminalSumAggregateOutputType | null
    _min: TerminalMinAggregateOutputType | null
    _max: TerminalMaxAggregateOutputType | null
  }

  export type TerminalAvgAggregateOutputType = {
    id: number | null
  }

  export type TerminalSumAggregateOutputType = {
    id: number | null
  }

  export type TerminalMinAggregateOutputType = {
    id: number | null
    name: string | null
    apiKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TerminalMaxAggregateOutputType = {
    id: number | null
    name: string | null
    apiKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TerminalCountAggregateOutputType = {
    id: number
    name: number
    apiKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TerminalAvgAggregateInputType = {
    id?: true
  }

  export type TerminalSumAggregateInputType = {
    id?: true
  }

  export type TerminalMinAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TerminalMaxAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TerminalCountAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TerminalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which terminal to aggregate.
     */
    where?: terminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminals to fetch.
     */
    orderBy?: terminalOrderByWithRelationInput | terminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: terminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned terminals
    **/
    _count?: true | TerminalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerminalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerminalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerminalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerminalMaxAggregateInputType
  }

  export type GetTerminalAggregateType<T extends TerminalAggregateArgs> = {
        [P in keyof T & keyof AggregateTerminal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerminal[P]>
      : GetScalarType<T[P], AggregateTerminal[P]>
  }




  export type terminalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: terminalWhereInput
    orderBy?: terminalOrderByWithAggregationInput | terminalOrderByWithAggregationInput[]
    by: TerminalScalarFieldEnum[] | TerminalScalarFieldEnum
    having?: terminalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerminalCountAggregateInputType | true
    _avg?: TerminalAvgAggregateInputType
    _sum?: TerminalSumAggregateInputType
    _min?: TerminalMinAggregateInputType
    _max?: TerminalMaxAggregateInputType
  }

  export type TerminalGroupByOutputType = {
    id: number
    name: string
    apiKey: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: TerminalCountAggregateOutputType | null
    _avg: TerminalAvgAggregateOutputType | null
    _sum: TerminalSumAggregateOutputType | null
    _min: TerminalMinAggregateOutputType | null
    _max: TerminalMaxAggregateOutputType | null
  }

  type GetTerminalGroupByPayload<T extends terminalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerminalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerminalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerminalGroupByOutputType[P]>
            : GetScalarType<T[P], TerminalGroupByOutputType[P]>
        }
      >
    >


  export type terminalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["terminal"]>

  export type terminalSelectScalar = {
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $terminalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "terminal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      apiKey: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["terminal"]>
    composites: {}
  }


  type terminalGetPayload<S extends boolean | null | undefined | terminalDefaultArgs> = $Result.GetResult<Prisma.$terminalPayload, S>

  type terminalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<terminalFindManyArgs, 'select' | 'include'> & {
      select?: TerminalCountAggregateInputType | true
    }

  export interface terminalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['terminal'], meta: { name: 'terminal' } }
    /**
     * Find zero or one Terminal that matches the filter.
     * @param {terminalFindUniqueArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends terminalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, terminalFindUniqueArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Terminal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {terminalFindUniqueOrThrowArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends terminalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Terminal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalFindFirstArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends terminalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalFindFirstArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Terminal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalFindFirstOrThrowArgs} args - Arguments to find a Terminal
     * @example
     * // Get one Terminal
     * const terminal = await prisma.terminal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends terminalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Terminals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terminals
     * const terminals = await prisma.terminal.findMany()
     * 
     * // Get first 10 Terminals
     * const terminals = await prisma.terminal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terminalWithIdOnly = await prisma.terminal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends terminalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Terminal.
     * @param {terminalCreateArgs} args - Arguments to create a Terminal.
     * @example
     * // Create one Terminal
     * const Terminal = await prisma.terminal.create({
     *   data: {
     *     // ... data to create a Terminal
     *   }
     * })
     * 
    **/
    create<T extends terminalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, terminalCreateArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Terminals.
     *     @param {terminalCreateManyArgs} args - Arguments to create many Terminals.
     *     @example
     *     // Create many Terminals
     *     const terminal = await prisma.terminal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends terminalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Terminal.
     * @param {terminalDeleteArgs} args - Arguments to delete one Terminal.
     * @example
     * // Delete one Terminal
     * const Terminal = await prisma.terminal.delete({
     *   where: {
     *     // ... filter to delete one Terminal
     *   }
     * })
     * 
    **/
    delete<T extends terminalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, terminalDeleteArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Terminal.
     * @param {terminalUpdateArgs} args - Arguments to update one Terminal.
     * @example
     * // Update one Terminal
     * const terminal = await prisma.terminal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends terminalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, terminalUpdateArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Terminals.
     * @param {terminalDeleteManyArgs} args - Arguments to filter Terminals to delete.
     * @example
     * // Delete a few Terminals
     * const { count } = await prisma.terminal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends terminalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terminals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terminals
     * const terminal = await prisma.terminal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends terminalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, terminalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Terminal.
     * @param {terminalUpsertArgs} args - Arguments to update or create a Terminal.
     * @example
     * // Update or create a Terminal
     * const terminal = await prisma.terminal.upsert({
     *   create: {
     *     // ... data to create a Terminal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Terminal we want to update
     *   }
     * })
    **/
    upsert<T extends terminalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, terminalUpsertArgs<ExtArgs>>
    ): Prisma__terminalClient<$Result.GetResult<Prisma.$terminalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Terminals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalCountArgs} args - Arguments to filter Terminals to count.
     * @example
     * // Count the number of Terminals
     * const count = await prisma.terminal.count({
     *   where: {
     *     // ... the filter for the Terminals we want to count
     *   }
     * })
    **/
    count<T extends terminalCountArgs>(
      args?: Subset<T, terminalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerminalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Terminal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TerminalAggregateArgs>(args: Subset<T, TerminalAggregateArgs>): Prisma.PrismaPromise<GetTerminalAggregateType<T>>

    /**
     * Group by Terminal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends terminalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: terminalGroupByArgs['orderBy'] }
        : { orderBy?: terminalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, terminalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerminalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the terminal model
   */
  readonly fields: terminalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for terminal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__terminalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the terminal model
   */ 
  interface terminalFieldRefs {
    readonly id: FieldRef<"terminal", 'Int'>
    readonly name: FieldRef<"terminal", 'String'>
    readonly apiKey: FieldRef<"terminal", 'String'>
    readonly createdAt: FieldRef<"terminal", 'DateTime'>
    readonly updatedAt: FieldRef<"terminal", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * terminal findUnique
   */
  export type terminalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * Filter, which terminal to fetch.
     */
    where: terminalWhereUniqueInput
  }


  /**
   * terminal findUniqueOrThrow
   */
  export type terminalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * Filter, which terminal to fetch.
     */
    where: terminalWhereUniqueInput
  }


  /**
   * terminal findFirst
   */
  export type terminalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * Filter, which terminal to fetch.
     */
    where?: terminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminals to fetch.
     */
    orderBy?: terminalOrderByWithRelationInput | terminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for terminals.
     */
    cursor?: terminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of terminals.
     */
    distinct?: TerminalScalarFieldEnum | TerminalScalarFieldEnum[]
  }


  /**
   * terminal findFirstOrThrow
   */
  export type terminalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * Filter, which terminal to fetch.
     */
    where?: terminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminals to fetch.
     */
    orderBy?: terminalOrderByWithRelationInput | terminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for terminals.
     */
    cursor?: terminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of terminals.
     */
    distinct?: TerminalScalarFieldEnum | TerminalScalarFieldEnum[]
  }


  /**
   * terminal findMany
   */
  export type terminalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * Filter, which terminals to fetch.
     */
    where?: terminalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminals to fetch.
     */
    orderBy?: terminalOrderByWithRelationInput | terminalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing terminals.
     */
    cursor?: terminalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminals.
     */
    skip?: number
    distinct?: TerminalScalarFieldEnum | TerminalScalarFieldEnum[]
  }


  /**
   * terminal create
   */
  export type terminalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * The data needed to create a terminal.
     */
    data: XOR<terminalCreateInput, terminalUncheckedCreateInput>
  }


  /**
   * terminal createMany
   */
  export type terminalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many terminals.
     */
    data: terminalCreateManyInput | terminalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * terminal update
   */
  export type terminalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * The data needed to update a terminal.
     */
    data: XOR<terminalUpdateInput, terminalUncheckedUpdateInput>
    /**
     * Choose, which terminal to update.
     */
    where: terminalWhereUniqueInput
  }


  /**
   * terminal updateMany
   */
  export type terminalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update terminals.
     */
    data: XOR<terminalUpdateManyMutationInput, terminalUncheckedUpdateManyInput>
    /**
     * Filter which terminals to update
     */
    where?: terminalWhereInput
  }


  /**
   * terminal upsert
   */
  export type terminalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * The filter to search for the terminal to update in case it exists.
     */
    where: terminalWhereUniqueInput
    /**
     * In case the terminal found by the `where` argument doesn't exist, create a new terminal with this data.
     */
    create: XOR<terminalCreateInput, terminalUncheckedCreateInput>
    /**
     * In case the terminal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<terminalUpdateInput, terminalUncheckedUpdateInput>
  }


  /**
   * terminal delete
   */
  export type terminalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
    /**
     * Filter which terminal to delete.
     */
    where: terminalWhereUniqueInput
  }


  /**
   * terminal deleteMany
   */
  export type terminalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which terminals to delete
     */
    where?: terminalWhereInput
  }


  /**
   * terminal without action
   */
  export type terminalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminal
     */
    select?: terminalSelect<ExtArgs> | null
  }



  /**
   * Model terminalOwner
   */

  export type AggregateTerminalOwner = {
    _count: TerminalOwnerCountAggregateOutputType | null
    _avg: TerminalOwnerAvgAggregateOutputType | null
    _sum: TerminalOwnerSumAggregateOutputType | null
    _min: TerminalOwnerMinAggregateOutputType | null
    _max: TerminalOwnerMaxAggregateOutputType | null
  }

  export type TerminalOwnerAvgAggregateOutputType = {
    id: number | null
  }

  export type TerminalOwnerSumAggregateOutputType = {
    id: number | null
  }

  export type TerminalOwnerMinAggregateOutputType = {
    id: number | null
    avatarUuid: string | null
    avatarName: string | null
    parcelName: string | null
    slUrl: string | null
    lastActive: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TerminalOwnerMaxAggregateOutputType = {
    id: number | null
    avatarUuid: string | null
    avatarName: string | null
    parcelName: string | null
    slUrl: string | null
    lastActive: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TerminalOwnerCountAggregateOutputType = {
    id: number
    avatarUuid: number
    avatarName: number
    parcelName: number
    slUrl: number
    lastActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TerminalOwnerAvgAggregateInputType = {
    id?: true
  }

  export type TerminalOwnerSumAggregateInputType = {
    id?: true
  }

  export type TerminalOwnerMinAggregateInputType = {
    id?: true
    avatarUuid?: true
    avatarName?: true
    parcelName?: true
    slUrl?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TerminalOwnerMaxAggregateInputType = {
    id?: true
    avatarUuid?: true
    avatarName?: true
    parcelName?: true
    slUrl?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TerminalOwnerCountAggregateInputType = {
    id?: true
    avatarUuid?: true
    avatarName?: true
    parcelName?: true
    slUrl?: true
    lastActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TerminalOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which terminalOwner to aggregate.
     */
    where?: terminalOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminalOwners to fetch.
     */
    orderBy?: terminalOwnerOrderByWithRelationInput | terminalOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: terminalOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminalOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminalOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned terminalOwners
    **/
    _count?: true | TerminalOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerminalOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerminalOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerminalOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerminalOwnerMaxAggregateInputType
  }

  export type GetTerminalOwnerAggregateType<T extends TerminalOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateTerminalOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerminalOwner[P]>
      : GetScalarType<T[P], AggregateTerminalOwner[P]>
  }




  export type terminalOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: terminalOwnerWhereInput
    orderBy?: terminalOwnerOrderByWithAggregationInput | terminalOwnerOrderByWithAggregationInput[]
    by: TerminalOwnerScalarFieldEnum[] | TerminalOwnerScalarFieldEnum
    having?: terminalOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerminalOwnerCountAggregateInputType | true
    _avg?: TerminalOwnerAvgAggregateInputType
    _sum?: TerminalOwnerSumAggregateInputType
    _min?: TerminalOwnerMinAggregateInputType
    _max?: TerminalOwnerMaxAggregateInputType
  }

  export type TerminalOwnerGroupByOutputType = {
    id: number
    avatarUuid: string
    avatarName: string
    parcelName: string
    slUrl: string
    lastActive: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: TerminalOwnerCountAggregateOutputType | null
    _avg: TerminalOwnerAvgAggregateOutputType | null
    _sum: TerminalOwnerSumAggregateOutputType | null
    _min: TerminalOwnerMinAggregateOutputType | null
    _max: TerminalOwnerMaxAggregateOutputType | null
  }

  type GetTerminalOwnerGroupByPayload<T extends terminalOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerminalOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerminalOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerminalOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], TerminalOwnerGroupByOutputType[P]>
        }
      >
    >


  export type terminalOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatarUuid?: boolean
    avatarName?: boolean
    parcelName?: boolean
    slUrl?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["terminalOwner"]>

  export type terminalOwnerSelectScalar = {
    id?: boolean
    avatarUuid?: boolean
    avatarName?: boolean
    parcelName?: boolean
    slUrl?: boolean
    lastActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $terminalOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "terminalOwner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      avatarUuid: string
      avatarName: string
      parcelName: string
      slUrl: string
      lastActive: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["terminalOwner"]>
    composites: {}
  }


  type terminalOwnerGetPayload<S extends boolean | null | undefined | terminalOwnerDefaultArgs> = $Result.GetResult<Prisma.$terminalOwnerPayload, S>

  type terminalOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<terminalOwnerFindManyArgs, 'select' | 'include'> & {
      select?: TerminalOwnerCountAggregateInputType | true
    }

  export interface terminalOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['terminalOwner'], meta: { name: 'terminalOwner' } }
    /**
     * Find zero or one TerminalOwner that matches the filter.
     * @param {terminalOwnerFindUniqueArgs} args - Arguments to find a TerminalOwner
     * @example
     * // Get one TerminalOwner
     * const terminalOwner = await prisma.terminalOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends terminalOwnerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, terminalOwnerFindUniqueArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TerminalOwner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {terminalOwnerFindUniqueOrThrowArgs} args - Arguments to find a TerminalOwner
     * @example
     * // Get one TerminalOwner
     * const terminalOwner = await prisma.terminalOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends terminalOwnerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalOwnerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TerminalOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalOwnerFindFirstArgs} args - Arguments to find a TerminalOwner
     * @example
     * // Get one TerminalOwner
     * const terminalOwner = await prisma.terminalOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends terminalOwnerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalOwnerFindFirstArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TerminalOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalOwnerFindFirstOrThrowArgs} args - Arguments to find a TerminalOwner
     * @example
     * // Get one TerminalOwner
     * const terminalOwner = await prisma.terminalOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends terminalOwnerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalOwnerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TerminalOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalOwnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TerminalOwners
     * const terminalOwners = await prisma.terminalOwner.findMany()
     * 
     * // Get first 10 TerminalOwners
     * const terminalOwners = await prisma.terminalOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terminalOwnerWithIdOnly = await prisma.terminalOwner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends terminalOwnerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalOwnerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TerminalOwner.
     * @param {terminalOwnerCreateArgs} args - Arguments to create a TerminalOwner.
     * @example
     * // Create one TerminalOwner
     * const TerminalOwner = await prisma.terminalOwner.create({
     *   data: {
     *     // ... data to create a TerminalOwner
     *   }
     * })
     * 
    **/
    create<T extends terminalOwnerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, terminalOwnerCreateArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TerminalOwners.
     *     @param {terminalOwnerCreateManyArgs} args - Arguments to create many TerminalOwners.
     *     @example
     *     // Create many TerminalOwners
     *     const terminalOwner = await prisma.terminalOwner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends terminalOwnerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalOwnerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TerminalOwner.
     * @param {terminalOwnerDeleteArgs} args - Arguments to delete one TerminalOwner.
     * @example
     * // Delete one TerminalOwner
     * const TerminalOwner = await prisma.terminalOwner.delete({
     *   where: {
     *     // ... filter to delete one TerminalOwner
     *   }
     * })
     * 
    **/
    delete<T extends terminalOwnerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, terminalOwnerDeleteArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TerminalOwner.
     * @param {terminalOwnerUpdateArgs} args - Arguments to update one TerminalOwner.
     * @example
     * // Update one TerminalOwner
     * const terminalOwner = await prisma.terminalOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends terminalOwnerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, terminalOwnerUpdateArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TerminalOwners.
     * @param {terminalOwnerDeleteManyArgs} args - Arguments to filter TerminalOwners to delete.
     * @example
     * // Delete a few TerminalOwners
     * const { count } = await prisma.terminalOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends terminalOwnerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, terminalOwnerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerminalOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TerminalOwners
     * const terminalOwner = await prisma.terminalOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends terminalOwnerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, terminalOwnerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TerminalOwner.
     * @param {terminalOwnerUpsertArgs} args - Arguments to update or create a TerminalOwner.
     * @example
     * // Update or create a TerminalOwner
     * const terminalOwner = await prisma.terminalOwner.upsert({
     *   create: {
     *     // ... data to create a TerminalOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TerminalOwner we want to update
     *   }
     * })
    **/
    upsert<T extends terminalOwnerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, terminalOwnerUpsertArgs<ExtArgs>>
    ): Prisma__terminalOwnerClient<$Result.GetResult<Prisma.$terminalOwnerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TerminalOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalOwnerCountArgs} args - Arguments to filter TerminalOwners to count.
     * @example
     * // Count the number of TerminalOwners
     * const count = await prisma.terminalOwner.count({
     *   where: {
     *     // ... the filter for the TerminalOwners we want to count
     *   }
     * })
    **/
    count<T extends terminalOwnerCountArgs>(
      args?: Subset<T, terminalOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerminalOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TerminalOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerminalOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TerminalOwnerAggregateArgs>(args: Subset<T, TerminalOwnerAggregateArgs>): Prisma.PrismaPromise<GetTerminalOwnerAggregateType<T>>

    /**
     * Group by TerminalOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {terminalOwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends terminalOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: terminalOwnerGroupByArgs['orderBy'] }
        : { orderBy?: terminalOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, terminalOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerminalOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the terminalOwner model
   */
  readonly fields: terminalOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for terminalOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__terminalOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the terminalOwner model
   */ 
  interface terminalOwnerFieldRefs {
    readonly id: FieldRef<"terminalOwner", 'Int'>
    readonly avatarUuid: FieldRef<"terminalOwner", 'String'>
    readonly avatarName: FieldRef<"terminalOwner", 'String'>
    readonly parcelName: FieldRef<"terminalOwner", 'String'>
    readonly slUrl: FieldRef<"terminalOwner", 'String'>
    readonly lastActive: FieldRef<"terminalOwner", 'DateTime'>
    readonly createdAt: FieldRef<"terminalOwner", 'DateTime'>
    readonly updatedAt: FieldRef<"terminalOwner", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * terminalOwner findUnique
   */
  export type terminalOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * Filter, which terminalOwner to fetch.
     */
    where: terminalOwnerWhereUniqueInput
  }


  /**
   * terminalOwner findUniqueOrThrow
   */
  export type terminalOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * Filter, which terminalOwner to fetch.
     */
    where: terminalOwnerWhereUniqueInput
  }


  /**
   * terminalOwner findFirst
   */
  export type terminalOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * Filter, which terminalOwner to fetch.
     */
    where?: terminalOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminalOwners to fetch.
     */
    orderBy?: terminalOwnerOrderByWithRelationInput | terminalOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for terminalOwners.
     */
    cursor?: terminalOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminalOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminalOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of terminalOwners.
     */
    distinct?: TerminalOwnerScalarFieldEnum | TerminalOwnerScalarFieldEnum[]
  }


  /**
   * terminalOwner findFirstOrThrow
   */
  export type terminalOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * Filter, which terminalOwner to fetch.
     */
    where?: terminalOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminalOwners to fetch.
     */
    orderBy?: terminalOwnerOrderByWithRelationInput | terminalOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for terminalOwners.
     */
    cursor?: terminalOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminalOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminalOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of terminalOwners.
     */
    distinct?: TerminalOwnerScalarFieldEnum | TerminalOwnerScalarFieldEnum[]
  }


  /**
   * terminalOwner findMany
   */
  export type terminalOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * Filter, which terminalOwners to fetch.
     */
    where?: terminalOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of terminalOwners to fetch.
     */
    orderBy?: terminalOwnerOrderByWithRelationInput | terminalOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing terminalOwners.
     */
    cursor?: terminalOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` terminalOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` terminalOwners.
     */
    skip?: number
    distinct?: TerminalOwnerScalarFieldEnum | TerminalOwnerScalarFieldEnum[]
  }


  /**
   * terminalOwner create
   */
  export type terminalOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * The data needed to create a terminalOwner.
     */
    data: XOR<terminalOwnerCreateInput, terminalOwnerUncheckedCreateInput>
  }


  /**
   * terminalOwner createMany
   */
  export type terminalOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many terminalOwners.
     */
    data: terminalOwnerCreateManyInput | terminalOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * terminalOwner update
   */
  export type terminalOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * The data needed to update a terminalOwner.
     */
    data: XOR<terminalOwnerUpdateInput, terminalOwnerUncheckedUpdateInput>
    /**
     * Choose, which terminalOwner to update.
     */
    where: terminalOwnerWhereUniqueInput
  }


  /**
   * terminalOwner updateMany
   */
  export type terminalOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update terminalOwners.
     */
    data: XOR<terminalOwnerUpdateManyMutationInput, terminalOwnerUncheckedUpdateManyInput>
    /**
     * Filter which terminalOwners to update
     */
    where?: terminalOwnerWhereInput
  }


  /**
   * terminalOwner upsert
   */
  export type terminalOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * The filter to search for the terminalOwner to update in case it exists.
     */
    where: terminalOwnerWhereUniqueInput
    /**
     * In case the terminalOwner found by the `where` argument doesn't exist, create a new terminalOwner with this data.
     */
    create: XOR<terminalOwnerCreateInput, terminalOwnerUncheckedCreateInput>
    /**
     * In case the terminalOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<terminalOwnerUpdateInput, terminalOwnerUncheckedUpdateInput>
  }


  /**
   * terminalOwner delete
   */
  export type terminalOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
    /**
     * Filter which terminalOwner to delete.
     */
    where: terminalOwnerWhereUniqueInput
  }


  /**
   * terminalOwner deleteMany
   */
  export type terminalOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which terminalOwners to delete
     */
    where?: terminalOwnerWhereInput
  }


  /**
   * terminalOwner without action
   */
  export type terminalOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the terminalOwner
     */
    select?: terminalOwnerSelect<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    ldollarBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    ldollarBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    refreshToken: string | null
    ldollarBalance: number | null
    uuid: string | null
    avatarName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    refreshToken: string | null
    ldollarBalance: number | null
    uuid: string | null
    avatarName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    refreshToken: number
    ldollarBalance: number
    uuid: number
    avatarName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    ldollarBalance?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    ldollarBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    refreshToken?: true
    ldollarBalance?: true
    uuid?: true
    avatarName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    refreshToken?: true
    ldollarBalance?: true
    uuid?: true
    avatarName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    refreshToken?: true
    ldollarBalance?: true
    uuid?: true
    avatarName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    refreshToken: string | null
    ldollarBalance: number | null
    uuid: string | null
    avatarName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    ldollarBalance?: boolean
    uuid?: boolean
    avatarName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bot?: boolean | user$botArgs<ExtArgs>
    groupImList?: boolean | user$groupImListArgs<ExtArgs>
    paymentLog?: boolean | user$paymentLogArgs<ExtArgs>
    sharedBotUserSubscription?: boolean | user$sharedBotUserSubscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    refreshToken?: boolean
    ldollarBalance?: boolean
    uuid?: boolean
    avatarName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bot?: boolean | user$botArgs<ExtArgs>
    groupImList?: boolean | user$groupImListArgs<ExtArgs>
    paymentLog?: boolean | user$paymentLogArgs<ExtArgs>
    sharedBotUserSubscription?: boolean | user$sharedBotUserSubscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      bot: Prisma.$botPayload<ExtArgs>[]
      groupImList: Prisma.$groupImListPayload<ExtArgs>[]
      paymentLog: Prisma.$paymentLogPayload<ExtArgs>[]
      sharedBotUserSubscription: Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      refreshToken: string | null
      ldollarBalance: number | null
      uuid: string | null
      avatarName: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bot<T extends user$botArgs<ExtArgs> = {}>(args?: Subset<T, user$botArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$botPayload<ExtArgs>, T, 'findMany'> | Null>;

    groupImList<T extends user$groupImListArgs<ExtArgs> = {}>(args?: Subset<T, user$groupImListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupImListPayload<ExtArgs>, T, 'findMany'> | Null>;

    paymentLog<T extends user$paymentLogArgs<ExtArgs> = {}>(args?: Subset<T, user$paymentLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    sharedBotUserSubscription<T extends user$sharedBotUserSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, user$sharedBotUserSubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sharedBotUserSubscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly refreshToken: FieldRef<"user", 'String'>
    readonly ldollarBalance: FieldRef<"user", 'Int'>
    readonly uuid: FieldRef<"user", 'String'>
    readonly avatarName: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.bot
   */
  export type user$botArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bot
     */
    select?: botSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: botInclude<ExtArgs> | null
    where?: botWhereInput
    orderBy?: botOrderByWithRelationInput | botOrderByWithRelationInput[]
    cursor?: botWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BotScalarFieldEnum | BotScalarFieldEnum[]
  }


  /**
   * user.groupImList
   */
  export type user$groupImListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupImList
     */
    select?: groupImListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: groupImListInclude<ExtArgs> | null
    where?: groupImListWhereInput
    orderBy?: groupImListOrderByWithRelationInput | groupImListOrderByWithRelationInput[]
    cursor?: groupImListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupImListScalarFieldEnum | GroupImListScalarFieldEnum[]
  }


  /**
   * user.paymentLog
   */
  export type user$paymentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentLog
     */
    select?: paymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: paymentLogInclude<ExtArgs> | null
    where?: paymentLogWhereInput
    orderBy?: paymentLogOrderByWithRelationInput | paymentLogOrderByWithRelationInput[]
    cursor?: paymentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }


  /**
   * user.sharedBotUserSubscription
   */
  export type user$sharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sharedBotUserSubscription
     */
    select?: sharedBotUserSubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sharedBotUserSubscriptionInclude<ExtArgs> | null
    where?: sharedBotUserSubscriptionWhereInput
    orderBy?: sharedBotUserSubscriptionOrderByWithRelationInput | sharedBotUserSubscriptionOrderByWithRelationInput[]
    cursor?: sharedBotUserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedBotUserSubscriptionScalarFieldEnum | SharedBotUserSubscriptionScalarFieldEnum[]
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BotScalarFieldEnum: {
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

  export type BotScalarFieldEnum = (typeof BotScalarFieldEnum)[keyof typeof BotScalarFieldEnum]


  export const BotLogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    botUuid: 'botUuid',
    message: 'message',
    event: 'event',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BotLogScalarFieldEnum = (typeof BotLogScalarFieldEnum)[keyof typeof BotLogScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    duration: 'duration',
    uses: 'uses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const DiscordSettingsScalarFieldEnum: {
    id: 'id',
    botId: 'botId',
    webHookUrl: 'webHookUrl',
    slGroupUuid: 'slGroupUuid',
    discChannelId: 'discChannelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiscordSettingsScalarFieldEnum = (typeof DiscordSettingsScalarFieldEnum)[keyof typeof DiscordSettingsScalarFieldEnum]


  export const GroupImAvatarScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    groupImListId: 'groupImListId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupImAvatarScalarFieldEnum = (typeof GroupImAvatarScalarFieldEnum)[keyof typeof GroupImAvatarScalarFieldEnum]


  export const GroupImListScalarFieldEnum: {
    id: 'id',
    listName: 'listName',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupImListScalarFieldEnum = (typeof GroupImListScalarFieldEnum)[keyof typeof GroupImListScalarFieldEnum]


  export const SubPackageScalarFieldEnum: {
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

  export type SubPackageScalarFieldEnum = (typeof SubPackageScalarFieldEnum)[keyof typeof SubPackageScalarFieldEnum]


  export const PaymentLogScalarFieldEnum: {
    id: 'id',
    userUuid: 'userUuid',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentLogScalarFieldEnum = (typeof PaymentLogScalarFieldEnum)[keyof typeof PaymentLogScalarFieldEnum]


  export const SharedBotScalarFieldEnum: {
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

  export type SharedBotScalarFieldEnum = (typeof SharedBotScalarFieldEnum)[keyof typeof SharedBotScalarFieldEnum]


  export const SharedBotUserSubscriptionScalarFieldEnum: {
    id: 'id',
    sharedBotId: 'sharedBotId',
    userId: 'userId',
    subscriptionStart: 'subscriptionStart',
    subscriptionEnd: 'subscriptionEnd',
    packageId: 'packageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SharedBotUserSubscriptionScalarFieldEnum = (typeof SharedBotUserSubscriptionScalarFieldEnum)[keyof typeof SharedBotUserSubscriptionScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    packageId: 'packageId',
    subscriptionStart: 'subscriptionStart',
    subscriptionEnd: 'subscriptionEnd',
    botId: 'botId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const TerminalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiKey: 'apiKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TerminalScalarFieldEnum = (typeof TerminalScalarFieldEnum)[keyof typeof TerminalScalarFieldEnum]


  export const TerminalOwnerScalarFieldEnum: {
    id: 'id',
    avatarUuid: 'avatarUuid',
    avatarName: 'avatarName',
    parcelName: 'parcelName',
    slUrl: 'slUrl',
    lastActive: 'lastActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TerminalOwnerScalarFieldEnum = (typeof TerminalOwnerScalarFieldEnum)[keyof typeof TerminalOwnerScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type botWhereInput = {
    AND?: botWhereInput | botWhereInput[]
    OR?: botWhereInput[]
    NOT?: botWhereInput | botWhereInput[]
    id?: IntFilter<"bot"> | number
    loginFirstName?: StringFilter<"bot"> | string
    loginLastName?: StringFilter<"bot"> | string
    loginPassword?: StringFilter<"bot"> | string
    loginSpawnLocation?: StringFilter<"bot"> | string
    userId?: IntFilter<"bot"> | number
    running?: BoolFilter<"bot"> | boolean
    shouldRun?: BoolNullableFilter<"bot"> | boolean | null
    loginRegion?: StringNullableFilter<"bot"> | string | null
    packageId?: IntNullableFilter<"bot"> | number | null
    uuid?: StringFilter<"bot"> | string
    imageId?: StringFilter<"bot"> | string
    actionId?: IntNullableFilter<"bot"> | number | null
    createdAt?: DateTimeNullableFilter<"bot"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"bot"> | Date | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    subscription?: SubscriptionListRelationFilter
  }

  export type botOrderByWithRelationInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    userId?: SortOrder
    running?: SortOrder
    shouldRun?: SortOrderInput | SortOrder
    loginRegion?: SortOrderInput | SortOrder
    packageId?: SortOrderInput | SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    actionId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    subscription?: subscriptionOrderByRelationAggregateInput
  }

  export type botWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: botWhereInput | botWhereInput[]
    OR?: botWhereInput[]
    NOT?: botWhereInput | botWhereInput[]
    loginFirstName?: StringFilter<"bot"> | string
    loginLastName?: StringFilter<"bot"> | string
    loginPassword?: StringFilter<"bot"> | string
    loginSpawnLocation?: StringFilter<"bot"> | string
    userId?: IntFilter<"bot"> | number
    running?: BoolFilter<"bot"> | boolean
    shouldRun?: BoolNullableFilter<"bot"> | boolean | null
    loginRegion?: StringNullableFilter<"bot"> | string | null
    packageId?: IntNullableFilter<"bot"> | number | null
    uuid?: StringFilter<"bot"> | string
    imageId?: StringFilter<"bot"> | string
    actionId?: IntNullableFilter<"bot"> | number | null
    createdAt?: DateTimeNullableFilter<"bot"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"bot"> | Date | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
    subscription?: SubscriptionListRelationFilter
  }, "id">

  export type botOrderByWithAggregationInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    userId?: SortOrder
    running?: SortOrder
    shouldRun?: SortOrderInput | SortOrder
    loginRegion?: SortOrderInput | SortOrder
    packageId?: SortOrderInput | SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    actionId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: botCountOrderByAggregateInput
    _avg?: botAvgOrderByAggregateInput
    _max?: botMaxOrderByAggregateInput
    _min?: botMinOrderByAggregateInput
    _sum?: botSumOrderByAggregateInput
  }

  export type botScalarWhereWithAggregatesInput = {
    AND?: botScalarWhereWithAggregatesInput | botScalarWhereWithAggregatesInput[]
    OR?: botScalarWhereWithAggregatesInput[]
    NOT?: botScalarWhereWithAggregatesInput | botScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bot"> | number
    loginFirstName?: StringWithAggregatesFilter<"bot"> | string
    loginLastName?: StringWithAggregatesFilter<"bot"> | string
    loginPassword?: StringWithAggregatesFilter<"bot"> | string
    loginSpawnLocation?: StringWithAggregatesFilter<"bot"> | string
    userId?: IntWithAggregatesFilter<"bot"> | number
    running?: BoolWithAggregatesFilter<"bot"> | boolean
    shouldRun?: BoolNullableWithAggregatesFilter<"bot"> | boolean | null
    loginRegion?: StringNullableWithAggregatesFilter<"bot"> | string | null
    packageId?: IntNullableWithAggregatesFilter<"bot"> | number | null
    uuid?: StringWithAggregatesFilter<"bot"> | string
    imageId?: StringWithAggregatesFilter<"bot"> | string
    actionId?: IntNullableWithAggregatesFilter<"bot"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"bot"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"bot"> | Date | string | null
  }

  export type botLogWhereInput = {
    AND?: botLogWhereInput | botLogWhereInput[]
    OR?: botLogWhereInput[]
    NOT?: botLogWhereInput | botLogWhereInput[]
    id?: IntFilter<"botLog"> | number
    name?: StringFilter<"botLog"> | string
    botUuid?: StringFilter<"botLog"> | string
    message?: StringFilter<"botLog"> | string
    event?: StringFilter<"botLog"> | string
    createdAt?: DateTimeNullableFilter<"botLog"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"botLog"> | Date | string | null
  }

  export type botLogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    botUuid?: SortOrder
    message?: SortOrder
    event?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type botLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: botLogWhereInput | botLogWhereInput[]
    OR?: botLogWhereInput[]
    NOT?: botLogWhereInput | botLogWhereInput[]
    name?: StringFilter<"botLog"> | string
    botUuid?: StringFilter<"botLog"> | string
    message?: StringFilter<"botLog"> | string
    event?: StringFilter<"botLog"> | string
    createdAt?: DateTimeNullableFilter<"botLog"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"botLog"> | Date | string | null
  }, "id">

  export type botLogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    botUuid?: SortOrder
    message?: SortOrder
    event?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: botLogCountOrderByAggregateInput
    _avg?: botLogAvgOrderByAggregateInput
    _max?: botLogMaxOrderByAggregateInput
    _min?: botLogMinOrderByAggregateInput
    _sum?: botLogSumOrderByAggregateInput
  }

  export type botLogScalarWhereWithAggregatesInput = {
    AND?: botLogScalarWhereWithAggregatesInput | botLogScalarWhereWithAggregatesInput[]
    OR?: botLogScalarWhereWithAggregatesInput[]
    NOT?: botLogScalarWhereWithAggregatesInput | botLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"botLog"> | number
    name?: StringWithAggregatesFilter<"botLog"> | string
    botUuid?: StringWithAggregatesFilter<"botLog"> | string
    message?: StringWithAggregatesFilter<"botLog"> | string
    event?: StringWithAggregatesFilter<"botLog"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"botLog"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"botLog"> | Date | string | null
  }

  export type couponWhereInput = {
    AND?: couponWhereInput | couponWhereInput[]
    OR?: couponWhereInput[]
    NOT?: couponWhereInput | couponWhereInput[]
    id?: IntFilter<"coupon"> | number
    name?: StringFilter<"coupon"> | string
    type?: StringFilter<"coupon"> | string
    duration?: IntFilter<"coupon"> | number
    uses?: IntFilter<"coupon"> | number
    createdAt?: DateTimeNullableFilter<"coupon"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"coupon"> | Date | string | null
    subPackage?: SubPackageListRelationFilter
  }

  export type couponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    subPackage?: subPackageOrderByRelationAggregateInput
  }

  export type couponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: couponWhereInput | couponWhereInput[]
    OR?: couponWhereInput[]
    NOT?: couponWhereInput | couponWhereInput[]
    name?: StringFilter<"coupon"> | string
    type?: StringFilter<"coupon"> | string
    duration?: IntFilter<"coupon"> | number
    uses?: IntFilter<"coupon"> | number
    createdAt?: DateTimeNullableFilter<"coupon"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"coupon"> | Date | string | null
    subPackage?: SubPackageListRelationFilter
  }, "id">

  export type couponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: couponCountOrderByAggregateInput
    _avg?: couponAvgOrderByAggregateInput
    _max?: couponMaxOrderByAggregateInput
    _min?: couponMinOrderByAggregateInput
    _sum?: couponSumOrderByAggregateInput
  }

  export type couponScalarWhereWithAggregatesInput = {
    AND?: couponScalarWhereWithAggregatesInput | couponScalarWhereWithAggregatesInput[]
    OR?: couponScalarWhereWithAggregatesInput[]
    NOT?: couponScalarWhereWithAggregatesInput | couponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"coupon"> | number
    name?: StringWithAggregatesFilter<"coupon"> | string
    type?: StringWithAggregatesFilter<"coupon"> | string
    duration?: IntWithAggregatesFilter<"coupon"> | number
    uses?: IntWithAggregatesFilter<"coupon"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"coupon"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"coupon"> | Date | string | null
  }

  export type discordSettingsWhereInput = {
    AND?: discordSettingsWhereInput | discordSettingsWhereInput[]
    OR?: discordSettingsWhereInput[]
    NOT?: discordSettingsWhereInput | discordSettingsWhereInput[]
    id?: IntFilter<"discordSettings"> | number
    botId?: IntFilter<"discordSettings"> | number
    webHookUrl?: StringNullableFilter<"discordSettings"> | string | null
    slGroupUuid?: StringNullableFilter<"discordSettings"> | string | null
    discChannelId?: StringNullableFilter<"discordSettings"> | string | null
    createdAt?: DateTimeNullableFilter<"discordSettings"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"discordSettings"> | Date | string | null
  }

  export type discordSettingsOrderByWithRelationInput = {
    id?: SortOrder
    botId?: SortOrder
    webHookUrl?: SortOrderInput | SortOrder
    slGroupUuid?: SortOrderInput | SortOrder
    discChannelId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type discordSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: discordSettingsWhereInput | discordSettingsWhereInput[]
    OR?: discordSettingsWhereInput[]
    NOT?: discordSettingsWhereInput | discordSettingsWhereInput[]
    botId?: IntFilter<"discordSettings"> | number
    webHookUrl?: StringNullableFilter<"discordSettings"> | string | null
    slGroupUuid?: StringNullableFilter<"discordSettings"> | string | null
    discChannelId?: StringNullableFilter<"discordSettings"> | string | null
    createdAt?: DateTimeNullableFilter<"discordSettings"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"discordSettings"> | Date | string | null
  }, "id">

  export type discordSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    botId?: SortOrder
    webHookUrl?: SortOrderInput | SortOrder
    slGroupUuid?: SortOrderInput | SortOrder
    discChannelId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: discordSettingsCountOrderByAggregateInput
    _avg?: discordSettingsAvgOrderByAggregateInput
    _max?: discordSettingsMaxOrderByAggregateInput
    _min?: discordSettingsMinOrderByAggregateInput
    _sum?: discordSettingsSumOrderByAggregateInput
  }

  export type discordSettingsScalarWhereWithAggregatesInput = {
    AND?: discordSettingsScalarWhereWithAggregatesInput | discordSettingsScalarWhereWithAggregatesInput[]
    OR?: discordSettingsScalarWhereWithAggregatesInput[]
    NOT?: discordSettingsScalarWhereWithAggregatesInput | discordSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"discordSettings"> | number
    botId?: IntWithAggregatesFilter<"discordSettings"> | number
    webHookUrl?: StringNullableWithAggregatesFilter<"discordSettings"> | string | null
    slGroupUuid?: StringNullableWithAggregatesFilter<"discordSettings"> | string | null
    discChannelId?: StringNullableWithAggregatesFilter<"discordSettings"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"discordSettings"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"discordSettings"> | Date | string | null
  }

  export type groupImAvatarWhereInput = {
    AND?: groupImAvatarWhereInput | groupImAvatarWhereInput[]
    OR?: groupImAvatarWhereInput[]
    NOT?: groupImAvatarWhereInput | groupImAvatarWhereInput[]
    id?: IntFilter<"groupImAvatar"> | number
    uuid?: StringFilter<"groupImAvatar"> | string
    groupImListId?: IntFilter<"groupImAvatar"> | number
    createdAt?: DateTimeNullableFilter<"groupImAvatar"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"groupImAvatar"> | Date | string | null
    groupImList?: XOR<GroupImListRelationFilter, groupImListWhereInput>
  }

  export type groupImAvatarOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    groupImListId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    groupImList?: groupImListOrderByWithRelationInput
  }

  export type groupImAvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: groupImAvatarWhereInput | groupImAvatarWhereInput[]
    OR?: groupImAvatarWhereInput[]
    NOT?: groupImAvatarWhereInput | groupImAvatarWhereInput[]
    uuid?: StringFilter<"groupImAvatar"> | string
    groupImListId?: IntFilter<"groupImAvatar"> | number
    createdAt?: DateTimeNullableFilter<"groupImAvatar"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"groupImAvatar"> | Date | string | null
    groupImList?: XOR<GroupImListRelationFilter, groupImListWhereInput>
  }, "id">

  export type groupImAvatarOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    groupImListId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: groupImAvatarCountOrderByAggregateInput
    _avg?: groupImAvatarAvgOrderByAggregateInput
    _max?: groupImAvatarMaxOrderByAggregateInput
    _min?: groupImAvatarMinOrderByAggregateInput
    _sum?: groupImAvatarSumOrderByAggregateInput
  }

  export type groupImAvatarScalarWhereWithAggregatesInput = {
    AND?: groupImAvatarScalarWhereWithAggregatesInput | groupImAvatarScalarWhereWithAggregatesInput[]
    OR?: groupImAvatarScalarWhereWithAggregatesInput[]
    NOT?: groupImAvatarScalarWhereWithAggregatesInput | groupImAvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"groupImAvatar"> | number
    uuid?: StringWithAggregatesFilter<"groupImAvatar"> | string
    groupImListId?: IntWithAggregatesFilter<"groupImAvatar"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"groupImAvatar"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"groupImAvatar"> | Date | string | null
  }

  export type groupImListWhereInput = {
    AND?: groupImListWhereInput | groupImListWhereInput[]
    OR?: groupImListWhereInput[]
    NOT?: groupImListWhereInput | groupImListWhereInput[]
    id?: IntFilter<"groupImList"> | number
    listName?: StringFilter<"groupImList"> | string
    userId?: IntFilter<"groupImList"> | number
    createdAt?: DateTimeNullableFilter<"groupImList"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"groupImList"> | Date | string | null
    groupImAvatar?: GroupImAvatarListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type groupImListOrderByWithRelationInput = {
    id?: SortOrder
    listName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    groupImAvatar?: groupImAvatarOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type groupImListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: groupImListWhereInput | groupImListWhereInput[]
    OR?: groupImListWhereInput[]
    NOT?: groupImListWhereInput | groupImListWhereInput[]
    listName?: StringFilter<"groupImList"> | string
    userId?: IntFilter<"groupImList"> | number
    createdAt?: DateTimeNullableFilter<"groupImList"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"groupImList"> | Date | string | null
    groupImAvatar?: GroupImAvatarListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type groupImListOrderByWithAggregationInput = {
    id?: SortOrder
    listName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: groupImListCountOrderByAggregateInput
    _avg?: groupImListAvgOrderByAggregateInput
    _max?: groupImListMaxOrderByAggregateInput
    _min?: groupImListMinOrderByAggregateInput
    _sum?: groupImListSumOrderByAggregateInput
  }

  export type groupImListScalarWhereWithAggregatesInput = {
    AND?: groupImListScalarWhereWithAggregatesInput | groupImListScalarWhereWithAggregatesInput[]
    OR?: groupImListScalarWhereWithAggregatesInput[]
    NOT?: groupImListScalarWhereWithAggregatesInput | groupImListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"groupImList"> | number
    listName?: StringWithAggregatesFilter<"groupImList"> | string
    userId?: IntWithAggregatesFilter<"groupImList"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"groupImList"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"groupImList"> | Date | string | null
  }

  export type subPackageWhereInput = {
    AND?: subPackageWhereInput | subPackageWhereInput[]
    OR?: subPackageWhereInput[]
    NOT?: subPackageWhereInput | subPackageWhereInput[]
    id?: IntFilter<"subPackage"> | number
    packageName?: StringFilter<"subPackage"> | string
    packageDescription?: StringNullableFilter<"subPackage"> | string | null
    pricePerWeek?: IntFilter<"subPackage"> | number
    discount?: IntFilter<"subPackage"> | number
    pricePerMonth?: IntFilter<"subPackage"> | number
    couponId?: IntNullableFilter<"subPackage"> | number | null
    createdAt?: DateTimeNullableFilter<"subPackage"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subPackage"> | Date | string | null
    coupon?: XOR<CouponNullableRelationFilter, couponWhereInput> | null
    sharedBotUserSubscription?: SharedBotUserSubscriptionListRelationFilter
    subscription?: SubscriptionListRelationFilter
  }

  export type subPackageOrderByWithRelationInput = {
    id?: SortOrder
    packageName?: SortOrder
    packageDescription?: SortOrderInput | SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    coupon?: couponOrderByWithRelationInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionOrderByRelationAggregateInput
    subscription?: subscriptionOrderByRelationAggregateInput
  }

  export type subPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subPackageWhereInput | subPackageWhereInput[]
    OR?: subPackageWhereInput[]
    NOT?: subPackageWhereInput | subPackageWhereInput[]
    packageName?: StringFilter<"subPackage"> | string
    packageDescription?: StringNullableFilter<"subPackage"> | string | null
    pricePerWeek?: IntFilter<"subPackage"> | number
    discount?: IntFilter<"subPackage"> | number
    pricePerMonth?: IntFilter<"subPackage"> | number
    couponId?: IntNullableFilter<"subPackage"> | number | null
    createdAt?: DateTimeNullableFilter<"subPackage"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subPackage"> | Date | string | null
    coupon?: XOR<CouponNullableRelationFilter, couponWhereInput> | null
    sharedBotUserSubscription?: SharedBotUserSubscriptionListRelationFilter
    subscription?: SubscriptionListRelationFilter
  }, "id">

  export type subPackageOrderByWithAggregationInput = {
    id?: SortOrder
    packageName?: SortOrder
    packageDescription?: SortOrderInput | SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: subPackageCountOrderByAggregateInput
    _avg?: subPackageAvgOrderByAggregateInput
    _max?: subPackageMaxOrderByAggregateInput
    _min?: subPackageMinOrderByAggregateInput
    _sum?: subPackageSumOrderByAggregateInput
  }

  export type subPackageScalarWhereWithAggregatesInput = {
    AND?: subPackageScalarWhereWithAggregatesInput | subPackageScalarWhereWithAggregatesInput[]
    OR?: subPackageScalarWhereWithAggregatesInput[]
    NOT?: subPackageScalarWhereWithAggregatesInput | subPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subPackage"> | number
    packageName?: StringWithAggregatesFilter<"subPackage"> | string
    packageDescription?: StringNullableWithAggregatesFilter<"subPackage"> | string | null
    pricePerWeek?: IntWithAggregatesFilter<"subPackage"> | number
    discount?: IntWithAggregatesFilter<"subPackage"> | number
    pricePerMonth?: IntWithAggregatesFilter<"subPackage"> | number
    couponId?: IntNullableWithAggregatesFilter<"subPackage"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"subPackage"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"subPackage"> | Date | string | null
  }

  export type paymentLogWhereInput = {
    AND?: paymentLogWhereInput | paymentLogWhereInput[]
    OR?: paymentLogWhereInput[]
    NOT?: paymentLogWhereInput | paymentLogWhereInput[]
    id?: IntFilter<"paymentLog"> | number
    userUuid?: StringFilter<"paymentLog"> | string
    amount?: IntFilter<"paymentLog"> | number
    createdAt?: DateTimeNullableFilter<"paymentLog"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"paymentLog"> | Date | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type paymentLogOrderByWithRelationInput = {
    id?: SortOrder
    userUuid?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
  }

  export type paymentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentLogWhereInput | paymentLogWhereInput[]
    OR?: paymentLogWhereInput[]
    NOT?: paymentLogWhereInput | paymentLogWhereInput[]
    userUuid?: StringFilter<"paymentLog"> | string
    amount?: IntFilter<"paymentLog"> | number
    createdAt?: DateTimeNullableFilter<"paymentLog"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"paymentLog"> | Date | string | null
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type paymentLogOrderByWithAggregationInput = {
    id?: SortOrder
    userUuid?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: paymentLogCountOrderByAggregateInput
    _avg?: paymentLogAvgOrderByAggregateInput
    _max?: paymentLogMaxOrderByAggregateInput
    _min?: paymentLogMinOrderByAggregateInput
    _sum?: paymentLogSumOrderByAggregateInput
  }

  export type paymentLogScalarWhereWithAggregatesInput = {
    AND?: paymentLogScalarWhereWithAggregatesInput | paymentLogScalarWhereWithAggregatesInput[]
    OR?: paymentLogScalarWhereWithAggregatesInput[]
    NOT?: paymentLogScalarWhereWithAggregatesInput | paymentLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paymentLog"> | number
    userUuid?: StringWithAggregatesFilter<"paymentLog"> | string
    amount?: IntWithAggregatesFilter<"paymentLog"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"paymentLog"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"paymentLog"> | Date | string | null
  }

  export type sharedBotWhereInput = {
    AND?: sharedBotWhereInput | sharedBotWhereInput[]
    OR?: sharedBotWhereInput[]
    NOT?: sharedBotWhereInput | sharedBotWhereInput[]
    id?: IntFilter<"sharedBot"> | number
    loginFirstName?: StringFilter<"sharedBot"> | string
    loginLastName?: StringFilter<"sharedBot"> | string
    loginPassword?: StringFilter<"sharedBot"> | string
    loginSpawnLocation?: StringFilter<"sharedBot"> | string
    running?: BoolFilter<"sharedBot"> | boolean
    loginRegion?: StringNullableFilter<"sharedBot"> | string | null
    packageId?: IntNullableFilter<"sharedBot"> | number | null
    uuid?: StringFilter<"sharedBot"> | string
    imageId?: StringFilter<"sharedBot"> | string
    createdAt?: DateTimeNullableFilter<"sharedBot"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sharedBot"> | Date | string | null
    sharedBotUserSubscription?: SharedBotUserSubscriptionListRelationFilter
  }

  export type sharedBotOrderByWithRelationInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    running?: SortOrder
    loginRegion?: SortOrderInput | SortOrder
    packageId?: SortOrderInput | SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    sharedBotUserSubscription?: sharedBotUserSubscriptionOrderByRelationAggregateInput
  }

  export type sharedBotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sharedBotWhereInput | sharedBotWhereInput[]
    OR?: sharedBotWhereInput[]
    NOT?: sharedBotWhereInput | sharedBotWhereInput[]
    loginFirstName?: StringFilter<"sharedBot"> | string
    loginLastName?: StringFilter<"sharedBot"> | string
    loginPassword?: StringFilter<"sharedBot"> | string
    loginSpawnLocation?: StringFilter<"sharedBot"> | string
    running?: BoolFilter<"sharedBot"> | boolean
    loginRegion?: StringNullableFilter<"sharedBot"> | string | null
    packageId?: IntNullableFilter<"sharedBot"> | number | null
    uuid?: StringFilter<"sharedBot"> | string
    imageId?: StringFilter<"sharedBot"> | string
    createdAt?: DateTimeNullableFilter<"sharedBot"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sharedBot"> | Date | string | null
    sharedBotUserSubscription?: SharedBotUserSubscriptionListRelationFilter
  }, "id">

  export type sharedBotOrderByWithAggregationInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    running?: SortOrder
    loginRegion?: SortOrderInput | SortOrder
    packageId?: SortOrderInput | SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: sharedBotCountOrderByAggregateInput
    _avg?: sharedBotAvgOrderByAggregateInput
    _max?: sharedBotMaxOrderByAggregateInput
    _min?: sharedBotMinOrderByAggregateInput
    _sum?: sharedBotSumOrderByAggregateInput
  }

  export type sharedBotScalarWhereWithAggregatesInput = {
    AND?: sharedBotScalarWhereWithAggregatesInput | sharedBotScalarWhereWithAggregatesInput[]
    OR?: sharedBotScalarWhereWithAggregatesInput[]
    NOT?: sharedBotScalarWhereWithAggregatesInput | sharedBotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sharedBot"> | number
    loginFirstName?: StringWithAggregatesFilter<"sharedBot"> | string
    loginLastName?: StringWithAggregatesFilter<"sharedBot"> | string
    loginPassword?: StringWithAggregatesFilter<"sharedBot"> | string
    loginSpawnLocation?: StringWithAggregatesFilter<"sharedBot"> | string
    running?: BoolWithAggregatesFilter<"sharedBot"> | boolean
    loginRegion?: StringNullableWithAggregatesFilter<"sharedBot"> | string | null
    packageId?: IntNullableWithAggregatesFilter<"sharedBot"> | number | null
    uuid?: StringWithAggregatesFilter<"sharedBot"> | string
    imageId?: StringWithAggregatesFilter<"sharedBot"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"sharedBot"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"sharedBot"> | Date | string | null
  }

  export type sharedBotUserSubscriptionWhereInput = {
    AND?: sharedBotUserSubscriptionWhereInput | sharedBotUserSubscriptionWhereInput[]
    OR?: sharedBotUserSubscriptionWhereInput[]
    NOT?: sharedBotUserSubscriptionWhereInput | sharedBotUserSubscriptionWhereInput[]
    id?: IntFilter<"sharedBotUserSubscription"> | number
    sharedBotId?: IntFilter<"sharedBotUserSubscription"> | number
    userId?: IntFilter<"sharedBotUserSubscription"> | number
    subscriptionStart?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    subscriptionEnd?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    packageId?: IntFilter<"sharedBotUserSubscription"> | number
    createdAt?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    sharedBot?: XOR<SharedBotRelationFilter, sharedBotWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    subPackage?: XOR<SubPackageRelationFilter, subPackageWhereInput>
  }

  export type sharedBotUserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    subscriptionStart?: SortOrderInput | SortOrder
    subscriptionEnd?: SortOrderInput | SortOrder
    packageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    sharedBot?: sharedBotOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    subPackage?: subPackageOrderByWithRelationInput
  }

  export type sharedBotUserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sharedBotUserSubscriptionWhereInput | sharedBotUserSubscriptionWhereInput[]
    OR?: sharedBotUserSubscriptionWhereInput[]
    NOT?: sharedBotUserSubscriptionWhereInput | sharedBotUserSubscriptionWhereInput[]
    sharedBotId?: IntFilter<"sharedBotUserSubscription"> | number
    userId?: IntFilter<"sharedBotUserSubscription"> | number
    subscriptionStart?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    subscriptionEnd?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    packageId?: IntFilter<"sharedBotUserSubscription"> | number
    createdAt?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    sharedBot?: XOR<SharedBotRelationFilter, sharedBotWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    subPackage?: XOR<SubPackageRelationFilter, subPackageWhereInput>
  }, "id">

  export type sharedBotUserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    subscriptionStart?: SortOrderInput | SortOrder
    subscriptionEnd?: SortOrderInput | SortOrder
    packageId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: sharedBotUserSubscriptionCountOrderByAggregateInput
    _avg?: sharedBotUserSubscriptionAvgOrderByAggregateInput
    _max?: sharedBotUserSubscriptionMaxOrderByAggregateInput
    _min?: sharedBotUserSubscriptionMinOrderByAggregateInput
    _sum?: sharedBotUserSubscriptionSumOrderByAggregateInput
  }

  export type sharedBotUserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: sharedBotUserSubscriptionScalarWhereWithAggregatesInput | sharedBotUserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: sharedBotUserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: sharedBotUserSubscriptionScalarWhereWithAggregatesInput | sharedBotUserSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sharedBotUserSubscription"> | number
    sharedBotId?: IntWithAggregatesFilter<"sharedBotUserSubscription"> | number
    userId?: IntWithAggregatesFilter<"sharedBotUserSubscription"> | number
    subscriptionStart?: DateTimeNullableWithAggregatesFilter<"sharedBotUserSubscription"> | Date | string | null
    subscriptionEnd?: DateTimeNullableWithAggregatesFilter<"sharedBotUserSubscription"> | Date | string | null
    packageId?: IntWithAggregatesFilter<"sharedBotUserSubscription"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"sharedBotUserSubscription"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"sharedBotUserSubscription"> | Date | string | null
  }

  export type subscriptionWhereInput = {
    AND?: subscriptionWhereInput | subscriptionWhereInput[]
    OR?: subscriptionWhereInput[]
    NOT?: subscriptionWhereInput | subscriptionWhereInput[]
    id?: IntFilter<"subscription"> | number
    packageId?: IntFilter<"subscription"> | number
    subscriptionStart?: DateTimeFilter<"subscription"> | Date | string
    subscriptionEnd?: DateTimeFilter<"subscription"> | Date | string
    botId?: IntFilter<"subscription"> | number
    createdAt?: DateTimeNullableFilter<"subscription"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subscription"> | Date | string | null
    subPackage?: XOR<SubPackageRelationFilter, subPackageWhereInput>
    bot?: XOR<BotRelationFilter, botWhereInput>
  }

  export type subscriptionOrderByWithRelationInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    botId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    subPackage?: subPackageOrderByWithRelationInput
    bot?: botOrderByWithRelationInput
  }

  export type subscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    packageId_botId?: subscriptionPackageIdBotIdCompoundUniqueInput
    AND?: subscriptionWhereInput | subscriptionWhereInput[]
    OR?: subscriptionWhereInput[]
    NOT?: subscriptionWhereInput | subscriptionWhereInput[]
    packageId?: IntFilter<"subscription"> | number
    subscriptionStart?: DateTimeFilter<"subscription"> | Date | string
    subscriptionEnd?: DateTimeFilter<"subscription"> | Date | string
    botId?: IntFilter<"subscription"> | number
    createdAt?: DateTimeNullableFilter<"subscription"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subscription"> | Date | string | null
    subPackage?: XOR<SubPackageRelationFilter, subPackageWhereInput>
    bot?: XOR<BotRelationFilter, botWhereInput>
  }, "id" | "packageId_botId">

  export type subscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    botId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: subscriptionCountOrderByAggregateInput
    _avg?: subscriptionAvgOrderByAggregateInput
    _max?: subscriptionMaxOrderByAggregateInput
    _min?: subscriptionMinOrderByAggregateInput
    _sum?: subscriptionSumOrderByAggregateInput
  }

  export type subscriptionScalarWhereWithAggregatesInput = {
    AND?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[]
    OR?: subscriptionScalarWhereWithAggregatesInput[]
    NOT?: subscriptionScalarWhereWithAggregatesInput | subscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subscription"> | number
    packageId?: IntWithAggregatesFilter<"subscription"> | number
    subscriptionStart?: DateTimeWithAggregatesFilter<"subscription"> | Date | string
    subscriptionEnd?: DateTimeWithAggregatesFilter<"subscription"> | Date | string
    botId?: IntWithAggregatesFilter<"subscription"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"subscription"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"subscription"> | Date | string | null
  }

  export type terminalWhereInput = {
    AND?: terminalWhereInput | terminalWhereInput[]
    OR?: terminalWhereInput[]
    NOT?: terminalWhereInput | terminalWhereInput[]
    id?: IntFilter<"terminal"> | number
    name?: StringFilter<"terminal"> | string
    apiKey?: StringFilter<"terminal"> | string
    createdAt?: DateTimeNullableFilter<"terminal"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"terminal"> | Date | string | null
  }

  export type terminalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type terminalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: terminalWhereInput | terminalWhereInput[]
    OR?: terminalWhereInput[]
    NOT?: terminalWhereInput | terminalWhereInput[]
    name?: StringFilter<"terminal"> | string
    apiKey?: StringFilter<"terminal"> | string
    createdAt?: DateTimeNullableFilter<"terminal"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"terminal"> | Date | string | null
  }, "id">

  export type terminalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: terminalCountOrderByAggregateInput
    _avg?: terminalAvgOrderByAggregateInput
    _max?: terminalMaxOrderByAggregateInput
    _min?: terminalMinOrderByAggregateInput
    _sum?: terminalSumOrderByAggregateInput
  }

  export type terminalScalarWhereWithAggregatesInput = {
    AND?: terminalScalarWhereWithAggregatesInput | terminalScalarWhereWithAggregatesInput[]
    OR?: terminalScalarWhereWithAggregatesInput[]
    NOT?: terminalScalarWhereWithAggregatesInput | terminalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"terminal"> | number
    name?: StringWithAggregatesFilter<"terminal"> | string
    apiKey?: StringWithAggregatesFilter<"terminal"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"terminal"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"terminal"> | Date | string | null
  }

  export type terminalOwnerWhereInput = {
    AND?: terminalOwnerWhereInput | terminalOwnerWhereInput[]
    OR?: terminalOwnerWhereInput[]
    NOT?: terminalOwnerWhereInput | terminalOwnerWhereInput[]
    id?: IntFilter<"terminalOwner"> | number
    avatarUuid?: StringFilter<"terminalOwner"> | string
    avatarName?: StringFilter<"terminalOwner"> | string
    parcelName?: StringFilter<"terminalOwner"> | string
    slUrl?: StringFilter<"terminalOwner"> | string
    lastActive?: DateTimeFilter<"terminalOwner"> | Date | string
    createdAt?: DateTimeNullableFilter<"terminalOwner"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"terminalOwner"> | Date | string | null
  }

  export type terminalOwnerOrderByWithRelationInput = {
    id?: SortOrder
    avatarUuid?: SortOrder
    avatarName?: SortOrder
    parcelName?: SortOrder
    slUrl?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type terminalOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: terminalOwnerWhereInput | terminalOwnerWhereInput[]
    OR?: terminalOwnerWhereInput[]
    NOT?: terminalOwnerWhereInput | terminalOwnerWhereInput[]
    avatarUuid?: StringFilter<"terminalOwner"> | string
    avatarName?: StringFilter<"terminalOwner"> | string
    parcelName?: StringFilter<"terminalOwner"> | string
    slUrl?: StringFilter<"terminalOwner"> | string
    lastActive?: DateTimeFilter<"terminalOwner"> | Date | string
    createdAt?: DateTimeNullableFilter<"terminalOwner"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"terminalOwner"> | Date | string | null
  }, "id">

  export type terminalOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    avatarUuid?: SortOrder
    avatarName?: SortOrder
    parcelName?: SortOrder
    slUrl?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: terminalOwnerCountOrderByAggregateInput
    _avg?: terminalOwnerAvgOrderByAggregateInput
    _max?: terminalOwnerMaxOrderByAggregateInput
    _min?: terminalOwnerMinOrderByAggregateInput
    _sum?: terminalOwnerSumOrderByAggregateInput
  }

  export type terminalOwnerScalarWhereWithAggregatesInput = {
    AND?: terminalOwnerScalarWhereWithAggregatesInput | terminalOwnerScalarWhereWithAggregatesInput[]
    OR?: terminalOwnerScalarWhereWithAggregatesInput[]
    NOT?: terminalOwnerScalarWhereWithAggregatesInput | terminalOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"terminalOwner"> | number
    avatarUuid?: StringWithAggregatesFilter<"terminalOwner"> | string
    avatarName?: StringWithAggregatesFilter<"terminalOwner"> | string
    parcelName?: StringWithAggregatesFilter<"terminalOwner"> | string
    slUrl?: StringWithAggregatesFilter<"terminalOwner"> | string
    lastActive?: DateTimeWithAggregatesFilter<"terminalOwner"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"terminalOwner"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"terminalOwner"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    refreshToken?: StringNullableFilter<"user"> | string | null
    ldollarBalance?: IntNullableFilter<"user"> | number | null
    uuid?: StringNullableFilter<"user"> | string | null
    avatarName?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeNullableFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    bot?: BotListRelationFilter
    groupImList?: GroupImListListRelationFilter
    paymentLog?: PaymentLogListRelationFilter
    sharedBotUserSubscription?: SharedBotUserSubscriptionListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    ldollarBalance?: SortOrderInput | SortOrder
    uuid?: SortOrderInput | SortOrder
    avatarName?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    bot?: botOrderByRelationAggregateInput
    groupImList?: groupImListOrderByRelationAggregateInput
    paymentLog?: paymentLogOrderByRelationAggregateInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    uuid?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    refreshToken?: StringNullableFilter<"user"> | string | null
    ldollarBalance?: IntNullableFilter<"user"> | number | null
    avatarName?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeNullableFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"user"> | Date | string | null
    bot?: BotListRelationFilter
    groupImList?: GroupImListListRelationFilter
    paymentLog?: PaymentLogListRelationFilter
    sharedBotUserSubscription?: SharedBotUserSubscriptionListRelationFilter
  }, "id" | "email" | "uuid">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    ldollarBalance?: SortOrderInput | SortOrder
    uuid?: SortOrderInput | SortOrder
    avatarName?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    ldollarBalance?: IntNullableWithAggregatesFilter<"user"> | number | null
    uuid?: StringNullableWithAggregatesFilter<"user"> | string | null
    avatarName?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type botCreateInput = {
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutBotInput
    subscription?: subscriptionCreateNestedManyWithoutBotInput
  }

  export type botUncheckedCreateInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    userId: number
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subscription?: subscriptionUncheckedCreateNestedManyWithoutBotInput
  }

  export type botUpdateInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutBotNestedInput
    subscription?: subscriptionUpdateManyWithoutBotNestedInput
  }

  export type botUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: subscriptionUncheckedUpdateManyWithoutBotNestedInput
  }

  export type botCreateManyInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    userId: number
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type botUpdateManyMutationInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botLogCreateInput = {
    name: string
    botUuid: string
    message: string
    event: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type botLogUncheckedCreateInput = {
    id?: number
    name: string
    botUuid: string
    message: string
    event: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type botLogUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    botUuid?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    botUuid?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botLogCreateManyInput = {
    id?: number
    name: string
    botUuid: string
    message: string
    event: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type botLogUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    botUuid?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    botUuid?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type couponCreateInput = {
    name: string
    type: string
    duration: number
    uses: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subPackage?: subPackageCreateNestedManyWithoutCouponInput
  }

  export type couponUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    duration: number
    uses: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subPackage?: subPackageUncheckedCreateNestedManyWithoutCouponInput
  }

  export type couponUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subPackage?: subPackageUpdateManyWithoutCouponNestedInput
  }

  export type couponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subPackage?: subPackageUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type couponCreateManyInput = {
    id?: number
    name: string
    type: string
    duration: number
    uses: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type couponUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type couponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discordSettingsCreateInput = {
    botId: number
    webHookUrl?: string | null
    slGroupUuid?: string | null
    discChannelId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type discordSettingsUncheckedCreateInput = {
    id?: number
    botId: number
    webHookUrl?: string | null
    slGroupUuid?: string | null
    discChannelId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type discordSettingsUpdateInput = {
    botId?: IntFieldUpdateOperationsInput | number
    webHookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slGroupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    discChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discordSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    botId?: IntFieldUpdateOperationsInput | number
    webHookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slGroupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    discChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discordSettingsCreateManyInput = {
    id?: number
    botId: number
    webHookUrl?: string | null
    slGroupUuid?: string | null
    discChannelId?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type discordSettingsUpdateManyMutationInput = {
    botId?: IntFieldUpdateOperationsInput | number
    webHookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slGroupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    discChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type discordSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    botId?: IntFieldUpdateOperationsInput | number
    webHookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slGroupUuid?: NullableStringFieldUpdateOperationsInput | string | null
    discChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarCreateInput = {
    uuid: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImList: groupImListCreateNestedOneWithoutGroupImAvatarInput
  }

  export type groupImAvatarUncheckedCreateInput = {
    id?: number
    uuid: string
    groupImListId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImAvatarUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImList?: groupImListUpdateOneRequiredWithoutGroupImAvatarNestedInput
  }

  export type groupImAvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    groupImListId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarCreateManyInput = {
    id?: number
    uuid: string
    groupImListId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImAvatarUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    groupImListId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImListCreateInput = {
    listName: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImAvatar?: groupImAvatarCreateNestedManyWithoutGroupImListInput
    user: userCreateNestedOneWithoutGroupImListInput
  }

  export type groupImListUncheckedCreateInput = {
    id?: number
    listName: string
    userId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImAvatar?: groupImAvatarUncheckedCreateNestedManyWithoutGroupImListInput
  }

  export type groupImListUpdateInput = {
    listName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImAvatar?: groupImAvatarUpdateManyWithoutGroupImListNestedInput
    user?: userUpdateOneRequiredWithoutGroupImListNestedInput
  }

  export type groupImListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImAvatar?: groupImAvatarUncheckedUpdateManyWithoutGroupImListNestedInput
  }

  export type groupImListCreateManyInput = {
    id?: number
    listName: string
    userId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImListUpdateManyMutationInput = {
    listName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subPackageCreateInput = {
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    coupon?: couponCreateNestedOneWithoutSubPackageInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutSubPackageInput
    subscription?: subscriptionCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageUncheckedCreateInput = {
    id?: number
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    couponId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutSubPackageInput
    subscription?: subscriptionUncheckedCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageUpdateInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: couponUpdateOneWithoutSubPackageNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutSubPackageNestedInput
    subscription?: subscriptionUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutSubPackageNestedInput
    subscription?: subscriptionUncheckedUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageCreateManyInput = {
    id?: number
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    couponId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subPackageUpdateManyMutationInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentLogCreateInput = {
    amount: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutPaymentLogInput
  }

  export type paymentLogUncheckedCreateInput = {
    id?: number
    userUuid: string
    amount: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type paymentLogUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutPaymentLogNestedInput
  }

  export type paymentLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userUuid?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentLogCreateManyInput = {
    id?: number
    userUuid: string
    amount: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type paymentLogUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userUuid?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotCreateInput = {
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutSharedBotInput
  }

  export type sharedBotUncheckedCreateInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutSharedBotInput
  }

  export type sharedBotUpdateInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutSharedBotNestedInput
  }

  export type sharedBotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutSharedBotNestedInput
  }

  export type sharedBotCreateManyInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUpdateManyMutationInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionCreateInput = {
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBot: sharedBotCreateNestedOneWithoutSharedBotUserSubscriptionInput
    user: userCreateNestedOneWithoutSharedBotUserSubscriptionInput
    subPackage: subPackageCreateNestedOneWithoutSharedBotUserSubscriptionInput
  }

  export type sharedBotUserSubscriptionUncheckedCreateInput = {
    id?: number
    sharedBotId: number
    userId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    packageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionUpdateInput = {
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBot?: sharedBotUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
    user?: userUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
    subPackage?: subPackageUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
  }

  export type sharedBotUserSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedBotId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionCreateManyInput = {
    id?: number
    sharedBotId: number
    userId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    packageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionUpdateManyMutationInput = {
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedBotId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionCreateInput = {
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subPackage: subPackageCreateNestedOneWithoutSubscriptionInput
    bot: botCreateNestedOneWithoutSubscriptionInput
  }

  export type subscriptionUncheckedCreateInput = {
    id?: number
    packageId: number
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    botId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subscriptionUpdateInput = {
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subPackage?: subPackageUpdateOneRequiredWithoutSubscriptionNestedInput
    bot?: botUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    botId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionCreateManyInput = {
    id?: number
    packageId: number
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    botId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subscriptionUpdateManyMutationInput = {
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    botId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalCreateInput = {
    name: string
    apiKey: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type terminalUncheckedCreateInput = {
    id?: number
    name: string
    apiKey: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type terminalUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalCreateManyInput = {
    id?: number
    name: string
    apiKey: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type terminalUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalOwnerCreateInput = {
    avatarUuid: string
    avatarName: string
    parcelName: string
    slUrl: string
    lastActive: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type terminalOwnerUncheckedCreateInput = {
    id?: number
    avatarUuid: string
    avatarName: string
    parcelName: string
    slUrl: string
    lastActive: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type terminalOwnerUpdateInput = {
    avatarUuid?: StringFieldUpdateOperationsInput | string
    avatarName?: StringFieldUpdateOperationsInput | string
    parcelName?: StringFieldUpdateOperationsInput | string
    slUrl?: StringFieldUpdateOperationsInput | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatarUuid?: StringFieldUpdateOperationsInput | string
    avatarName?: StringFieldUpdateOperationsInput | string
    parcelName?: StringFieldUpdateOperationsInput | string
    slUrl?: StringFieldUpdateOperationsInput | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalOwnerCreateManyInput = {
    id?: number
    avatarUuid: string
    avatarName: string
    parcelName: string
    slUrl: string
    lastActive: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type terminalOwnerUpdateManyMutationInput = {
    avatarUuid?: StringFieldUpdateOperationsInput | string
    avatarName?: StringFieldUpdateOperationsInput | string
    parcelName?: StringFieldUpdateOperationsInput | string
    slUrl?: StringFieldUpdateOperationsInput | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type terminalOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatarUuid?: StringFieldUpdateOperationsInput | string
    avatarName?: StringFieldUpdateOperationsInput | string
    parcelName?: StringFieldUpdateOperationsInput | string
    slUrl?: StringFieldUpdateOperationsInput | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botCreateNestedManyWithoutUserInput
    groupImList?: groupImListCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botUncheckedCreateNestedManyWithoutUserInput
    groupImList?: groupImListUncheckedCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogUncheckedCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUpdateManyWithoutUserNestedInput
    groupImList?: groupImListUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUncheckedUpdateManyWithoutUserNestedInput
    groupImList?: groupImListUncheckedUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUncheckedUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: subscriptionWhereInput
    some?: subscriptionWhereInput
    none?: subscriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type subscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type botCountOrderByAggregateInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    userId?: SortOrder
    running?: SortOrder
    shouldRun?: SortOrder
    loginRegion?: SortOrder
    packageId?: SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    actionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type botAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    actionId?: SortOrder
  }

  export type botMaxOrderByAggregateInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    userId?: SortOrder
    running?: SortOrder
    shouldRun?: SortOrder
    loginRegion?: SortOrder
    packageId?: SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    actionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type botMinOrderByAggregateInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    userId?: SortOrder
    running?: SortOrder
    shouldRun?: SortOrder
    loginRegion?: SortOrder
    packageId?: SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    actionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type botSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
    actionId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type botLogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    botUuid?: SortOrder
    message?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type botLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type botLogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    botUuid?: SortOrder
    message?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type botLogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    botUuid?: SortOrder
    message?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type botLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubPackageListRelationFilter = {
    every?: subPackageWhereInput
    some?: subPackageWhereInput
    none?: subPackageWhereInput
  }

  export type subPackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type couponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type couponAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
  }

  export type couponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type couponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type couponSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    uses?: SortOrder
  }

  export type discordSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    botId?: SortOrder
    webHookUrl?: SortOrder
    slGroupUuid?: SortOrder
    discChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type discordSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    botId?: SortOrder
  }

  export type discordSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    botId?: SortOrder
    webHookUrl?: SortOrder
    slGroupUuid?: SortOrder
    discChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type discordSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    botId?: SortOrder
    webHookUrl?: SortOrder
    slGroupUuid?: SortOrder
    discChannelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type discordSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    botId?: SortOrder
  }

  export type GroupImListRelationFilter = {
    is?: groupImListWhereInput
    isNot?: groupImListWhereInput
  }

  export type groupImAvatarCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    groupImListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupImAvatarAvgOrderByAggregateInput = {
    id?: SortOrder
    groupImListId?: SortOrder
  }

  export type groupImAvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    groupImListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupImAvatarMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    groupImListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupImAvatarSumOrderByAggregateInput = {
    id?: SortOrder
    groupImListId?: SortOrder
  }

  export type GroupImAvatarListRelationFilter = {
    every?: groupImAvatarWhereInput
    some?: groupImAvatarWhereInput
    none?: groupImAvatarWhereInput
  }

  export type groupImAvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupImListCountOrderByAggregateInput = {
    id?: SortOrder
    listName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupImListAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type groupImListMaxOrderByAggregateInput = {
    id?: SortOrder
    listName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupImListMinOrderByAggregateInput = {
    id?: SortOrder
    listName?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupImListSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CouponNullableRelationFilter = {
    is?: couponWhereInput | null
    isNot?: couponWhereInput | null
  }

  export type SharedBotUserSubscriptionListRelationFilter = {
    every?: sharedBotUserSubscriptionWhereInput
    some?: sharedBotUserSubscriptionWhereInput
    none?: sharedBotUserSubscriptionWhereInput
  }

  export type sharedBotUserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subPackageCountOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    packageDescription?: SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrder
  }

  export type subPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    packageDescription?: SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subPackageMinOrderByAggregateInput = {
    id?: SortOrder
    packageName?: SortOrder
    packageDescription?: SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subPackageSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerWeek?: SortOrder
    discount?: SortOrder
    pricePerMonth?: SortOrder
    couponId?: SortOrder
  }

  export type paymentLogCountOrderByAggregateInput = {
    id?: SortOrder
    userUuid?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentLogAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type paymentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userUuid?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentLogMinOrderByAggregateInput = {
    id?: SortOrder
    userUuid?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type paymentLogSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type sharedBotCountOrderByAggregateInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    running?: SortOrder
    loginRegion?: SortOrder
    packageId?: SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sharedBotAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type sharedBotMaxOrderByAggregateInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    running?: SortOrder
    loginRegion?: SortOrder
    packageId?: SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sharedBotMinOrderByAggregateInput = {
    id?: SortOrder
    loginFirstName?: SortOrder
    loginLastName?: SortOrder
    loginPassword?: SortOrder
    loginSpawnLocation?: SortOrder
    running?: SortOrder
    loginRegion?: SortOrder
    packageId?: SortOrder
    uuid?: SortOrder
    imageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sharedBotSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
  }

  export type SharedBotRelationFilter = {
    is?: sharedBotWhereInput
    isNot?: sharedBotWhereInput
  }

  export type SubPackageRelationFilter = {
    is?: subPackageWhereInput
    isNot?: subPackageWhereInput
  }

  export type sharedBotUserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sharedBotUserSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
  }

  export type sharedBotUserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sharedBotUserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    packageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sharedBotUserSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    sharedBotId?: SortOrder
    userId?: SortOrder
    packageId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BotRelationFilter = {
    is?: botWhereInput
    isNot?: botWhereInput
  }

  export type subscriptionPackageIdBotIdCompoundUniqueInput = {
    packageId: number
    botId: number
  }

  export type subscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    botId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    botId?: SortOrder
  }

  export type subscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    botId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    subscriptionStart?: SortOrder
    subscriptionEnd?: SortOrder
    botId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type subscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    botId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type terminalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type terminalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type terminalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type terminalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type terminalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type terminalOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    avatarUuid?: SortOrder
    avatarName?: SortOrder
    parcelName?: SortOrder
    slUrl?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type terminalOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type terminalOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    avatarUuid?: SortOrder
    avatarName?: SortOrder
    parcelName?: SortOrder
    slUrl?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type terminalOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    avatarUuid?: SortOrder
    avatarName?: SortOrder
    parcelName?: SortOrder
    slUrl?: SortOrder
    lastActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type terminalOwnerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BotListRelationFilter = {
    every?: botWhereInput
    some?: botWhereInput
    none?: botWhereInput
  }

  export type GroupImListListRelationFilter = {
    every?: groupImListWhereInput
    some?: groupImListWhereInput
    none?: groupImListWhereInput
  }

  export type PaymentLogListRelationFilter = {
    every?: paymentLogWhereInput
    some?: paymentLogWhereInput
    none?: paymentLogWhereInput
  }

  export type botOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupImListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    ldollarBalance?: SortOrder
    uuid?: SortOrder
    avatarName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    ldollarBalance?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    ldollarBalance?: SortOrder
    uuid?: SortOrder
    avatarName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    ldollarBalance?: SortOrder
    uuid?: SortOrder
    avatarName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    ldollarBalance?: SortOrder
  }

  export type userCreateNestedOneWithoutBotInput = {
    create?: XOR<userCreateWithoutBotInput, userUncheckedCreateWithoutBotInput>
    connectOrCreate?: userCreateOrConnectWithoutBotInput
    connect?: userWhereUniqueInput
  }

  export type subscriptionCreateNestedManyWithoutBotInput = {
    create?: XOR<subscriptionCreateWithoutBotInput, subscriptionUncheckedCreateWithoutBotInput> | subscriptionCreateWithoutBotInput[] | subscriptionUncheckedCreateWithoutBotInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutBotInput | subscriptionCreateOrConnectWithoutBotInput[]
    createMany?: subscriptionCreateManyBotInputEnvelope
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
  }

  export type subscriptionUncheckedCreateNestedManyWithoutBotInput = {
    create?: XOR<subscriptionCreateWithoutBotInput, subscriptionUncheckedCreateWithoutBotInput> | subscriptionCreateWithoutBotInput[] | subscriptionUncheckedCreateWithoutBotInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutBotInput | subscriptionCreateOrConnectWithoutBotInput[]
    createMany?: subscriptionCreateManyBotInputEnvelope
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutBotNestedInput = {
    create?: XOR<userCreateWithoutBotInput, userUncheckedCreateWithoutBotInput>
    connectOrCreate?: userCreateOrConnectWithoutBotInput
    upsert?: userUpsertWithoutBotInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBotInput, userUpdateWithoutBotInput>, userUncheckedUpdateWithoutBotInput>
  }

  export type subscriptionUpdateManyWithoutBotNestedInput = {
    create?: XOR<subscriptionCreateWithoutBotInput, subscriptionUncheckedCreateWithoutBotInput> | subscriptionCreateWithoutBotInput[] | subscriptionUncheckedCreateWithoutBotInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutBotInput | subscriptionCreateOrConnectWithoutBotInput[]
    upsert?: subscriptionUpsertWithWhereUniqueWithoutBotInput | subscriptionUpsertWithWhereUniqueWithoutBotInput[]
    createMany?: subscriptionCreateManyBotInputEnvelope
    set?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    disconnect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    delete?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    update?: subscriptionUpdateWithWhereUniqueWithoutBotInput | subscriptionUpdateWithWhereUniqueWithoutBotInput[]
    updateMany?: subscriptionUpdateManyWithWhereWithoutBotInput | subscriptionUpdateManyWithWhereWithoutBotInput[]
    deleteMany?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type subscriptionUncheckedUpdateManyWithoutBotNestedInput = {
    create?: XOR<subscriptionCreateWithoutBotInput, subscriptionUncheckedCreateWithoutBotInput> | subscriptionCreateWithoutBotInput[] | subscriptionUncheckedCreateWithoutBotInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutBotInput | subscriptionCreateOrConnectWithoutBotInput[]
    upsert?: subscriptionUpsertWithWhereUniqueWithoutBotInput | subscriptionUpsertWithWhereUniqueWithoutBotInput[]
    createMany?: subscriptionCreateManyBotInputEnvelope
    set?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    disconnect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    delete?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    update?: subscriptionUpdateWithWhereUniqueWithoutBotInput | subscriptionUpdateWithWhereUniqueWithoutBotInput[]
    updateMany?: subscriptionUpdateManyWithWhereWithoutBotInput | subscriptionUpdateManyWithWhereWithoutBotInput[]
    deleteMany?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
  }

  export type subPackageCreateNestedManyWithoutCouponInput = {
    create?: XOR<subPackageCreateWithoutCouponInput, subPackageUncheckedCreateWithoutCouponInput> | subPackageCreateWithoutCouponInput[] | subPackageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: subPackageCreateOrConnectWithoutCouponInput | subPackageCreateOrConnectWithoutCouponInput[]
    createMany?: subPackageCreateManyCouponInputEnvelope
    connect?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
  }

  export type subPackageUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<subPackageCreateWithoutCouponInput, subPackageUncheckedCreateWithoutCouponInput> | subPackageCreateWithoutCouponInput[] | subPackageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: subPackageCreateOrConnectWithoutCouponInput | subPackageCreateOrConnectWithoutCouponInput[]
    createMany?: subPackageCreateManyCouponInputEnvelope
    connect?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
  }

  export type subPackageUpdateManyWithoutCouponNestedInput = {
    create?: XOR<subPackageCreateWithoutCouponInput, subPackageUncheckedCreateWithoutCouponInput> | subPackageCreateWithoutCouponInput[] | subPackageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: subPackageCreateOrConnectWithoutCouponInput | subPackageCreateOrConnectWithoutCouponInput[]
    upsert?: subPackageUpsertWithWhereUniqueWithoutCouponInput | subPackageUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: subPackageCreateManyCouponInputEnvelope
    set?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    disconnect?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    delete?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    connect?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    update?: subPackageUpdateWithWhereUniqueWithoutCouponInput | subPackageUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: subPackageUpdateManyWithWhereWithoutCouponInput | subPackageUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: subPackageScalarWhereInput | subPackageScalarWhereInput[]
  }

  export type subPackageUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<subPackageCreateWithoutCouponInput, subPackageUncheckedCreateWithoutCouponInput> | subPackageCreateWithoutCouponInput[] | subPackageUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: subPackageCreateOrConnectWithoutCouponInput | subPackageCreateOrConnectWithoutCouponInput[]
    upsert?: subPackageUpsertWithWhereUniqueWithoutCouponInput | subPackageUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: subPackageCreateManyCouponInputEnvelope
    set?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    disconnect?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    delete?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    connect?: subPackageWhereUniqueInput | subPackageWhereUniqueInput[]
    update?: subPackageUpdateWithWhereUniqueWithoutCouponInput | subPackageUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: subPackageUpdateManyWithWhereWithoutCouponInput | subPackageUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: subPackageScalarWhereInput | subPackageScalarWhereInput[]
  }

  export type groupImListCreateNestedOneWithoutGroupImAvatarInput = {
    create?: XOR<groupImListCreateWithoutGroupImAvatarInput, groupImListUncheckedCreateWithoutGroupImAvatarInput>
    connectOrCreate?: groupImListCreateOrConnectWithoutGroupImAvatarInput
    connect?: groupImListWhereUniqueInput
  }

  export type groupImListUpdateOneRequiredWithoutGroupImAvatarNestedInput = {
    create?: XOR<groupImListCreateWithoutGroupImAvatarInput, groupImListUncheckedCreateWithoutGroupImAvatarInput>
    connectOrCreate?: groupImListCreateOrConnectWithoutGroupImAvatarInput
    upsert?: groupImListUpsertWithoutGroupImAvatarInput
    connect?: groupImListWhereUniqueInput
    update?: XOR<XOR<groupImListUpdateToOneWithWhereWithoutGroupImAvatarInput, groupImListUpdateWithoutGroupImAvatarInput>, groupImListUncheckedUpdateWithoutGroupImAvatarInput>
  }

  export type groupImAvatarCreateNestedManyWithoutGroupImListInput = {
    create?: XOR<groupImAvatarCreateWithoutGroupImListInput, groupImAvatarUncheckedCreateWithoutGroupImListInput> | groupImAvatarCreateWithoutGroupImListInput[] | groupImAvatarUncheckedCreateWithoutGroupImListInput[]
    connectOrCreate?: groupImAvatarCreateOrConnectWithoutGroupImListInput | groupImAvatarCreateOrConnectWithoutGroupImListInput[]
    createMany?: groupImAvatarCreateManyGroupImListInputEnvelope
    connect?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutGroupImListInput = {
    create?: XOR<userCreateWithoutGroupImListInput, userUncheckedCreateWithoutGroupImListInput>
    connectOrCreate?: userCreateOrConnectWithoutGroupImListInput
    connect?: userWhereUniqueInput
  }

  export type groupImAvatarUncheckedCreateNestedManyWithoutGroupImListInput = {
    create?: XOR<groupImAvatarCreateWithoutGroupImListInput, groupImAvatarUncheckedCreateWithoutGroupImListInput> | groupImAvatarCreateWithoutGroupImListInput[] | groupImAvatarUncheckedCreateWithoutGroupImListInput[]
    connectOrCreate?: groupImAvatarCreateOrConnectWithoutGroupImListInput | groupImAvatarCreateOrConnectWithoutGroupImListInput[]
    createMany?: groupImAvatarCreateManyGroupImListInputEnvelope
    connect?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
  }

  export type groupImAvatarUpdateManyWithoutGroupImListNestedInput = {
    create?: XOR<groupImAvatarCreateWithoutGroupImListInput, groupImAvatarUncheckedCreateWithoutGroupImListInput> | groupImAvatarCreateWithoutGroupImListInput[] | groupImAvatarUncheckedCreateWithoutGroupImListInput[]
    connectOrCreate?: groupImAvatarCreateOrConnectWithoutGroupImListInput | groupImAvatarCreateOrConnectWithoutGroupImListInput[]
    upsert?: groupImAvatarUpsertWithWhereUniqueWithoutGroupImListInput | groupImAvatarUpsertWithWhereUniqueWithoutGroupImListInput[]
    createMany?: groupImAvatarCreateManyGroupImListInputEnvelope
    set?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    disconnect?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    delete?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    connect?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    update?: groupImAvatarUpdateWithWhereUniqueWithoutGroupImListInput | groupImAvatarUpdateWithWhereUniqueWithoutGroupImListInput[]
    updateMany?: groupImAvatarUpdateManyWithWhereWithoutGroupImListInput | groupImAvatarUpdateManyWithWhereWithoutGroupImListInput[]
    deleteMany?: groupImAvatarScalarWhereInput | groupImAvatarScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutGroupImListNestedInput = {
    create?: XOR<userCreateWithoutGroupImListInput, userUncheckedCreateWithoutGroupImListInput>
    connectOrCreate?: userCreateOrConnectWithoutGroupImListInput
    upsert?: userUpsertWithoutGroupImListInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutGroupImListInput, userUpdateWithoutGroupImListInput>, userUncheckedUpdateWithoutGroupImListInput>
  }

  export type groupImAvatarUncheckedUpdateManyWithoutGroupImListNestedInput = {
    create?: XOR<groupImAvatarCreateWithoutGroupImListInput, groupImAvatarUncheckedCreateWithoutGroupImListInput> | groupImAvatarCreateWithoutGroupImListInput[] | groupImAvatarUncheckedCreateWithoutGroupImListInput[]
    connectOrCreate?: groupImAvatarCreateOrConnectWithoutGroupImListInput | groupImAvatarCreateOrConnectWithoutGroupImListInput[]
    upsert?: groupImAvatarUpsertWithWhereUniqueWithoutGroupImListInput | groupImAvatarUpsertWithWhereUniqueWithoutGroupImListInput[]
    createMany?: groupImAvatarCreateManyGroupImListInputEnvelope
    set?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    disconnect?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    delete?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    connect?: groupImAvatarWhereUniqueInput | groupImAvatarWhereUniqueInput[]
    update?: groupImAvatarUpdateWithWhereUniqueWithoutGroupImListInput | groupImAvatarUpdateWithWhereUniqueWithoutGroupImListInput[]
    updateMany?: groupImAvatarUpdateManyWithWhereWithoutGroupImListInput | groupImAvatarUpdateManyWithWhereWithoutGroupImListInput[]
    deleteMany?: groupImAvatarScalarWhereInput | groupImAvatarScalarWhereInput[]
  }

  export type couponCreateNestedOneWithoutSubPackageInput = {
    create?: XOR<couponCreateWithoutSubPackageInput, couponUncheckedCreateWithoutSubPackageInput>
    connectOrCreate?: couponCreateOrConnectWithoutSubPackageInput
    connect?: couponWhereUniqueInput
  }

  export type sharedBotUserSubscriptionCreateNestedManyWithoutSubPackageInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput> | sharedBotUserSubscriptionCreateWithoutSubPackageInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput | sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput[]
    createMany?: sharedBotUserSubscriptionCreateManySubPackageInputEnvelope
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
  }

  export type subscriptionCreateNestedManyWithoutSubPackageInput = {
    create?: XOR<subscriptionCreateWithoutSubPackageInput, subscriptionUncheckedCreateWithoutSubPackageInput> | subscriptionCreateWithoutSubPackageInput[] | subscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutSubPackageInput | subscriptionCreateOrConnectWithoutSubPackageInput[]
    createMany?: subscriptionCreateManySubPackageInputEnvelope
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
  }

  export type sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutSubPackageInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput> | sharedBotUserSubscriptionCreateWithoutSubPackageInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput | sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput[]
    createMany?: sharedBotUserSubscriptionCreateManySubPackageInputEnvelope
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
  }

  export type subscriptionUncheckedCreateNestedManyWithoutSubPackageInput = {
    create?: XOR<subscriptionCreateWithoutSubPackageInput, subscriptionUncheckedCreateWithoutSubPackageInput> | subscriptionCreateWithoutSubPackageInput[] | subscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutSubPackageInput | subscriptionCreateOrConnectWithoutSubPackageInput[]
    createMany?: subscriptionCreateManySubPackageInputEnvelope
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
  }

  export type couponUpdateOneWithoutSubPackageNestedInput = {
    create?: XOR<couponCreateWithoutSubPackageInput, couponUncheckedCreateWithoutSubPackageInput>
    connectOrCreate?: couponCreateOrConnectWithoutSubPackageInput
    upsert?: couponUpsertWithoutSubPackageInput
    disconnect?: couponWhereInput | boolean
    delete?: couponWhereInput | boolean
    connect?: couponWhereUniqueInput
    update?: XOR<XOR<couponUpdateToOneWithWhereWithoutSubPackageInput, couponUpdateWithoutSubPackageInput>, couponUncheckedUpdateWithoutSubPackageInput>
  }

  export type sharedBotUserSubscriptionUpdateManyWithoutSubPackageNestedInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput> | sharedBotUserSubscriptionCreateWithoutSubPackageInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput | sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput[]
    upsert?: sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSubPackageInput | sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSubPackageInput[]
    createMany?: sharedBotUserSubscriptionCreateManySubPackageInputEnvelope
    set?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    disconnect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    delete?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    update?: sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSubPackageInput | sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSubPackageInput[]
    updateMany?: sharedBotUserSubscriptionUpdateManyWithWhereWithoutSubPackageInput | sharedBotUserSubscriptionUpdateManyWithWhereWithoutSubPackageInput[]
    deleteMany?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
  }

  export type subscriptionUpdateManyWithoutSubPackageNestedInput = {
    create?: XOR<subscriptionCreateWithoutSubPackageInput, subscriptionUncheckedCreateWithoutSubPackageInput> | subscriptionCreateWithoutSubPackageInput[] | subscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutSubPackageInput | subscriptionCreateOrConnectWithoutSubPackageInput[]
    upsert?: subscriptionUpsertWithWhereUniqueWithoutSubPackageInput | subscriptionUpsertWithWhereUniqueWithoutSubPackageInput[]
    createMany?: subscriptionCreateManySubPackageInputEnvelope
    set?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    disconnect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    delete?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    update?: subscriptionUpdateWithWhereUniqueWithoutSubPackageInput | subscriptionUpdateWithWhereUniqueWithoutSubPackageInput[]
    updateMany?: subscriptionUpdateManyWithWhereWithoutSubPackageInput | subscriptionUpdateManyWithWhereWithoutSubPackageInput[]
    deleteMany?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyWithoutSubPackageNestedInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput> | sharedBotUserSubscriptionCreateWithoutSubPackageInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput | sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput[]
    upsert?: sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSubPackageInput | sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSubPackageInput[]
    createMany?: sharedBotUserSubscriptionCreateManySubPackageInputEnvelope
    set?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    disconnect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    delete?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    update?: sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSubPackageInput | sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSubPackageInput[]
    updateMany?: sharedBotUserSubscriptionUpdateManyWithWhereWithoutSubPackageInput | sharedBotUserSubscriptionUpdateManyWithWhereWithoutSubPackageInput[]
    deleteMany?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
  }

  export type subscriptionUncheckedUpdateManyWithoutSubPackageNestedInput = {
    create?: XOR<subscriptionCreateWithoutSubPackageInput, subscriptionUncheckedCreateWithoutSubPackageInput> | subscriptionCreateWithoutSubPackageInput[] | subscriptionUncheckedCreateWithoutSubPackageInput[]
    connectOrCreate?: subscriptionCreateOrConnectWithoutSubPackageInput | subscriptionCreateOrConnectWithoutSubPackageInput[]
    upsert?: subscriptionUpsertWithWhereUniqueWithoutSubPackageInput | subscriptionUpsertWithWhereUniqueWithoutSubPackageInput[]
    createMany?: subscriptionCreateManySubPackageInputEnvelope
    set?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    disconnect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    delete?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    connect?: subscriptionWhereUniqueInput | subscriptionWhereUniqueInput[]
    update?: subscriptionUpdateWithWhereUniqueWithoutSubPackageInput | subscriptionUpdateWithWhereUniqueWithoutSubPackageInput[]
    updateMany?: subscriptionUpdateManyWithWhereWithoutSubPackageInput | subscriptionUpdateManyWithWhereWithoutSubPackageInput[]
    deleteMany?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutPaymentLogInput = {
    create?: XOR<userCreateWithoutPaymentLogInput, userUncheckedCreateWithoutPaymentLogInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentLogInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutPaymentLogNestedInput = {
    create?: XOR<userCreateWithoutPaymentLogInput, userUncheckedCreateWithoutPaymentLogInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentLogInput
    upsert?: userUpsertWithoutPaymentLogInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPaymentLogInput, userUpdateWithoutPaymentLogInput>, userUncheckedUpdateWithoutPaymentLogInput>
  }

  export type sharedBotUserSubscriptionCreateNestedManyWithoutSharedBotInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput> | sharedBotUserSubscriptionCreateWithoutSharedBotInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput | sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput[]
    createMany?: sharedBotUserSubscriptionCreateManySharedBotInputEnvelope
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
  }

  export type sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutSharedBotInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput> | sharedBotUserSubscriptionCreateWithoutSharedBotInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput | sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput[]
    createMany?: sharedBotUserSubscriptionCreateManySharedBotInputEnvelope
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
  }

  export type sharedBotUserSubscriptionUpdateManyWithoutSharedBotNestedInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput> | sharedBotUserSubscriptionCreateWithoutSharedBotInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput | sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput[]
    upsert?: sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSharedBotInput | sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSharedBotInput[]
    createMany?: sharedBotUserSubscriptionCreateManySharedBotInputEnvelope
    set?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    disconnect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    delete?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    update?: sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSharedBotInput | sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSharedBotInput[]
    updateMany?: sharedBotUserSubscriptionUpdateManyWithWhereWithoutSharedBotInput | sharedBotUserSubscriptionUpdateManyWithWhereWithoutSharedBotInput[]
    deleteMany?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyWithoutSharedBotNestedInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput> | sharedBotUserSubscriptionCreateWithoutSharedBotInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput | sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput[]
    upsert?: sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSharedBotInput | sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSharedBotInput[]
    createMany?: sharedBotUserSubscriptionCreateManySharedBotInputEnvelope
    set?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    disconnect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    delete?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    update?: sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSharedBotInput | sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSharedBotInput[]
    updateMany?: sharedBotUserSubscriptionUpdateManyWithWhereWithoutSharedBotInput | sharedBotUserSubscriptionUpdateManyWithWhereWithoutSharedBotInput[]
    deleteMany?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
  }

  export type sharedBotCreateNestedOneWithoutSharedBotUserSubscriptionInput = {
    create?: XOR<sharedBotCreateWithoutSharedBotUserSubscriptionInput, sharedBotUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    connectOrCreate?: sharedBotCreateOrConnectWithoutSharedBotUserSubscriptionInput
    connect?: sharedBotWhereUniqueInput
  }

  export type userCreateNestedOneWithoutSharedBotUserSubscriptionInput = {
    create?: XOR<userCreateWithoutSharedBotUserSubscriptionInput, userUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    connectOrCreate?: userCreateOrConnectWithoutSharedBotUserSubscriptionInput
    connect?: userWhereUniqueInput
  }

  export type subPackageCreateNestedOneWithoutSharedBotUserSubscriptionInput = {
    create?: XOR<subPackageCreateWithoutSharedBotUserSubscriptionInput, subPackageUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    connectOrCreate?: subPackageCreateOrConnectWithoutSharedBotUserSubscriptionInput
    connect?: subPackageWhereUniqueInput
  }

  export type sharedBotUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput = {
    create?: XOR<sharedBotCreateWithoutSharedBotUserSubscriptionInput, sharedBotUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    connectOrCreate?: sharedBotCreateOrConnectWithoutSharedBotUserSubscriptionInput
    upsert?: sharedBotUpsertWithoutSharedBotUserSubscriptionInput
    connect?: sharedBotWhereUniqueInput
    update?: XOR<XOR<sharedBotUpdateToOneWithWhereWithoutSharedBotUserSubscriptionInput, sharedBotUpdateWithoutSharedBotUserSubscriptionInput>, sharedBotUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
  }

  export type userUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput = {
    create?: XOR<userCreateWithoutSharedBotUserSubscriptionInput, userUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    connectOrCreate?: userCreateOrConnectWithoutSharedBotUserSubscriptionInput
    upsert?: userUpsertWithoutSharedBotUserSubscriptionInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSharedBotUserSubscriptionInput, userUpdateWithoutSharedBotUserSubscriptionInput>, userUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
  }

  export type subPackageUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput = {
    create?: XOR<subPackageCreateWithoutSharedBotUserSubscriptionInput, subPackageUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    connectOrCreate?: subPackageCreateOrConnectWithoutSharedBotUserSubscriptionInput
    upsert?: subPackageUpsertWithoutSharedBotUserSubscriptionInput
    connect?: subPackageWhereUniqueInput
    update?: XOR<XOR<subPackageUpdateToOneWithWhereWithoutSharedBotUserSubscriptionInput, subPackageUpdateWithoutSharedBotUserSubscriptionInput>, subPackageUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
  }

  export type subPackageCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<subPackageCreateWithoutSubscriptionInput, subPackageUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: subPackageCreateOrConnectWithoutSubscriptionInput
    connect?: subPackageWhereUniqueInput
  }

  export type botCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<botCreateWithoutSubscriptionInput, botUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: botCreateOrConnectWithoutSubscriptionInput
    connect?: botWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type subPackageUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<subPackageCreateWithoutSubscriptionInput, subPackageUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: subPackageCreateOrConnectWithoutSubscriptionInput
    upsert?: subPackageUpsertWithoutSubscriptionInput
    connect?: subPackageWhereUniqueInput
    update?: XOR<XOR<subPackageUpdateToOneWithWhereWithoutSubscriptionInput, subPackageUpdateWithoutSubscriptionInput>, subPackageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type botUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<botCreateWithoutSubscriptionInput, botUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: botCreateOrConnectWithoutSubscriptionInput
    upsert?: botUpsertWithoutSubscriptionInput
    connect?: botWhereUniqueInput
    update?: XOR<XOR<botUpdateToOneWithWhereWithoutSubscriptionInput, botUpdateWithoutSubscriptionInput>, botUncheckedUpdateWithoutSubscriptionInput>
  }

  export type botCreateNestedManyWithoutUserInput = {
    create?: XOR<botCreateWithoutUserInput, botUncheckedCreateWithoutUserInput> | botCreateWithoutUserInput[] | botUncheckedCreateWithoutUserInput[]
    connectOrCreate?: botCreateOrConnectWithoutUserInput | botCreateOrConnectWithoutUserInput[]
    createMany?: botCreateManyUserInputEnvelope
    connect?: botWhereUniqueInput | botWhereUniqueInput[]
  }

  export type groupImListCreateNestedManyWithoutUserInput = {
    create?: XOR<groupImListCreateWithoutUserInput, groupImListUncheckedCreateWithoutUserInput> | groupImListCreateWithoutUserInput[] | groupImListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: groupImListCreateOrConnectWithoutUserInput | groupImListCreateOrConnectWithoutUserInput[]
    createMany?: groupImListCreateManyUserInputEnvelope
    connect?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
  }

  export type paymentLogCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentLogCreateWithoutUserInput, paymentLogUncheckedCreateWithoutUserInput> | paymentLogCreateWithoutUserInput[] | paymentLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentLogCreateOrConnectWithoutUserInput | paymentLogCreateOrConnectWithoutUserInput[]
    createMany?: paymentLogCreateManyUserInputEnvelope
    connect?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
  }

  export type sharedBotUserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutUserInput, sharedBotUserSubscriptionUncheckedCreateWithoutUserInput> | sharedBotUserSubscriptionCreateWithoutUserInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutUserInput | sharedBotUserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: sharedBotUserSubscriptionCreateManyUserInputEnvelope
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
  }

  export type botUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<botCreateWithoutUserInput, botUncheckedCreateWithoutUserInput> | botCreateWithoutUserInput[] | botUncheckedCreateWithoutUserInput[]
    connectOrCreate?: botCreateOrConnectWithoutUserInput | botCreateOrConnectWithoutUserInput[]
    createMany?: botCreateManyUserInputEnvelope
    connect?: botWhereUniqueInput | botWhereUniqueInput[]
  }

  export type groupImListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<groupImListCreateWithoutUserInput, groupImListUncheckedCreateWithoutUserInput> | groupImListCreateWithoutUserInput[] | groupImListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: groupImListCreateOrConnectWithoutUserInput | groupImListCreateOrConnectWithoutUserInput[]
    createMany?: groupImListCreateManyUserInputEnvelope
    connect?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
  }

  export type paymentLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentLogCreateWithoutUserInput, paymentLogUncheckedCreateWithoutUserInput> | paymentLogCreateWithoutUserInput[] | paymentLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentLogCreateOrConnectWithoutUserInput | paymentLogCreateOrConnectWithoutUserInput[]
    createMany?: paymentLogCreateManyUserInputEnvelope
    connect?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
  }

  export type sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutUserInput, sharedBotUserSubscriptionUncheckedCreateWithoutUserInput> | sharedBotUserSubscriptionCreateWithoutUserInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutUserInput | sharedBotUserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: sharedBotUserSubscriptionCreateManyUserInputEnvelope
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
  }

  export type botUpdateManyWithoutUserNestedInput = {
    create?: XOR<botCreateWithoutUserInput, botUncheckedCreateWithoutUserInput> | botCreateWithoutUserInput[] | botUncheckedCreateWithoutUserInput[]
    connectOrCreate?: botCreateOrConnectWithoutUserInput | botCreateOrConnectWithoutUserInput[]
    upsert?: botUpsertWithWhereUniqueWithoutUserInput | botUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: botCreateManyUserInputEnvelope
    set?: botWhereUniqueInput | botWhereUniqueInput[]
    disconnect?: botWhereUniqueInput | botWhereUniqueInput[]
    delete?: botWhereUniqueInput | botWhereUniqueInput[]
    connect?: botWhereUniqueInput | botWhereUniqueInput[]
    update?: botUpdateWithWhereUniqueWithoutUserInput | botUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: botUpdateManyWithWhereWithoutUserInput | botUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: botScalarWhereInput | botScalarWhereInput[]
  }

  export type groupImListUpdateManyWithoutUserNestedInput = {
    create?: XOR<groupImListCreateWithoutUserInput, groupImListUncheckedCreateWithoutUserInput> | groupImListCreateWithoutUserInput[] | groupImListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: groupImListCreateOrConnectWithoutUserInput | groupImListCreateOrConnectWithoutUserInput[]
    upsert?: groupImListUpsertWithWhereUniqueWithoutUserInput | groupImListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: groupImListCreateManyUserInputEnvelope
    set?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    disconnect?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    delete?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    connect?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    update?: groupImListUpdateWithWhereUniqueWithoutUserInput | groupImListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: groupImListUpdateManyWithWhereWithoutUserInput | groupImListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: groupImListScalarWhereInput | groupImListScalarWhereInput[]
  }

  export type paymentLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentLogCreateWithoutUserInput, paymentLogUncheckedCreateWithoutUserInput> | paymentLogCreateWithoutUserInput[] | paymentLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentLogCreateOrConnectWithoutUserInput | paymentLogCreateOrConnectWithoutUserInput[]
    upsert?: paymentLogUpsertWithWhereUniqueWithoutUserInput | paymentLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentLogCreateManyUserInputEnvelope
    set?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    disconnect?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    delete?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    connect?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    update?: paymentLogUpdateWithWhereUniqueWithoutUserInput | paymentLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentLogUpdateManyWithWhereWithoutUserInput | paymentLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentLogScalarWhereInput | paymentLogScalarWhereInput[]
  }

  export type sharedBotUserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutUserInput, sharedBotUserSubscriptionUncheckedCreateWithoutUserInput> | sharedBotUserSubscriptionCreateWithoutUserInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutUserInput | sharedBotUserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutUserInput | sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sharedBotUserSubscriptionCreateManyUserInputEnvelope
    set?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    disconnect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    delete?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    update?: sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutUserInput | sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sharedBotUserSubscriptionUpdateManyWithWhereWithoutUserInput | sharedBotUserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
  }

  export type botUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<botCreateWithoutUserInput, botUncheckedCreateWithoutUserInput> | botCreateWithoutUserInput[] | botUncheckedCreateWithoutUserInput[]
    connectOrCreate?: botCreateOrConnectWithoutUserInput | botCreateOrConnectWithoutUserInput[]
    upsert?: botUpsertWithWhereUniqueWithoutUserInput | botUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: botCreateManyUserInputEnvelope
    set?: botWhereUniqueInput | botWhereUniqueInput[]
    disconnect?: botWhereUniqueInput | botWhereUniqueInput[]
    delete?: botWhereUniqueInput | botWhereUniqueInput[]
    connect?: botWhereUniqueInput | botWhereUniqueInput[]
    update?: botUpdateWithWhereUniqueWithoutUserInput | botUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: botUpdateManyWithWhereWithoutUserInput | botUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: botScalarWhereInput | botScalarWhereInput[]
  }

  export type groupImListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<groupImListCreateWithoutUserInput, groupImListUncheckedCreateWithoutUserInput> | groupImListCreateWithoutUserInput[] | groupImListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: groupImListCreateOrConnectWithoutUserInput | groupImListCreateOrConnectWithoutUserInput[]
    upsert?: groupImListUpsertWithWhereUniqueWithoutUserInput | groupImListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: groupImListCreateManyUserInputEnvelope
    set?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    disconnect?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    delete?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    connect?: groupImListWhereUniqueInput | groupImListWhereUniqueInput[]
    update?: groupImListUpdateWithWhereUniqueWithoutUserInput | groupImListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: groupImListUpdateManyWithWhereWithoutUserInput | groupImListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: groupImListScalarWhereInput | groupImListScalarWhereInput[]
  }

  export type paymentLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentLogCreateWithoutUserInput, paymentLogUncheckedCreateWithoutUserInput> | paymentLogCreateWithoutUserInput[] | paymentLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentLogCreateOrConnectWithoutUserInput | paymentLogCreateOrConnectWithoutUserInput[]
    upsert?: paymentLogUpsertWithWhereUniqueWithoutUserInput | paymentLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentLogCreateManyUserInputEnvelope
    set?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    disconnect?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    delete?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    connect?: paymentLogWhereUniqueInput | paymentLogWhereUniqueInput[]
    update?: paymentLogUpdateWithWhereUniqueWithoutUserInput | paymentLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentLogUpdateManyWithWhereWithoutUserInput | paymentLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentLogScalarWhereInput | paymentLogScalarWhereInput[]
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sharedBotUserSubscriptionCreateWithoutUserInput, sharedBotUserSubscriptionUncheckedCreateWithoutUserInput> | sharedBotUserSubscriptionCreateWithoutUserInput[] | sharedBotUserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sharedBotUserSubscriptionCreateOrConnectWithoutUserInput | sharedBotUserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutUserInput | sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sharedBotUserSubscriptionCreateManyUserInputEnvelope
    set?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    disconnect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    delete?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    connect?: sharedBotUserSubscriptionWhereUniqueInput | sharedBotUserSubscriptionWhereUniqueInput[]
    update?: sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutUserInput | sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sharedBotUserSubscriptionUpdateManyWithWhereWithoutUserInput | sharedBotUserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type userCreateWithoutBotInput = {
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImList?: groupImListCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutBotInput = {
    id?: number
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImList?: groupImListUncheckedCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogUncheckedCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutBotInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBotInput, userUncheckedCreateWithoutBotInput>
  }

  export type subscriptionCreateWithoutBotInput = {
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subPackage: subPackageCreateNestedOneWithoutSubscriptionInput
  }

  export type subscriptionUncheckedCreateWithoutBotInput = {
    id?: number
    packageId: number
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subscriptionCreateOrConnectWithoutBotInput = {
    where: subscriptionWhereUniqueInput
    create: XOR<subscriptionCreateWithoutBotInput, subscriptionUncheckedCreateWithoutBotInput>
  }

  export type subscriptionCreateManyBotInputEnvelope = {
    data: subscriptionCreateManyBotInput | subscriptionCreateManyBotInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutBotInput = {
    update: XOR<userUpdateWithoutBotInput, userUncheckedUpdateWithoutBotInput>
    create: XOR<userCreateWithoutBotInput, userUncheckedCreateWithoutBotInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBotInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBotInput, userUncheckedUpdateWithoutBotInput>
  }

  export type userUpdateWithoutBotInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImList?: groupImListUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutBotInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImList?: groupImListUncheckedUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUncheckedUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type subscriptionUpsertWithWhereUniqueWithoutBotInput = {
    where: subscriptionWhereUniqueInput
    update: XOR<subscriptionUpdateWithoutBotInput, subscriptionUncheckedUpdateWithoutBotInput>
    create: XOR<subscriptionCreateWithoutBotInput, subscriptionUncheckedCreateWithoutBotInput>
  }

  export type subscriptionUpdateWithWhereUniqueWithoutBotInput = {
    where: subscriptionWhereUniqueInput
    data: XOR<subscriptionUpdateWithoutBotInput, subscriptionUncheckedUpdateWithoutBotInput>
  }

  export type subscriptionUpdateManyWithWhereWithoutBotInput = {
    where: subscriptionScalarWhereInput
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyWithoutBotInput>
  }

  export type subscriptionScalarWhereInput = {
    AND?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
    OR?: subscriptionScalarWhereInput[]
    NOT?: subscriptionScalarWhereInput | subscriptionScalarWhereInput[]
    id?: IntFilter<"subscription"> | number
    packageId?: IntFilter<"subscription"> | number
    subscriptionStart?: DateTimeFilter<"subscription"> | Date | string
    subscriptionEnd?: DateTimeFilter<"subscription"> | Date | string
    botId?: IntFilter<"subscription"> | number
    createdAt?: DateTimeNullableFilter<"subscription"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subscription"> | Date | string | null
  }

  export type subPackageCreateWithoutCouponInput = {
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutSubPackageInput
    subscription?: subscriptionCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageUncheckedCreateWithoutCouponInput = {
    id?: number
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutSubPackageInput
    subscription?: subscriptionUncheckedCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageCreateOrConnectWithoutCouponInput = {
    where: subPackageWhereUniqueInput
    create: XOR<subPackageCreateWithoutCouponInput, subPackageUncheckedCreateWithoutCouponInput>
  }

  export type subPackageCreateManyCouponInputEnvelope = {
    data: subPackageCreateManyCouponInput | subPackageCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type subPackageUpsertWithWhereUniqueWithoutCouponInput = {
    where: subPackageWhereUniqueInput
    update: XOR<subPackageUpdateWithoutCouponInput, subPackageUncheckedUpdateWithoutCouponInput>
    create: XOR<subPackageCreateWithoutCouponInput, subPackageUncheckedCreateWithoutCouponInput>
  }

  export type subPackageUpdateWithWhereUniqueWithoutCouponInput = {
    where: subPackageWhereUniqueInput
    data: XOR<subPackageUpdateWithoutCouponInput, subPackageUncheckedUpdateWithoutCouponInput>
  }

  export type subPackageUpdateManyWithWhereWithoutCouponInput = {
    where: subPackageScalarWhereInput
    data: XOR<subPackageUpdateManyMutationInput, subPackageUncheckedUpdateManyWithoutCouponInput>
  }

  export type subPackageScalarWhereInput = {
    AND?: subPackageScalarWhereInput | subPackageScalarWhereInput[]
    OR?: subPackageScalarWhereInput[]
    NOT?: subPackageScalarWhereInput | subPackageScalarWhereInput[]
    id?: IntFilter<"subPackage"> | number
    packageName?: StringFilter<"subPackage"> | string
    packageDescription?: StringNullableFilter<"subPackage"> | string | null
    pricePerWeek?: IntFilter<"subPackage"> | number
    discount?: IntFilter<"subPackage"> | number
    pricePerMonth?: IntFilter<"subPackage"> | number
    couponId?: IntNullableFilter<"subPackage"> | number | null
    createdAt?: DateTimeNullableFilter<"subPackage"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"subPackage"> | Date | string | null
  }

  export type groupImListCreateWithoutGroupImAvatarInput = {
    listName: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutGroupImListInput
  }

  export type groupImListUncheckedCreateWithoutGroupImAvatarInput = {
    id?: number
    listName: string
    userId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImListCreateOrConnectWithoutGroupImAvatarInput = {
    where: groupImListWhereUniqueInput
    create: XOR<groupImListCreateWithoutGroupImAvatarInput, groupImListUncheckedCreateWithoutGroupImAvatarInput>
  }

  export type groupImListUpsertWithoutGroupImAvatarInput = {
    update: XOR<groupImListUpdateWithoutGroupImAvatarInput, groupImListUncheckedUpdateWithoutGroupImAvatarInput>
    create: XOR<groupImListCreateWithoutGroupImAvatarInput, groupImListUncheckedCreateWithoutGroupImAvatarInput>
    where?: groupImListWhereInput
  }

  export type groupImListUpdateToOneWithWhereWithoutGroupImAvatarInput = {
    where?: groupImListWhereInput
    data: XOR<groupImListUpdateWithoutGroupImAvatarInput, groupImListUncheckedUpdateWithoutGroupImAvatarInput>
  }

  export type groupImListUpdateWithoutGroupImAvatarInput = {
    listName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutGroupImListNestedInput
  }

  export type groupImListUncheckedUpdateWithoutGroupImAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    listName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarCreateWithoutGroupImListInput = {
    uuid: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImAvatarUncheckedCreateWithoutGroupImListInput = {
    id?: number
    uuid: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImAvatarCreateOrConnectWithoutGroupImListInput = {
    where: groupImAvatarWhereUniqueInput
    create: XOR<groupImAvatarCreateWithoutGroupImListInput, groupImAvatarUncheckedCreateWithoutGroupImListInput>
  }

  export type groupImAvatarCreateManyGroupImListInputEnvelope = {
    data: groupImAvatarCreateManyGroupImListInput | groupImAvatarCreateManyGroupImListInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutGroupImListInput = {
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutGroupImListInput = {
    id?: number
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botUncheckedCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogUncheckedCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutGroupImListInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutGroupImListInput, userUncheckedCreateWithoutGroupImListInput>
  }

  export type groupImAvatarUpsertWithWhereUniqueWithoutGroupImListInput = {
    where: groupImAvatarWhereUniqueInput
    update: XOR<groupImAvatarUpdateWithoutGroupImListInput, groupImAvatarUncheckedUpdateWithoutGroupImListInput>
    create: XOR<groupImAvatarCreateWithoutGroupImListInput, groupImAvatarUncheckedCreateWithoutGroupImListInput>
  }

  export type groupImAvatarUpdateWithWhereUniqueWithoutGroupImListInput = {
    where: groupImAvatarWhereUniqueInput
    data: XOR<groupImAvatarUpdateWithoutGroupImListInput, groupImAvatarUncheckedUpdateWithoutGroupImListInput>
  }

  export type groupImAvatarUpdateManyWithWhereWithoutGroupImListInput = {
    where: groupImAvatarScalarWhereInput
    data: XOR<groupImAvatarUpdateManyMutationInput, groupImAvatarUncheckedUpdateManyWithoutGroupImListInput>
  }

  export type groupImAvatarScalarWhereInput = {
    AND?: groupImAvatarScalarWhereInput | groupImAvatarScalarWhereInput[]
    OR?: groupImAvatarScalarWhereInput[]
    NOT?: groupImAvatarScalarWhereInput | groupImAvatarScalarWhereInput[]
    id?: IntFilter<"groupImAvatar"> | number
    uuid?: StringFilter<"groupImAvatar"> | string
    groupImListId?: IntFilter<"groupImAvatar"> | number
    createdAt?: DateTimeNullableFilter<"groupImAvatar"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"groupImAvatar"> | Date | string | null
  }

  export type userUpsertWithoutGroupImListInput = {
    update: XOR<userUpdateWithoutGroupImListInput, userUncheckedUpdateWithoutGroupImListInput>
    create: XOR<userCreateWithoutGroupImListInput, userUncheckedCreateWithoutGroupImListInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutGroupImListInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutGroupImListInput, userUncheckedUpdateWithoutGroupImListInput>
  }

  export type userUpdateWithoutGroupImListInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutGroupImListInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUncheckedUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUncheckedUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type couponCreateWithoutSubPackageInput = {
    name: string
    type: string
    duration: number
    uses: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type couponUncheckedCreateWithoutSubPackageInput = {
    id?: number
    name: string
    type: string
    duration: number
    uses: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type couponCreateOrConnectWithoutSubPackageInput = {
    where: couponWhereUniqueInput
    create: XOR<couponCreateWithoutSubPackageInput, couponUncheckedCreateWithoutSubPackageInput>
  }

  export type sharedBotUserSubscriptionCreateWithoutSubPackageInput = {
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBot: sharedBotCreateNestedOneWithoutSharedBotUserSubscriptionInput
    user: userCreateNestedOneWithoutSharedBotUserSubscriptionInput
  }

  export type sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput = {
    id?: number
    sharedBotId: number
    userId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionCreateOrConnectWithoutSubPackageInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    create: XOR<sharedBotUserSubscriptionCreateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput>
  }

  export type sharedBotUserSubscriptionCreateManySubPackageInputEnvelope = {
    data: sharedBotUserSubscriptionCreateManySubPackageInput | sharedBotUserSubscriptionCreateManySubPackageInput[]
    skipDuplicates?: boolean
  }

  export type subscriptionCreateWithoutSubPackageInput = {
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot: botCreateNestedOneWithoutSubscriptionInput
  }

  export type subscriptionUncheckedCreateWithoutSubPackageInput = {
    id?: number
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    botId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subscriptionCreateOrConnectWithoutSubPackageInput = {
    where: subscriptionWhereUniqueInput
    create: XOR<subscriptionCreateWithoutSubPackageInput, subscriptionUncheckedCreateWithoutSubPackageInput>
  }

  export type subscriptionCreateManySubPackageInputEnvelope = {
    data: subscriptionCreateManySubPackageInput | subscriptionCreateManySubPackageInput[]
    skipDuplicates?: boolean
  }

  export type couponUpsertWithoutSubPackageInput = {
    update: XOR<couponUpdateWithoutSubPackageInput, couponUncheckedUpdateWithoutSubPackageInput>
    create: XOR<couponCreateWithoutSubPackageInput, couponUncheckedCreateWithoutSubPackageInput>
    where?: couponWhereInput
  }

  export type couponUpdateToOneWithWhereWithoutSubPackageInput = {
    where?: couponWhereInput
    data: XOR<couponUpdateWithoutSubPackageInput, couponUncheckedUpdateWithoutSubPackageInput>
  }

  export type couponUpdateWithoutSubPackageInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type couponUncheckedUpdateWithoutSubPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    uses?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSubPackageInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    update: XOR<sharedBotUserSubscriptionUpdateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedUpdateWithoutSubPackageInput>
    create: XOR<sharedBotUserSubscriptionCreateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedCreateWithoutSubPackageInput>
  }

  export type sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSubPackageInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    data: XOR<sharedBotUserSubscriptionUpdateWithoutSubPackageInput, sharedBotUserSubscriptionUncheckedUpdateWithoutSubPackageInput>
  }

  export type sharedBotUserSubscriptionUpdateManyWithWhereWithoutSubPackageInput = {
    where: sharedBotUserSubscriptionScalarWhereInput
    data: XOR<sharedBotUserSubscriptionUpdateManyMutationInput, sharedBotUserSubscriptionUncheckedUpdateManyWithoutSubPackageInput>
  }

  export type sharedBotUserSubscriptionScalarWhereInput = {
    AND?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
    OR?: sharedBotUserSubscriptionScalarWhereInput[]
    NOT?: sharedBotUserSubscriptionScalarWhereInput | sharedBotUserSubscriptionScalarWhereInput[]
    id?: IntFilter<"sharedBotUserSubscription"> | number
    sharedBotId?: IntFilter<"sharedBotUserSubscription"> | number
    userId?: IntFilter<"sharedBotUserSubscription"> | number
    subscriptionStart?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    subscriptionEnd?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    packageId?: IntFilter<"sharedBotUserSubscription"> | number
    createdAt?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"sharedBotUserSubscription"> | Date | string | null
  }

  export type subscriptionUpsertWithWhereUniqueWithoutSubPackageInput = {
    where: subscriptionWhereUniqueInput
    update: XOR<subscriptionUpdateWithoutSubPackageInput, subscriptionUncheckedUpdateWithoutSubPackageInput>
    create: XOR<subscriptionCreateWithoutSubPackageInput, subscriptionUncheckedCreateWithoutSubPackageInput>
  }

  export type subscriptionUpdateWithWhereUniqueWithoutSubPackageInput = {
    where: subscriptionWhereUniqueInput
    data: XOR<subscriptionUpdateWithoutSubPackageInput, subscriptionUncheckedUpdateWithoutSubPackageInput>
  }

  export type subscriptionUpdateManyWithWhereWithoutSubPackageInput = {
    where: subscriptionScalarWhereInput
    data: XOR<subscriptionUpdateManyMutationInput, subscriptionUncheckedUpdateManyWithoutSubPackageInput>
  }

  export type userCreateWithoutPaymentLogInput = {
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botCreateNestedManyWithoutUserInput
    groupImList?: groupImListCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPaymentLogInput = {
    id?: number
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botUncheckedCreateNestedManyWithoutUserInput
    groupImList?: groupImListUncheckedCreateNestedManyWithoutUserInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPaymentLogInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPaymentLogInput, userUncheckedCreateWithoutPaymentLogInput>
  }

  export type userUpsertWithoutPaymentLogInput = {
    update: XOR<userUpdateWithoutPaymentLogInput, userUncheckedUpdateWithoutPaymentLogInput>
    create: XOR<userCreateWithoutPaymentLogInput, userUncheckedCreateWithoutPaymentLogInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPaymentLogInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPaymentLogInput, userUncheckedUpdateWithoutPaymentLogInput>
  }

  export type userUpdateWithoutPaymentLogInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUpdateManyWithoutUserNestedInput
    groupImList?: groupImListUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPaymentLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUncheckedUpdateManyWithoutUserNestedInput
    groupImList?: groupImListUncheckedUpdateManyWithoutUserNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sharedBotUserSubscriptionCreateWithoutSharedBotInput = {
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutSharedBotUserSubscriptionInput
    subPackage: subPackageCreateNestedOneWithoutSharedBotUserSubscriptionInput
  }

  export type sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput = {
    id?: number
    userId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    packageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionCreateOrConnectWithoutSharedBotInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    create: XOR<sharedBotUserSubscriptionCreateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput>
  }

  export type sharedBotUserSubscriptionCreateManySharedBotInputEnvelope = {
    data: sharedBotUserSubscriptionCreateManySharedBotInput | sharedBotUserSubscriptionCreateManySharedBotInput[]
    skipDuplicates?: boolean
  }

  export type sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutSharedBotInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    update: XOR<sharedBotUserSubscriptionUpdateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedUpdateWithoutSharedBotInput>
    create: XOR<sharedBotUserSubscriptionCreateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedCreateWithoutSharedBotInput>
  }

  export type sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutSharedBotInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    data: XOR<sharedBotUserSubscriptionUpdateWithoutSharedBotInput, sharedBotUserSubscriptionUncheckedUpdateWithoutSharedBotInput>
  }

  export type sharedBotUserSubscriptionUpdateManyWithWhereWithoutSharedBotInput = {
    where: sharedBotUserSubscriptionScalarWhereInput
    data: XOR<sharedBotUserSubscriptionUpdateManyMutationInput, sharedBotUserSubscriptionUncheckedUpdateManyWithoutSharedBotInput>
  }

  export type sharedBotCreateWithoutSharedBotUserSubscriptionInput = {
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUncheckedCreateWithoutSharedBotUserSubscriptionInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotCreateOrConnectWithoutSharedBotUserSubscriptionInput = {
    where: sharedBotWhereUniqueInput
    create: XOR<sharedBotCreateWithoutSharedBotUserSubscriptionInput, sharedBotUncheckedCreateWithoutSharedBotUserSubscriptionInput>
  }

  export type userCreateWithoutSharedBotUserSubscriptionInput = {
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botCreateNestedManyWithoutUserInput
    groupImList?: groupImListCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSharedBotUserSubscriptionInput = {
    id?: number
    email: string
    password: string
    refreshToken?: string | null
    ldollarBalance?: number | null
    uuid?: string | null
    avatarName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    bot?: botUncheckedCreateNestedManyWithoutUserInput
    groupImList?: groupImListUncheckedCreateNestedManyWithoutUserInput
    paymentLog?: paymentLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSharedBotUserSubscriptionInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSharedBotUserSubscriptionInput, userUncheckedCreateWithoutSharedBotUserSubscriptionInput>
  }

  export type subPackageCreateWithoutSharedBotUserSubscriptionInput = {
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    coupon?: couponCreateNestedOneWithoutSubPackageInput
    subscription?: subscriptionCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageUncheckedCreateWithoutSharedBotUserSubscriptionInput = {
    id?: number
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    couponId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subscription?: subscriptionUncheckedCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageCreateOrConnectWithoutSharedBotUserSubscriptionInput = {
    where: subPackageWhereUniqueInput
    create: XOR<subPackageCreateWithoutSharedBotUserSubscriptionInput, subPackageUncheckedCreateWithoutSharedBotUserSubscriptionInput>
  }

  export type sharedBotUpsertWithoutSharedBotUserSubscriptionInput = {
    update: XOR<sharedBotUpdateWithoutSharedBotUserSubscriptionInput, sharedBotUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
    create: XOR<sharedBotCreateWithoutSharedBotUserSubscriptionInput, sharedBotUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    where?: sharedBotWhereInput
  }

  export type sharedBotUpdateToOneWithWhereWithoutSharedBotUserSubscriptionInput = {
    where?: sharedBotWhereInput
    data: XOR<sharedBotUpdateWithoutSharedBotUserSubscriptionInput, sharedBotUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
  }

  export type sharedBotUpdateWithoutSharedBotUserSubscriptionInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUncheckedUpdateWithoutSharedBotUserSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpsertWithoutSharedBotUserSubscriptionInput = {
    update: XOR<userUpdateWithoutSharedBotUserSubscriptionInput, userUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
    create: XOR<userCreateWithoutSharedBotUserSubscriptionInput, userUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSharedBotUserSubscriptionInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSharedBotUserSubscriptionInput, userUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
  }

  export type userUpdateWithoutSharedBotUserSubscriptionInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUpdateManyWithoutUserNestedInput
    groupImList?: groupImListUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSharedBotUserSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    ldollarBalance?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    avatarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUncheckedUpdateManyWithoutUserNestedInput
    groupImList?: groupImListUncheckedUpdateManyWithoutUserNestedInput
    paymentLog?: paymentLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type subPackageUpsertWithoutSharedBotUserSubscriptionInput = {
    update: XOR<subPackageUpdateWithoutSharedBotUserSubscriptionInput, subPackageUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
    create: XOR<subPackageCreateWithoutSharedBotUserSubscriptionInput, subPackageUncheckedCreateWithoutSharedBotUserSubscriptionInput>
    where?: subPackageWhereInput
  }

  export type subPackageUpdateToOneWithWhereWithoutSharedBotUserSubscriptionInput = {
    where?: subPackageWhereInput
    data: XOR<subPackageUpdateWithoutSharedBotUserSubscriptionInput, subPackageUncheckedUpdateWithoutSharedBotUserSubscriptionInput>
  }

  export type subPackageUpdateWithoutSharedBotUserSubscriptionInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: couponUpdateOneWithoutSubPackageNestedInput
    subscription?: subscriptionUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageUncheckedUpdateWithoutSharedBotUserSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: subscriptionUncheckedUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageCreateWithoutSubscriptionInput = {
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    coupon?: couponCreateNestedOneWithoutSubPackageInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    couponId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedCreateNestedManyWithoutSubPackageInput
  }

  export type subPackageCreateOrConnectWithoutSubscriptionInput = {
    where: subPackageWhereUniqueInput
    create: XOR<subPackageCreateWithoutSubscriptionInput, subPackageUncheckedCreateWithoutSubscriptionInput>
  }

  export type botCreateWithoutSubscriptionInput = {
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    user: userCreateNestedOneWithoutBotInput
  }

  export type botUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    userId: number
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type botCreateOrConnectWithoutSubscriptionInput = {
    where: botWhereUniqueInput
    create: XOR<botCreateWithoutSubscriptionInput, botUncheckedCreateWithoutSubscriptionInput>
  }

  export type subPackageUpsertWithoutSubscriptionInput = {
    update: XOR<subPackageUpdateWithoutSubscriptionInput, subPackageUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<subPackageCreateWithoutSubscriptionInput, subPackageUncheckedCreateWithoutSubscriptionInput>
    where?: subPackageWhereInput
  }

  export type subPackageUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: subPackageWhereInput
    data: XOR<subPackageUpdateWithoutSubscriptionInput, subPackageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type subPackageUpdateWithoutSubscriptionInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: couponUpdateOneWithoutSubPackageNestedInput
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutSubPackageNestedInput
  }

  export type botUpsertWithoutSubscriptionInput = {
    update: XOR<botUpdateWithoutSubscriptionInput, botUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<botCreateWithoutSubscriptionInput, botUncheckedCreateWithoutSubscriptionInput>
    where?: botWhereInput
  }

  export type botUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: botWhereInput
    data: XOR<botUpdateWithoutSubscriptionInput, botUncheckedUpdateWithoutSubscriptionInput>
  }

  export type botUpdateWithoutSubscriptionInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutBotNestedInput
  }

  export type botUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botCreateWithoutUserInput = {
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subscription?: subscriptionCreateNestedManyWithoutBotInput
  }

  export type botUncheckedCreateWithoutUserInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    subscription?: subscriptionUncheckedCreateNestedManyWithoutBotInput
  }

  export type botCreateOrConnectWithoutUserInput = {
    where: botWhereUniqueInput
    create: XOR<botCreateWithoutUserInput, botUncheckedCreateWithoutUserInput>
  }

  export type botCreateManyUserInputEnvelope = {
    data: botCreateManyUserInput | botCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type groupImListCreateWithoutUserInput = {
    listName: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImAvatar?: groupImAvatarCreateNestedManyWithoutGroupImListInput
  }

  export type groupImListUncheckedCreateWithoutUserInput = {
    id?: number
    listName: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    groupImAvatar?: groupImAvatarUncheckedCreateNestedManyWithoutGroupImListInput
  }

  export type groupImListCreateOrConnectWithoutUserInput = {
    where: groupImListWhereUniqueInput
    create: XOR<groupImListCreateWithoutUserInput, groupImListUncheckedCreateWithoutUserInput>
  }

  export type groupImListCreateManyUserInputEnvelope = {
    data: groupImListCreateManyUserInput | groupImListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type paymentLogCreateWithoutUserInput = {
    amount: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type paymentLogUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type paymentLogCreateOrConnectWithoutUserInput = {
    where: paymentLogWhereUniqueInput
    create: XOR<paymentLogCreateWithoutUserInput, paymentLogUncheckedCreateWithoutUserInput>
  }

  export type paymentLogCreateManyUserInputEnvelope = {
    data: paymentLogCreateManyUserInput | paymentLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sharedBotUserSubscriptionCreateWithoutUserInput = {
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    sharedBot: sharedBotCreateNestedOneWithoutSharedBotUserSubscriptionInput
    subPackage: subPackageCreateNestedOneWithoutSharedBotUserSubscriptionInput
  }

  export type sharedBotUserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    sharedBotId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    packageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionCreateOrConnectWithoutUserInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    create: XOR<sharedBotUserSubscriptionCreateWithoutUserInput, sharedBotUserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type sharedBotUserSubscriptionCreateManyUserInputEnvelope = {
    data: sharedBotUserSubscriptionCreateManyUserInput | sharedBotUserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type botUpsertWithWhereUniqueWithoutUserInput = {
    where: botWhereUniqueInput
    update: XOR<botUpdateWithoutUserInput, botUncheckedUpdateWithoutUserInput>
    create: XOR<botCreateWithoutUserInput, botUncheckedCreateWithoutUserInput>
  }

  export type botUpdateWithWhereUniqueWithoutUserInput = {
    where: botWhereUniqueInput
    data: XOR<botUpdateWithoutUserInput, botUncheckedUpdateWithoutUserInput>
  }

  export type botUpdateManyWithWhereWithoutUserInput = {
    where: botScalarWhereInput
    data: XOR<botUpdateManyMutationInput, botUncheckedUpdateManyWithoutUserInput>
  }

  export type botScalarWhereInput = {
    AND?: botScalarWhereInput | botScalarWhereInput[]
    OR?: botScalarWhereInput[]
    NOT?: botScalarWhereInput | botScalarWhereInput[]
    id?: IntFilter<"bot"> | number
    loginFirstName?: StringFilter<"bot"> | string
    loginLastName?: StringFilter<"bot"> | string
    loginPassword?: StringFilter<"bot"> | string
    loginSpawnLocation?: StringFilter<"bot"> | string
    userId?: IntFilter<"bot"> | number
    running?: BoolFilter<"bot"> | boolean
    shouldRun?: BoolNullableFilter<"bot"> | boolean | null
    loginRegion?: StringNullableFilter<"bot"> | string | null
    packageId?: IntNullableFilter<"bot"> | number | null
    uuid?: StringFilter<"bot"> | string
    imageId?: StringFilter<"bot"> | string
    actionId?: IntNullableFilter<"bot"> | number | null
    createdAt?: DateTimeNullableFilter<"bot"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"bot"> | Date | string | null
  }

  export type groupImListUpsertWithWhereUniqueWithoutUserInput = {
    where: groupImListWhereUniqueInput
    update: XOR<groupImListUpdateWithoutUserInput, groupImListUncheckedUpdateWithoutUserInput>
    create: XOR<groupImListCreateWithoutUserInput, groupImListUncheckedCreateWithoutUserInput>
  }

  export type groupImListUpdateWithWhereUniqueWithoutUserInput = {
    where: groupImListWhereUniqueInput
    data: XOR<groupImListUpdateWithoutUserInput, groupImListUncheckedUpdateWithoutUserInput>
  }

  export type groupImListUpdateManyWithWhereWithoutUserInput = {
    where: groupImListScalarWhereInput
    data: XOR<groupImListUpdateManyMutationInput, groupImListUncheckedUpdateManyWithoutUserInput>
  }

  export type groupImListScalarWhereInput = {
    AND?: groupImListScalarWhereInput | groupImListScalarWhereInput[]
    OR?: groupImListScalarWhereInput[]
    NOT?: groupImListScalarWhereInput | groupImListScalarWhereInput[]
    id?: IntFilter<"groupImList"> | number
    listName?: StringFilter<"groupImList"> | string
    userId?: IntFilter<"groupImList"> | number
    createdAt?: DateTimeNullableFilter<"groupImList"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"groupImList"> | Date | string | null
  }

  export type paymentLogUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentLogWhereUniqueInput
    update: XOR<paymentLogUpdateWithoutUserInput, paymentLogUncheckedUpdateWithoutUserInput>
    create: XOR<paymentLogCreateWithoutUserInput, paymentLogUncheckedCreateWithoutUserInput>
  }

  export type paymentLogUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentLogWhereUniqueInput
    data: XOR<paymentLogUpdateWithoutUserInput, paymentLogUncheckedUpdateWithoutUserInput>
  }

  export type paymentLogUpdateManyWithWhereWithoutUserInput = {
    where: paymentLogScalarWhereInput
    data: XOR<paymentLogUpdateManyMutationInput, paymentLogUncheckedUpdateManyWithoutUserInput>
  }

  export type paymentLogScalarWhereInput = {
    AND?: paymentLogScalarWhereInput | paymentLogScalarWhereInput[]
    OR?: paymentLogScalarWhereInput[]
    NOT?: paymentLogScalarWhereInput | paymentLogScalarWhereInput[]
    id?: IntFilter<"paymentLog"> | number
    userUuid?: StringFilter<"paymentLog"> | string
    amount?: IntFilter<"paymentLog"> | number
    createdAt?: DateTimeNullableFilter<"paymentLog"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"paymentLog"> | Date | string | null
  }

  export type sharedBotUserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    update: XOR<sharedBotUserSubscriptionUpdateWithoutUserInput, sharedBotUserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<sharedBotUserSubscriptionCreateWithoutUserInput, sharedBotUserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type sharedBotUserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: sharedBotUserSubscriptionWhereUniqueInput
    data: XOR<sharedBotUserSubscriptionUpdateWithoutUserInput, sharedBotUserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type sharedBotUserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: sharedBotUserSubscriptionScalarWhereInput
    data: XOR<sharedBotUserSubscriptionUpdateManyMutationInput, sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type subscriptionCreateManyBotInput = {
    id?: number
    packageId: number
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subscriptionUpdateWithoutBotInput = {
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subPackage?: subPackageUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateWithoutBotInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionUncheckedUpdateManyWithoutBotInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subPackageCreateManyCouponInput = {
    id?: number
    packageName: string
    packageDescription?: string | null
    pricePerWeek: number
    discount: number
    pricePerMonth: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subPackageUpdateWithoutCouponInput = {
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUpdateManyWithoutSubPackageNestedInput
    subscription?: subscriptionUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageUncheckedUpdateWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBotUserSubscription?: sharedBotUserSubscriptionUncheckedUpdateManyWithoutSubPackageNestedInput
    subscription?: subscriptionUncheckedUpdateManyWithoutSubPackageNestedInput
  }

  export type subPackageUncheckedUpdateManyWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    packageName?: StringFieldUpdateOperationsInput | string
    packageDescription?: NullableStringFieldUpdateOperationsInput | string | null
    pricePerWeek?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    pricePerMonth?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarCreateManyGroupImListInput = {
    id?: number
    uuid: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImAvatarUpdateWithoutGroupImListInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarUncheckedUpdateWithoutGroupImListInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImAvatarUncheckedUpdateManyWithoutGroupImListInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionCreateManySubPackageInput = {
    id?: number
    sharedBotId: number
    userId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type subscriptionCreateManySubPackageInput = {
    id?: number
    subscriptionStart: Date | string
    subscriptionEnd: Date | string
    botId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionUpdateWithoutSubPackageInput = {
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBot?: sharedBotUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
    user?: userUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
  }

  export type sharedBotUserSubscriptionUncheckedUpdateWithoutSubPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedBotId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyWithoutSubPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedBotId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionUpdateWithoutSubPackageInput = {
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bot?: botUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type subscriptionUncheckedUpdateWithoutSubPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    botId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subscriptionUncheckedUpdateManyWithoutSubPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    botId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionCreateManySharedBotInput = {
    id?: number
    userId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    packageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionUpdateWithoutSharedBotInput = {
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
    subPackage?: subPackageUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
  }

  export type sharedBotUserSubscriptionUncheckedUpdateWithoutSharedBotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyWithoutSharedBotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type botCreateManyUserInput = {
    id?: number
    loginFirstName: string
    loginLastName: string
    loginPassword: string
    loginSpawnLocation: string
    running: boolean
    shouldRun?: boolean | null
    loginRegion?: string | null
    packageId?: number | null
    uuid: string
    imageId: string
    actionId?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type groupImListCreateManyUserInput = {
    id?: number
    listName: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type paymentLogCreateManyUserInput = {
    id?: number
    amount: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type sharedBotUserSubscriptionCreateManyUserInput = {
    id?: number
    sharedBotId: number
    subscriptionStart?: Date | string | null
    subscriptionEnd?: Date | string | null
    packageId: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type botUpdateWithoutUserInput = {
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: subscriptionUpdateManyWithoutBotNestedInput
  }

  export type botUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscription?: subscriptionUncheckedUpdateManyWithoutBotNestedInput
  }

  export type botUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginFirstName?: StringFieldUpdateOperationsInput | string
    loginLastName?: StringFieldUpdateOperationsInput | string
    loginPassword?: StringFieldUpdateOperationsInput | string
    loginSpawnLocation?: StringFieldUpdateOperationsInput | string
    running?: BoolFieldUpdateOperationsInput | boolean
    shouldRun?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loginRegion?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    uuid?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    actionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupImListUpdateWithoutUserInput = {
    listName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImAvatar?: groupImAvatarUpdateManyWithoutGroupImListNestedInput
  }

  export type groupImListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    listName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupImAvatar?: groupImAvatarUncheckedUpdateManyWithoutGroupImListNestedInput
  }

  export type groupImListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    listName?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentLogUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionUpdateWithoutUserInput = {
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sharedBot?: sharedBotUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
    subPackage?: subPackageUpdateOneRequiredWithoutSharedBotUserSubscriptionNestedInput
  }

  export type sharedBotUserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedBotId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sharedBotUserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedBotId?: IntFieldUpdateOperationsInput | number
    subscriptionStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subscriptionEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    packageId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BotCountOutputTypeDefaultArgs instead
     */
    export type BotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CouponCountOutputTypeDefaultArgs instead
     */
    export type CouponCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CouponCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupImListCountOutputTypeDefaultArgs instead
     */
    export type GroupImListCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupImListCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubPackageCountOutputTypeDefaultArgs instead
     */
    export type SubPackageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubPackageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SharedBotCountOutputTypeDefaultArgs instead
     */
    export type SharedBotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SharedBotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use botDefaultArgs instead
     */
    export type botArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = botDefaultArgs<ExtArgs>
    /**
     * @deprecated Use botLogDefaultArgs instead
     */
    export type botLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = botLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use couponDefaultArgs instead
     */
    export type couponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = couponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use discordSettingsDefaultArgs instead
     */
    export type discordSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = discordSettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use groupImAvatarDefaultArgs instead
     */
    export type groupImAvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = groupImAvatarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use groupImListDefaultArgs instead
     */
    export type groupImListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = groupImListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use subPackageDefaultArgs instead
     */
    export type subPackageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = subPackageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use paymentLogDefaultArgs instead
     */
    export type paymentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = paymentLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sharedBotDefaultArgs instead
     */
    export type sharedBotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sharedBotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sharedBotUserSubscriptionDefaultArgs instead
     */
    export type sharedBotUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sharedBotUserSubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use subscriptionDefaultArgs instead
     */
    export type subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = subscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use terminalDefaultArgs instead
     */
    export type terminalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = terminalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use terminalOwnerDefaultArgs instead
     */
    export type terminalOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = terminalOwnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}