 import router from "express"
import { userController } from "../controller/user.controller.js"
 
  const userRouter =  router()

  userRouter.post('/user' , userController.createUser)
  userRouter.get('/user/:id' , userController.singleUser)

  export default userRouter