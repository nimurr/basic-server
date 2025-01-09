import user from "../models/user.models.js"


const createUserDB = async (payload) => {
    const result = await user.create(payload)
    return result
}

const singleUserDB = async (id) => {
    const result = await user.findById(id).select('-password')
    return result
}

const allUserDB = async () => {
    const result = await user.find().select('-password'); // Exclude the password field
    return result;
}



export const userService = {
    createUserDB,
    singleUserDB,
    allUserDB

}