import { Request, Response } from "express";
import { ListSchoolUseCase } from "./ListSchoolUseCase";

export class ListSchoolController {
  async handle(request: Request, response: Response) {
    
    const listSchoolUseCase = new ListSchoolUseCase();
    
    const res = await listSchoolUseCase.execute();

    return response.status(200).json(res);
  }
}