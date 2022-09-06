"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchoolController = void 0;
const CreateSchoolUseCase_1 = require("./CreateSchoolUseCase");
class CreateSchoolController {
    async handle(request, response) {
        const { name, city, uf, latitude, longitude } = request.body;
        const createSchoolUseCase = new CreateSchoolUseCase_1.CreateSchoolUseCase();
        const res = await createSchoolUseCase.execute({
            name,
            city,
            uf,
            latitude,
            longitude
        });
        return response.status(200).json(res);
    }
}
exports.CreateSchoolController = CreateSchoolController;
