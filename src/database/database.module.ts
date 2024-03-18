import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb';
import config from 'src/config';

const API_KEY = 'api_key';
const API_KEY_PROD = 'API_KEY_PROD';

@Global()
@Module({
  imports:[
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, dbName, host, password, port, user } =
          configService.mongo;
        let uri = `${connection}://${host}`;
        if(port){
          uri = `${connection}://${host}:${port}`;
        }
        return {
          uri,
          user,
          pass: password,
          dbName
        };
      },
      inject: [config.KEY]
    })
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    /* {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, dbName, host, password, port, user } =
          configService.mongo;
        let uri = `${connection}://${user}:${password}@${host}/?retryWrites=true&w=majority&appName=MongoDB2024101`;
        if(port){
          uri = `${connection}://${user}:${password}@${host}:${port}/?tls=false`;
        }
        console.log(uri);

        const client = new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    }, */
  ],
  exports: ['API_KEY', MongooseModule],
})



export class DatabaseModule {}
