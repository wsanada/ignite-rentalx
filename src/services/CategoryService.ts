import { inject, injectable } from "tsyringe"
import { Category } from "../entities/Category"
import { CategoryRepository } from "../repositories/implementations/CategoryRepository"
import fs from "fs"
import { parse } from "csv-parse"

interface ICategory {
    name: string
    description: string
}

@injectable()
class CategoryService {
    constructor(@inject("CategoryRepository") private repository: CategoryRepository) { }

    private loadCSV(file: Express.Multer.File): Promise<ICategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const parseFile = parse()
            const list: ICategory[] = []

            stream.pipe(parseFile)

            parseFile.on("data", async (line: string) => {
                const [name, description] = line
                list.push({ name, description })
            }).on("end", () => {
                fs.promises.unlink(file.path)
                resolve(list)
            }).on("error", (e) => {
                reject(e)
            })
        })
    }

    async create({ name, description }: ICategory): Promise<void> {
        if (await this.repository.findByName(name))
            throw new Error("Categoria já cadastrada.")

        await this.repository.create({ name, description })
    }
    async getAll(): Promise<Category[]> {
        var list = await this.repository.getAll()
        return list
    }
    async findByName(name: string): Promise<Category> {
        var item = await this.repository.findByName(name)
        return item
    }
    async import(file: Express.Multer.File): Promise<void> {
        const list = await this.loadCSV(file)

        list.map(async item => {
            const { name, description } = item
            if (!await this.findByName(name))
                await this.repository.create({ name, description })
        })
    }
}

export { CategoryService }