"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1662394519111 = void 0;
class default1662394519111 {
    constructor() {
        this.name = 'default1662394519111';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "latitude" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "longitude" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "longitude" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "latitude" SET NOT NULL`);
    }
}
exports.default1662394519111 = default1662394519111;
