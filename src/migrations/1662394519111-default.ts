import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662394519111 implements MigrationInterface {
    name = 'default1662394519111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "latitude" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "longitude" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "longitude" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schools" ALTER COLUMN "latitude" SET NOT NULL`);
    }

}
