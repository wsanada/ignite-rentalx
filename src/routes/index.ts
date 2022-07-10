import { Router } from "express";
import { categoryRoute } from "./CategoryRoute";
import { specificationRoute } from "./SpecificationRoute";

const router = Router()

router.get("/", (request, response) => response.send(`Servidor montado.... ${new Date()}`))
router.use("/categories", categoryRoute)
router.use("/specifications", specificationRoute)

export { router }
