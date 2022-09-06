"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSchoolUseCase = void 0;
const AppError_1 = require("../../../../shared/errors/AppError");
const SchoolRepository_1 = require("../../repositories/SchoolRepository");
class GetSchoolUseCase {
    async execute(id) {
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
        return {
            data: schoolFound,
            statusCode: 200,
        };
    }
}
exports.GetSchoolUseCase = GetSchoolUseCase;
