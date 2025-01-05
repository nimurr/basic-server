import mongoose from 'mongoose';

// Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    } 
}, { timestamps: true });
 

const user = mongoose.model('User', userSchema);
export default user;
