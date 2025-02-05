import { DataSource } from "typeorm";
import { join } from 'path';
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DATABASE!,
    synchronize: false,
    logging: false,
    migrations: [join(__dirname, '../migration/*.{ts, js}')],
    entities: [join(__dirname, '../entity/*.entity.{ts, js}')],
})
