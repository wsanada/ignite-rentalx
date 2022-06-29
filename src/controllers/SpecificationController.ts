import { Request, Response } from "express";
import { SpecificationRepository } from "../repositories/implementations/SpecificationRepository";
import { SpecificationService } from "../services/SpecificationService";

class SpecificationController {
    constructor(private service: SpecificationService) { }

    create(request: Request, response: Response): Response {
        const { name, description } = request.body
        this.service.create({ name, description })
        return response.status(201).send()
    }
    getAll(request: Request, response: Response): Response {
        const list = this.service.getAll()
        return response.json(list)
    }
    findByName(request: Request, response: Response): Response {
        const { name } = request.body
        const item = this.service.findByName(name)
        return response.json(item)
    }
}

const repository = new SpecificationRepository()
const service = new SpecificationService(repository)
const specificationController = new SpecificationController(service)

export { specificationController }
