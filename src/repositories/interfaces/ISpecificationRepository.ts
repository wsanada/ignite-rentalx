import { Specification } from "../../model/Specification"

interface ICreateSpecificationDTO {
    name: string
    description: string
}

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): void
    getAll(): Specification[]
    findByName(name: string): Specification
}

export { ISpecificationRepository, ICreateSpecificationDTO }