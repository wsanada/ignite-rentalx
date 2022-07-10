import "./database"
import "./shared/container"
import express from "express"
import { router } from "./routes"
import swaggerUi from "swagger-ui-express"
import swagger from "./swagger.json"

const app = express()
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger))

app.use(router)

const message = "Servidor montado na porta 3333"
app.listen(3333, "0.0.0.0", () => console.log(`--[${message}]--` + '-'.repeat(80 - 6 - message.length)))
