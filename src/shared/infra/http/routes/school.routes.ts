import { Router } from "express";
import { CreateSchoolController } from "../../../../modules/schools/useCases/CreateSchool/CreateSchoolController";
import { EditSchoolController } from "../../../../modules/schools/useCases/EditSchool/EditSchoolController";
import { GetSchoolController } from "../../../../modules/schools/useCases/GetSchool/GetSchoolController";
import { ListSchoolController } from "../../../../modules/schools/useCases/ListSchools/ListSchoolController";

export const schoolRoutes = Router();

const createSchoolController = new CreateSchoolController();
const editSchoolController = new EditSchoolController();
const listSchoolController = new ListSchoolController();
const getSchoolController = new GetSchoolController();

schoolRoutes.post('/', createSchoolController.handle);
schoolRoutes.put('/:id', editSchoolController.handle);
schoolRoutes.get('/', listSchoolController.handle);
schoolRoutes.get('/:id', getSchoolController.handle);