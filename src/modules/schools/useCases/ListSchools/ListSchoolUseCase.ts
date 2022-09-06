import { schoolRep } from "../../repositories/SchoolRepository";

export class ListSchoolUseCase {
  async execute() {
    const schoolsFound = await schoolRep.find();

    return {
      data: schoolsFound,
      statusCode: 200,
    }
  }
}