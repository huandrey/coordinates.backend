"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditSchoolController = void 0;
const EditSchoolUseCase_1 = require("./EditSchoolUseCase");
class EditSchoolController {
    async handle(request, response) {
        const { id } = request.params;
        const { name, city, uf, latitude, longitude } = request.body;
        const editSchoolUseCase = new EditSchoolUseCase_1.EditSchoolUseCase();
        const res = await editSchoolUseCase.execute(id, {
            name,
            city,
            uf,
            latitude,
            longitude
        });
        return response.status(200).json(res);
    }
}
exports.EditSchoolController = EditSchoolController;
