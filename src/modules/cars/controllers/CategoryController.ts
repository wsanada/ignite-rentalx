import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoryService } from "../services/CategoryService";

class CategoryController {
    async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CategoryService)
        const { name, description } = request.body

        await service.create({ name, description })

        return response.status(201).send()
    }
    async getAll(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CategoryService)
        const list = await service.getAll()
        return response.json(list)
    }
    async findByName(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CategoryService)
        const { name } = request.body

        const item = await service.findByName(name)

        return response.json(item)
    }
    async import(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CategoryService)
        const { file } = request

        await service.import(file)

        return response.send()
    }
}

export { CategoryController }