import { Request, Response } from "express";
import { EditSchoolUseCase } from "./EditSchoolUseCase";

export class EditSchoolController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, city, uf, latitude, longitude } = request.body;
    
    const editSchoolUseCase = new EditSchoolUseCase();
    
    const res = await editSchoolUseCase.execute(id, {
      name, 
      city, 
      uf, 
      latitude, 
      longitude
    })

    return response.status(200).json(res);
  }
}