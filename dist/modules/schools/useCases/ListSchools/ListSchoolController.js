"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchoolController = void 0;
const ListSchoolUseCase_1 = require("./ListSchoolUseCase");
class ListSchoolController {
    async handle(request, response) {
        const listSchoolUseCase = new ListSchoolUseCase_1.ListSchoolUseCase();
        const res = await listSchoolUseCase.execute();
        return response.status(200).json(res);
    }
}
exports.ListSchoolController = ListSchoolController;
