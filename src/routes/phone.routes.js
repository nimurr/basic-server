import router from "express"
import { phoneController } from "../controller/phone.controller.js"
import authCheck from "../middleware/auth.middleware.js"


const phoneRouter = router()

phoneRouter.post('/phone', authCheck("admin"), phoneController.createPhone)
phoneRouter.get('/phone', authCheck("user"), phoneController.allPhone)


export default phoneRouter;