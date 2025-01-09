import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import phoneRouter from './routes/phone.routes.js';

export const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

//=================== Routes =================
app.use('/api/v1', userRouter);
app.use('/api/v1', phoneRouter);












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
    console.error(err.stack); // Log the entire error stack for debugging

    const statusCode = err.status || 500;

    // Extract validation error paths if they exist
    const errorPaths = err.errors
        ? Object.keys(err.errors).map((key) => ({
              path: err.errors[key].path,
              message: err.errors[key].message,
          }))
        : null;

    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        errors: errorPaths || null, // Include validation paths if present
    });
});
