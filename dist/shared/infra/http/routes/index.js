"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const school_routes_1 = require("../routes/school.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/schools", school_routes_1.schoolRoutes);
