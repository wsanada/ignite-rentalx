import { NextFunction, Request, Response } from "express"
import { AppError } from "../infra/AppError"

export async function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): Promise<Response> {
    if (error instanceof AppError){
        return response.status(error.statusCode).json({ message: error.message})
    }

    return response.status(500).json({ status: "error", message: `Erro interno do servidor: ${error.message}`})
} 
