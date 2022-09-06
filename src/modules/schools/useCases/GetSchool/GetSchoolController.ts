import { Request, Response } from "express";
import { GetSchoolUseCase } from "./GetSchoolUseCase";

export class GetSchoolController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const getSchoolUseCase = new GetSchoolUseCase();
    
    const res = await getSchoolUseCase.execute(id);

    return response.status(200).json(res);
  }
}