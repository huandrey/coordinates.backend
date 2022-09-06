"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("../../../data-source");
const AppError_1 = require("../../errors/AppError");
const routes_1 = require("./routes");
dotenv_1.default.config();
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use(routes_1.router);
    app.use((err, request, response, next) => {
        if (err instanceof AppError_1.AppError) {
            return response.status(400).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    });
    app.listen(port, () => console.log("Server is running in PORT 3333!"));
});
