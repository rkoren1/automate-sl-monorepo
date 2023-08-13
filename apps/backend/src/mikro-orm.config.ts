import * as dotenv from 'dotenv';
import { Options, UnderscoreNamingStrategy } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

dotenv.config();
const mikroOrmConfig: Options = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'secondlifedev123',
  dbName: 'automatesl',
  entities: ['dist/modules/**/entities/*.entity.js'],
  entitiesTs: ['src/modules/user/entities/user.entity.ts'],
  namingStrategy: UnderscoreNamingStrategy,
  migrations: {
    path: './migrations',
    glob: '!(*.d).{js,ts}',
  },
  metadataProvider: TsMorphMetadataProvider,
};

export default mikroOrmConfig;
