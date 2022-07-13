import multer from "multer"
import { resolve } from "path"
import crypto from "crypto"

export default {
    upload(folder: string = "./tmp") {

        const item = {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex")
                    const fileName = `${fileHash}-${file.originalname}`
                    return callback(null, fileName)
                }
            })
        }

        return multer(item)
    }
}