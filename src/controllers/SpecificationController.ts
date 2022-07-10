import { Request, Response } from "express";
import { container } from "tsyringe";
import { SpecificationService } from "../services/SpecificationService";

class SpecificationController {
    create(request: Request, response: Response): Response {
        const service = container.resolve(SpecificationService)
        const { name, description } = request.body
        service.create({ name, description })
        return response.status(201).send()
    }
    getAll(request: Request, response: Response): Response {
        const service = container.resolve(SpecificationService)
        const list = service.getAll()
        return response.json(list)
    }
    findByName(request: Request, response: Response): Response {
        const service = container.resolve(SpecificationService)
        const { name } = request.body
        const item = service.findByName(name)
        return response.json(item)
    }
}

export { SpecificationController }
