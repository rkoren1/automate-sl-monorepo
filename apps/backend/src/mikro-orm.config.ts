import { Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as dotenv from 'dotenv';

dotenv.config();
const mikroOrmConfig: Options = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'secondlifedev123',
  dbName: 'automatesl',
  namingStrategy: UnderscoreNamingStrategy,
  migrations: {
    path: './migrations',
    glob: '!(*.d).{js,ts}',
  },
  metadataProvider: TsMorphMetadataProvider,
};

export default mikroOrmConfig;
