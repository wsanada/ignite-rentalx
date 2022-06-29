import { Router } from "express";
import { categoryRoute } from "./routes/CategoryRoute";
import { specificationRoute } from "./routes/SpecificationRoute";

const router = Router()

router.get("/", (request, response) => response.send("Servidor montado"))
router.use("/categories", categoryRoute)
router.use("/specifications", specificationRoute)

export { router }
