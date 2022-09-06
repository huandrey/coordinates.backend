"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchoolUseCase = void 0;
const SchoolRepository_1 = require("../../repositories/SchoolRepository");
class ListSchoolUseCase {
    async execute() {
        const schoolsFound = await SchoolRepository_1.schoolRep.find();
        return {
            data: schoolsFound,
            statusCode: 200,
        };
    }
}
exports.ListSchoolUseCase = ListSchoolUseCase;
