import { User } from "../../entities/User"

interface ICreateUserDTO {
    name: string
    password: string
    email: string
    driver_license: string
    id?: string
    avatar?: string
}

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>
    getAll(): Promise<User[]>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
}

export { IUserRepository, ICreateUserDTO }