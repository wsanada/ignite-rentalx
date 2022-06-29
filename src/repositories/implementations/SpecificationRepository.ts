import { Specification } from "../../model/Specification"
import { ISpecificationRepository, ICreateSpecificationDTO } from "../interfaces/ISpecificationRepository"

class SpecificationRepository implements ISpecificationRepository {
    private all: Specification[]

    constructor() {
        this.all = []
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const item: Specification = new Specification()
        Object.assign(item,
            {
                name,
                description,
            })

        this.all.push(item)
    }
    getAll(): Specification[] {
        return this.all
    }
    findByName(name: string): Specification {
        const item = this.all.find(a => a.name === name)
        return item
    }
}

export { SpecificationRepository }