import { CustomRepositoryCannotInheritRepositoryError, getRepository, Repository } from "typeorm"
import { Specification } from "../../entities/Specification"
import { ISpecificationRepository, ICreateSpecificationDTO } from "../interfaces/ISpecificationRepository"

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository("specification")
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const item = this.repository.create({ name, description })

        await this.repository.save(item)
    }
    async getAll(): Promise<Specification[]> {
        const list = await this.repository.find()
        return list
    }
    async findByName(name: string): Promise<Specification> {
        const item = this.repository.findOne({ name })
        return item
    }
}

export { SpecificationRepository }