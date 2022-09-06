import { AppError } from "../../../../shared/errors/AppError";
import { schoolRep } from "../../repositories/SchoolRepository";

export class GetSchoolUseCase {
  async execute(id) {
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

    return {
      data: schoolFound,
      statusCode: 200,
    }
  }
}