import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 } from "uuid"

@Entity("user")
class User {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    driver_license: string

    @Column()
    isAdmin: boolean

    @Column()
    avatar: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id)
            this.id = v4()
        // if (!this.created_at)
        //     this.created_at = new Date()
    }

}

export { User }