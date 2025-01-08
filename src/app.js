import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';

export const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

//=================== Routes =================
app.use('/api/v1', userRouter);















//=================== API error handller  ================

// Custom 404 Middleware for Routes Not Found
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found',
    });
});

// Centralized Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    const statusCode = err.status || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
});
