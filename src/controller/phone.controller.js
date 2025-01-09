import { phoneService } from "../service/phone.service.js";

const createPhone = async (req, res) => {
    try {
        // Retrieve the uploaded image filename
        const image = req.file.filename;

        // Combine the request body with the image
        const phoneData = {
            ...req.body,
            image // Add the image filename to the data
        };
        console.log(image);

        // console.log("Phone Data:", phoneData);

        // Save the data to the database using the service layer
        const result = await phoneService.createPhoneDB(phoneData);

        // console.log("Result from DB:", result);

        // Return the created phone data with a success status
        res.status(201).send({
            message: "Phone created successfully",
            status: 201,
            result: result,
        });
    } catch (error) {
        console.error("Error in createPhone:", error);
        res.status(500).send({ message: `Error creating phone: ${error.errors.model.name}`, error: error.errors.model.message });
    }
};

const allPhone = async (req, res) => {
    const result = await phoneService.allPhoneDB()
    res.status(200).send(result)
}

export const phoneController = {
    createPhone,
    allPhone
}