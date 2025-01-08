import router from "express"
import { phoneController } from "../controller/phone.controller.js"

const phoneRouter = router()

phoneRouter.post('/phone',  phoneController.createPhone)
phoneRouter.get('/phone', phoneController.allPhone)


export default phoneRouter;