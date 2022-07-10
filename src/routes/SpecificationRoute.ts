import { Router } from "express"
import { SpecificationController } from "../controllers/SpecificationController"

const router = Router()
const controller = new SpecificationController()

router.post("/", controller.create)
router.get("/", controller.getAll)

export { router as specificationRoute }