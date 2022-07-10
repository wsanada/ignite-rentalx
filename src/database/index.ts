import "reflect-metadata"
import { createConnection } from "typeorm"

(async () => await createConnection())()
