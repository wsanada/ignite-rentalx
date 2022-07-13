import { Router } from "express"
import uploader from "../middlewares/uploader"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { UserController } from "../modules/accounts/controllers/UserController"

const router = Router()
const controller = new UserController()
const uploadAvatar = uploader.upload("./tmp/avatar")

router.use(ensureAuthenticated)
router.post("/", controller.create)
router.get("/", controller.getAll)
router.patch("/avatar", uploadAvatar.single("avatar"), controller.uploadAvatar)

export { router as userRoute }