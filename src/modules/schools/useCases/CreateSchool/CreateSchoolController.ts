import { Request, Response } from "express";
import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

export class CreateSchoolController {
  async handle(request: Request, response: Response) {
    const { name, city, uf, latitude, longitude } = request.body;
    const createSchoolUseCase = new CreateSchoolUseCase();
    
    const res = await createSchoolUseCase.execute({
      name, 
      city, 
      uf, 
      latitude, 
      longitude
    })

    return response.status(200).json(res);
  }
}