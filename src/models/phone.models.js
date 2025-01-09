import mongoose from 'mongoose';

// Define the schema
const phoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default:0,
        required: true
    }
    ,
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const phone = mongoose.model('Phone', phoneSchema);
export default phone;

