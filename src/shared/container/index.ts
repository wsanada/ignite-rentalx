import { container } from "tsyringe";
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ICategoryRepository } from "../../repositories/interfaces/ICategoryRepository";
import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository)
container.registerSingleton<ISpecificationRepository>("SpecificationRepository", SpecificationRepository)
