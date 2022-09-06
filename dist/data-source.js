"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const School_1 = require("./modules/schools/entities/School");
const port = process.env.TYPEORM_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: true,
    // entities: [`${__dirname}/**/modules/schools/entities/*.{ts, js}`],
    entities: [School_1.School],
    subscribers: [],
    migrations: [`${__dirname}/**/migrations/default/*.{ts, js}`],
});
