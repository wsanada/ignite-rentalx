import { Category } from "../../model/Category"
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoryRepository"

class CategoryRepository implements ICategoryRepository {
    private all: Category[]

    constructor() {
        this.all = []
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const item: Category = new Category()
        Object.assign(item,
            {
                name,
                description,
            })

        this.all.push(item)
    }
    getAll(): Category[] {
        return this.all
    }
    findByName(name: string): Category {
        const item = this.all.find(a => a.name === name)
        return item
    }
}

export { CategoryRepository }