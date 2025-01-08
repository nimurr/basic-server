 import phone from "../models/phone.models.js"

const createPhoneDB = async (payload) => {
    const result = await phone.create(payload)
    return result
}
const allPhoneDB = async () => {
    const result = await phone.find()   
    return result ;
}

export const phoneService = {
    createPhoneDB,
    allPhoneDB
}