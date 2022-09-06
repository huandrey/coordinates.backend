"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSchoolController = void 0;
const GetSchoolUseCase_1 = require("./GetSchoolUseCase");
class GetSchoolController {
    async handle(request, response) {
        const { id } = request.params;
        const getSchoolUseCase = new GetSchoolUseCase_1.GetSchoolUseCase();
        const res = await getSchoolUseCase.execute(id);
        return response.status(200).json(res);
    }
}
exports.GetSchoolController = GetSchoolController;
