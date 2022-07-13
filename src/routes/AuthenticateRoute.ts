import { Router } from "express"
import { UserController } from "../modules/accounts/controllers/UserController"

const router = Router()
const controller = new UserController()

router.get("/", controller.authenticate)

export { router as authenticateRoute }