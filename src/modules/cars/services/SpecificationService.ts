import { inject, injectable } from "tsyringe"
import { AppError } from "../../../infra/AppError"
import { Category } from "../entities/Category"
import { SpecificationRepository } from "../repositories/implementations/SpecificationRepository"

interface ISpecification {
    name: string
    description: string
}

@injectable()
class SpecificationService {
    constructor(@inject("SpecificationRepository") private repository: SpecificationRepository) { }

    async create({ name, description }: ISpecification): Promise<void> {
        if (await this.repository.findByName(name))
            throw new AppError("Especificação já cadastrada.")

        await this.repository.create({ name, description })
    }
    async getAll(): Promise<Category[]> {
        const list = await this.repository.getAll()
        return list
    }
    async findByName(name: string): Promise<Category> {
        const item = await this.repository.findByName(name)
        return item
    }
}

export { SpecificationService }