import { Router } from "express"
import { specificationController as controller } from "../controllers/SpecificationController"

const router = Router()

router.post("/", (request, response) => controller.create(request, response))
router.get("/", (request, response) => controller.getAll(request, response))

export { router as specificationRoute }