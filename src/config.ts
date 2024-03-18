import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  let database = {
    name: process.env.DATABASE_NAME,
    port: ''
  };
  if (process.env.DATABASE_PORT) {
    database.port = process.env.DATABASE_PORT;
  }

  let mongo =  {
    dbName: process.env.MONGO_DB,
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT, 10),
    connection: process.env.MONGO_CONNECTION,
  }

  return {
    database,
    mongo,
    apiKey: process.env.API_KEY,
  };
});
