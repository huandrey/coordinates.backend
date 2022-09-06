import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662387033160 implements MigrationInterface {
    name = 'default1662387033160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schools" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "uf" character(2) NOT NULL, "latitude" character varying, "longitude" character varying, CONSTRAINT "PK_95b932e47ac129dd8e23a0db548" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "schools"`);
    }

}
