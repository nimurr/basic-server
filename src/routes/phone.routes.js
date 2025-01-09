import router from "express";
import { phoneController } from "../controller/phone.controller.js";
import authCheck from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.middleware.js";

const phoneRouter = router();

// Reordered middleware to ensure authCheck runs before file upload
phoneRouter.post('/phone', authCheck("admin"), upload.single('image'), phoneController.createPhone);
phoneRouter.get('/phone', authCheck("user"), phoneController.allPhone);

export default phoneRouter;
