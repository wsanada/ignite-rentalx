import { Request, Response } from "express";
import { container } from "tsyringe";
import { RepositoryNotTreeError, TreeRepositoryNotSupportedError } from "typeorm";
import { CategoryService } from "../services/CategoryService";

class CategoryController {
    async create(request: Request, response: Response): Promise<Response> {
        try {
            const service = container.resolve(CategoryService)
            const { name, description } = request.body

            await service.create({ name, description })

            return response.status(201).send()
        } catch (e) {
            return response.status(400).json({ error: e })
        }
    }
    async getAll(request: Request, response: Response): Promise<Response> {
        try {
            const service = container.resolve(CategoryService)
            const list = await service.getAll()
            return response.json(list)
        } catch (e) {
            return response.status(404).json({ error: e })
        }
    }
    async findByName(request: Request, response: Response): Promise<Response> {
        try {
            const service = container.resolve(CategoryService)
            const { name } = request.body

            const item = await service.findByName(name)

            return response.json(item)
        } catch (e) {
            return response.status(404).json({ error: e })
        }
    }
    async import(request: Request, response: Response): Promise<Response> {
        try {
            const service = container.resolve(CategoryService)
            const { file } = request

            await service.import(file)

            return response.send()
        } catch (e) {
            return response.status(404).json({ error: e })
        }
    }
}

export { CategoryController }