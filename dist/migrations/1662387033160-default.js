"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1662387033160 = void 0;
class default1662387033160 {
    constructor() {
        this.name = 'default1662387033160';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "schools" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "uf" character(2) NOT NULL, "latitude" character varying, "longitude" character varying, CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "schools"`);
    }
}
exports.default1662387033160 = default1662387033160;
