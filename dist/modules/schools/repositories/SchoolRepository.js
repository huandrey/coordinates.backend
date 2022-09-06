"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schoolRep = void 0;
const data_source_1 = require("../../../data-source");
const School_1 = require("../entities/School");
exports.schoolRep = data_source_1.AppDataSource.getRepository(School_1.School);
