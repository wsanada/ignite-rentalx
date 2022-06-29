import { Request, Response } from "express";
import { CategoryRepository } from "../repositories/implementations/CategoryRepository";
import { CategoryService } from "../services/CategoryService";

class CategoryController {
    constructor(private service: CategoryService) { }

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
    import(request: Request, response: Response): Response {
        const { file } = request
        this.service.import(file)
        return response.send()
    }
}

const repository = new CategoryRepository()
const service = new CategoryService(repository)
const categoryController = new CategoryController(service)

export { categoryController }
