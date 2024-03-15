import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import config from 'src/config';

const API_KEY = 'api_key';
const API_KEY_PROD = 'API_KEY_PROD';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, dbName, host, password, port, user } =
          configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?tls=false`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
