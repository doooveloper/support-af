import { createConnection } from 'typeorm';

import { 
  User,
  UserEquip,
  Admin,
  Equip,
  Software 
} from '../entities';

export const initDatabase = (logging = false) =>
  createConnection({
    type: 'mysql',
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT ? process.env.DB_PORT : '3306'),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [
      User, Equip, UserEquip,
      Admin, Software
    ],
    synchronize: true,
    logging,
    extra: {
      connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT ? process.env.DB_CONNECTION_LIMIT : '10')
    }
  });