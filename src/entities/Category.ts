import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 } from "uuid"

@Entity("category")
class Category {
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

export { Category }