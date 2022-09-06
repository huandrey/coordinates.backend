import { AppError } from "../../../../shared/errors/AppError";
import { schoolRep } from "../../repositories/SchoolRepository";

export class CreateSchoolUseCase {
  async execute(schoolDTO) {
    const requiredFields = ["name", "city", "uf"];
    for (const field of requiredFields) {
      if (!schoolDTO[field]) {
        throw new AppError(`Missing param: ${field}`);
      }
    }

    const { name, city, uf, latitude, longitude } = schoolDTO;


    const school = await schoolRep.create({
      name, 
      city, 
      uf, 
      latitude, 
      longitude
    })

    await schoolRep.save(school);
    
    return {
      data: school,
      statusCode: 200,
    }
  }
}