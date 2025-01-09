import router from "express"
import { userController } from "../controller/user.controller.js"
import authCheck from "../middleware/auth.middleware.js"

const userRouter = router()

userRouter.post('/user/register' ,userController.createUser)
userRouter.post('/user/login', userController.userLogin)
userRouter.get('/user',  authCheck("admin"), userController.allUser)
userRouter.get('/user/:id', authCheck("user") ,  userController.singleUser)


export default userRouter;