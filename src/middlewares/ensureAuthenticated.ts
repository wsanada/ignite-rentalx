import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../infra/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void> {
    const auth = request.headers.authorization

    if (!auth)
        throw new AppError("Token não informado.", 401)

    const [, token] = auth.split(" ")

    try {
        const { sub } = verify(token, "ab9ee17d1734054c59437ccfab8dd85a") as IPayload

        const repository = new UserRepository()
        const user = await repository.findById(sub)

        if (!user)
            throw new AppError("Usuário não encontrado.", 401)

        request.user = { id: sub }

        next()
    } catch {
        throw new AppError("Token inválido.", 401)
    }
}