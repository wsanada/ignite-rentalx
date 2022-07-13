import { getRepository, Repository } from "typeorm"
import { User } from "../../entities/User"
import { IUserRepository, ICreateUserDTO } from "../interfaces/IUserRepository"

class UserRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const item = this.repository.create(data)

        await this.repository.save(item)
    }
    async getAll(): Promise<User[]> {
        const list = await this.repository.find()
        return list
    }
    async findByEmail(email: string): Promise<User> {
        const item = await this.repository.findOne({ email })
        return item
    }
    async findById(id: string): Promise<User> {
        const item = await this.repository.findOne(id)
        return item
    }
}

export { UserRepository }