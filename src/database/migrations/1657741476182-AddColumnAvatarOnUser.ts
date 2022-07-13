import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnAvatarOnUser1657741476182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user", new TableColumn({
            name: "avatar",
            type: "varchar",
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user", "avatar")
    }

}
