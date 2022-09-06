"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditSchoolUseCase = void 0;
const AppError_1 = require("../../../../shared/errors/AppError");
const SchoolRepository_1 = require("../../repositories/SchoolRepository");
class EditSchoolUseCase {
    async execute(id, schoolDTO) {
        // const requiredFields = ["name", "city", "uf"];
        // for (const field of requiredFields) {
        //   if (!schoolDTO[field]) {
        //     throw new AppError(`Missing param: ${field}`);
        //   }
        // }
        const schoolFound = await SchoolRepository_1.schoolRep.findOneBy({
            id,
        });
        if (!schoolFound) {
            throw new AppError_1.AppError(`School not found.`);
        }
        const { name, city, uf, latitude, longitude } = schoolDTO;
        SchoolRepository_1.schoolRep.merge(schoolFound, { name, city, uf, latitude, longitude });
        const school = await SchoolRepository_1.schoolRep.save(schoolFound);
        return {
            data: school,
            statusCode: 200,
        };
    }
}
exports.EditSchoolUseCase = EditSchoolUseCase;
