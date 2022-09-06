import "express-async-errors";=
import 'reflect-metadata';
import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import { AppDataSource } from '../../../data-source';
import { AppError } from '../../errors/AppError';
import { router } from "./routes";

dotenv.config();

AppDataSource.initialize().then(() => {
  const app: Express = express();
  const port = process.env.PORT;

  app.use(express.json());
  app.use(cors());
  app.use(router);

  app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
  );
  
  app.listen(process.env.PORT || 3333, function(){
    console.log("Express server listening on port %d in %s mode");
  });
});

