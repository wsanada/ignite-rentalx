import { Category } from "../model/Category"
import { CategoryRepository } from "../repositories/implementations/CategoryRepository"
import fs from "fs"
import { parse } from "csv-parse"

interface ICategory {
    name: string
    description: string
}

class CategoryService {
    constructor(private repository: CategoryRepository) { }

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

    create({ name, description }: ICategory): void {
        if (this.repository.findByName(name))
            throw new Error("Categoria já cadastrada.")

        this.repository.create({ name, description })
    }
    getAll(): Category[] {
        var list = this.repository.getAll()
        return list
    }
    findByName(name: string): Category {
        var item = this.repository.findByName(name)
        return item
    }
    async import(file: Express.Multer.File): Promise<void> {
        const list = await this.loadCSV(file)

        list.map(item => {
            const { name, description } = item
            if (!this.findByName(name))
                this.repository.create({ name, description })
        })
    }
}

export { CategoryService }