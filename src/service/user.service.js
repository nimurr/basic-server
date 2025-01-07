import user from "../models/user.models.js"


const createUserDB = async (payload) => {
    const result = await user.create(payload)
    return result
}

const singleUserDB = async (id) => {
    const result = await user.findById(id)
    return result
}


export const userService = {
    createUserDB,
    singleUserDB

}