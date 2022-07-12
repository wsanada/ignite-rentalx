import { Request, Response } from "express";
import { container } from "tsyringe";
import { SpecificationService } from "../services/SpecificationService";

class SpecificationController {
    async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(SpecificationService)
        const { name, description } = request.body
        await service.create({ name, description })
        return response.status(201).send()
    }
    async getAll(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(SpecificationService)
        const list = await service.getAll()
        return response.json(list)
    }
    async findByName(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(SpecificationService)
        const { name } = request.body
        const item = await service.findByName(name)
        return response.json(item)
    }
}

export { SpecificationController }
