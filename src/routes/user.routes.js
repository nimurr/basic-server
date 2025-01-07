import router from "express"
import { userController } from "../controller/user.controller.js"

const userRouter = router()

userRouter.post('/user/register', userController.createUser)
userRouter.post('/user/login', userController.userLogin)

userRouter.get('/user/:id', userController.singleUser)




export default userRouter;