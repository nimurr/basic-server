import { userService } from "../service/user.service.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from "../models/user.models.js";


const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const isUserExists = await user.findOne({ email: email })
    //============= isUserExists check ==============
    if (isUserExists) {
        return res.status(400).send({ message: "User Email already exists" })
    }
    else if (!name || !email || !password) {
        return res.status(400).send({ message: "All fields are required" })
    }

    //============= Password Hashing ==============
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
    //============= User Creation ==============
    const result = await userService.createUserDB(req.body)
    //============= Token Creation ==============
    const token = jwt.sign({ id: result._id, email: result.email }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).send({
        message: "User Registered successfully !", status: 201,
        user: { id: result._id, email: result.email, name: result.name }, token: token
    })


}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send({ message: "All fields are required !", status: 400 })
    }
    const result = await user.findOne({ email: email })

    if (result) {
        const isPasswordCorrect = await bcrypt.compare(password, result.password)
        if (!isPasswordCorrect) {
            res.status(400).send({ message: "Password is incorrect", status: 400 })
        }
        else {
            if (isPasswordCorrect && email == result.email) {
                const token = jwt.sign({ id: result._id, email: result.email , role : result.role }, process.env.JWT_SECRET, { expiresIn: '30d' });

                res.status(200).send({ message: "User LoggedIn successfully !", status: 200, user: { id: result._id, email: result.email, name: result.name , role : result.role }, token: token })
            }
            else {
                res.status(400).send({ message: "Password is incorrect", status: 400 })
            }
        }
    }
    else {
        res.status(400).send({ message: "User not found !", status: 400 })
    }
}

const singleUser = async (req, res) => {
    const { id } = req.params
    const result = await userService.singleUserDB(id)
    res.status(200).send({
        message: "Single User",
        status: 200,
        result: result
    })
}

const allUser = async (req, res) => {

    const result = await userService.allUserDB();
    res.status(200).send({
        message: "All Users",
        status: 200,
        result: result
    })
}

export const userController = {
    createUser,
    userLogin,
    allUser,
    singleUser
}