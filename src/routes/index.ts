import { Router } from "express";
import { authenticateRoute } from "./AuthenticateRoute";
import { categoryRoute } from "./CategoryRoute";
import { specificationRoute } from "./SpecificationRoute";
import { userRoute } from "./UserRoute";

const router = Router()

router.get("/", (request, response) => response.send(`Servidor montado.... ${new Date()}`))
router.use("/token", authenticateRoute)
router.use("/categories", categoryRoute)
router.use("/specifications", specificationRoute)
router.use("/users", userRoute)

export { router }
