"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchoolUseCase = void 0;
const AppError_1 = require("../../../../shared/errors/AppError");
const SchoolRepository_1 = require("../../repositories/SchoolRepository");
class CreateSchoolUseCase {
    async execute(schoolDTO) {
        const requiredFields = ["name", "city", "uf"];
        for (const field of requiredFields) {
            if (!schoolDTO[field]) {
                throw new AppError_1.AppError(`Missing param: ${field}`);
            }
        }
        const { name, city, uf, latitude, longitude } = schoolDTO;
        const school = await SchoolRepository_1.schoolRep.create({
            name,
            city,
            uf,
            latitude,
            longitude
        });
        await SchoolRepository_1.schoolRep.save(school);
        return {
            data: school,
            statusCode: 200,
        };
    }
}
exports.CreateSchoolUseCase = CreateSchoolUseCase;
