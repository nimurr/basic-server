import { userService } from "../service/user.service.js"

const createUser = async (req , res) => {
    const result = await userService.createUserDB(req.body)
    res.status(200).send(result)
}
const singleUser = async (req , res) => {
    const {id} = req.params
    const result = await userService.singleUserDB(id)
    res.status(200).send(result)
}
export  const userController = {
    createUser,
    singleUser
}