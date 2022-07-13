import { getRepository, Repository } from "typeorm"
import { Category } from "../../entities/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoryRepository"

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const item = this.repository.create({
            name,
            description
        })

        await this.repository.save(item)
    }
    async getAll(): Promise<Category[]> {
        const list = await this.repository.find()
        return list
    }
    async findByName(name: string): Promise<Category> {
        const item = await this.repository.findOne({ name })
        return item
    }
}

export { CategoryRepository }