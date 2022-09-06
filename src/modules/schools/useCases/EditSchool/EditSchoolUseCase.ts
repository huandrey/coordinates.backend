import { AppError } from "../../../../shared/errors/AppError";
import { schoolRep } from "../../repositories/SchoolRepository";

export class EditSchoolUseCase {
  async execute(id, schoolDTO) {
    // const requiredFields = ["name", "city", "uf"];
    // for (const field of requiredFields) {
    //   if (!schoolDTO[field]) {
    //     throw new AppError(`Missing param: ${field}`);
    //   }
    // }

    const schoolFound = await schoolRep.findOneBy({
      id,
    });

    if (!schoolFound) {
      throw new AppError(`School not found.`);
    }

    const { name, city, uf, latitude, longitude } = schoolDTO;

    schoolRep.merge(schoolFound, { name, city, uf, latitude, longitude });

    const school = await schoolRep.save(schoolFound);

    return {
      data: school,
      statusCode: 200,
    }
  }
}