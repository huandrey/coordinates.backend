"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./data-source");
dotenv_1.default.config();
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    app.get('/', (req, res) => {
        res.json('Express + TypeScript Server');
    });
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
});
