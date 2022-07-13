import { Category } from "../../entities/Category"

interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<void>
    getAll(): Promise<Category[]>
    findByName(name: string): Promise<Category>
}

export { ICategoryRepository, ICreateCategoryDTO }