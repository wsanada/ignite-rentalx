import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../infra/AppError"
import { deleteFile } from "../../../utils/file"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/implementations/UserRepository"
import { ICreateUserDTO } from "../repositories/interfaces/IUserRepository"

interface IAuthenticateDTO {
    email: string
    password: string
}
interface IUserDTO {
    user: {
        name: string
        email: string
    }
    token: string
}
interface IUpdateAvatarDTO{
    user_id: string
    avatar_file: string
}

@injectable()
class UserService {
    constructor(@inject("UserRepository") private repository: UserRepository) { }

    async create(data: ICreateUserDTO): Promise<void> {
        const { email } = data

        if (await this.repository.findByEmail(email))
            throw new AppError("Usuário já cadastrado.")

        /* criptografa a senha */
        data.password = await hash(data.password, 8);

        await this.repository.create(data)
    }
    async getAll(): Promise<User[]> {
        var list = await this.repository.getAll()
        return list
    }
    async findByEmail(email: string): Promise<User> {
        var item = await this.repository.findByEmail(email)
        return item
    }
    async authenticate({ email, password }: IAuthenticateDTO): Promise<IUserDTO> {
        const user = await this.repository.findByEmail(email)
        const message = "E-mail ou senha inválidos."

        if (!user)
            throw new AppError(message)

        if (!await compare(password, user.password))
            throw new AppError(message)

        const token = sign({}, "ab9ee17d1734054c59437ccfab8dd85a", {
            subject: user.id,
            expiresIn: "1d",
        })

        return {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        }
    }
    async uploadAvatar({user_id, avatar_file}: IUpdateAvatarDTO): Promise<void> {
        const item = await this.repository.findById(user_id)

        if (!item)
            throw new AppError("Usuário não encontrato.", 404)

        await deleteFile(`./tmp/avatar/${item.avatar}`)

        item.avatar = avatar_file

        this.repository.create(item)
    }
}

export { UserService }