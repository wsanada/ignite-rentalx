import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 } from "uuid"

@Entity("specification")
class Specification {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id)
            this.id = v4()

        if (!this.created_at)
            this.created_at = new Date()
    }
}

export { Specification }