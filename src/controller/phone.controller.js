import { phoneService } from "../service/phone.service.js"

const createPhone = async (req , res) => {
    const result = await phoneService.createPhoneDB(req.body)
    res.status(200).send(result)
}
const allPhone = async (req , res) => {
    const result = await phoneService.allPhoneDB()
    res.status(200).send(result)
}

export const phoneController = {
    createPhone,
    allPhone
}