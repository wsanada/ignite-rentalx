import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

class UserController {
    async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const item = request.body

        await service.create(item)

        return response.status(201).send()
    }
    async getAll(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const list = await service.getAll()
        return response.json(list)
    }
    async findByEmail(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const { name } = request.body

        const item = await service.findByEmail(name)

        return response.json(item)
    }
    async authenticate(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const { email, password } = request.body

        const token = await service.authenticate({ email, password })

        return response.json(token)
    }
    async uploadAvatar(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService)
        const { id: user_id } = request.user
        const avatar_file = request.file.filename

        await service.uploadAvatar({user_id, avatar_file})


        return response.status(204).send()
    }
}

export { UserController }