import { Router } from "express";

import { schoolRoutes } from "../routes/school.routes";

const router = Router();

router.use("/schools", schoolRoutes);

export { router };