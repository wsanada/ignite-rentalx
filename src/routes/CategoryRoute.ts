import { Router } from "express"
import multer from "multer"
import { categoryController as controller } from "../controllers/CategoryController"

const router = Router()
const upload = multer({ dest: "./tmp" })

router.post("/", (request, response) => controller.create(request, response))
router.get("/", (request, response) => controller.getAll(request, response))
router.post("/import", upload.single("file"), (request, response) => controller.import(request, response))

export { router as categoryRoute }