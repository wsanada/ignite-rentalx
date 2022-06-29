import { Category } from "../../model/Category"

interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): void
    getAll(): Category[]
    findByName(name: string): Category
}

export { ICategoryRepository, ICreateCategoryDTO }