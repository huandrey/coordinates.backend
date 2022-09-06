import 'dotenv/config';
import 'reflect-metadata';

import { DataSource } from "typeorm";
import { School } from './modules/schools/entities/School';

const port = process.env.TYPEORM_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  // entities: [`${__dirname}/**/modules/schools/entities/*.{ts, js}`],
  entities: [School],
  subscribers: [],
  migrations: [`${__dirname}/**/migrations/default/*.{ts, js}`],
})