import { Category } from "../model/Category"
import { SpecificationRepository } from "../repositories/implementations/SpecificationRepository"

interface ISpecification {
    name: string
    description: string
}

class SpecificationService {
    constructor(private repository: SpecificationRepository) { }
    create({ name, description }: ISpecification): void {
        if (this.repository.findByName(name))
            throw new Error("Especificação já cadastrada.")

        this.repository.create({ name, description })
    }
    getAll(): Category[] {
        const list = this.repository.getAll()
        return list
    }
    findByName(name: string): Category {
        const item = this.repository.findByName(name)
        return item
    }
}

export { SpecificationService }