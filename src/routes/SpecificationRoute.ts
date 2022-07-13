import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { SpecificationController } from "../modules/cars/controllers/SpecificationController"

const router = Router()
const controller = new SpecificationController()

router.use(ensureAuthenticated)
router.post("/", controller.create)
router.get("/", controller.getAll)

export { router as specificationRoute }