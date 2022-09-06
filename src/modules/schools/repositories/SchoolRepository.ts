import { AppDataSource } from "../../../data-source"
import { School } from "../entities/School"

export const schoolRep = AppDataSource.getRepository(School);