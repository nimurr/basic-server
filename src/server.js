import mongoose from "mongoose";
import { app } from "./app.js";
import config from "./config/index.js";


async function mainserver() {
    try {
        // Uncomment this if you want to connect to MongoDB
        await mongoose.connect(`${config.database}`);
        app.listen(config.port, () => {
            console.log(`Server running on port: ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
mainserver();

