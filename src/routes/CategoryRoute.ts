import { Router } from "express"
import multer from "multer"
import { CategoryController } from "../controllers/CategoryController"

const router = Router()
const upload = multer({ dest: "./tmp" })
const controller = new CategoryController()

router.post("/", controller.create)
router.get("/", controller.getAll)
router.post("/import", upload.single("file"), controller.import)

export { router as categoryRoute }