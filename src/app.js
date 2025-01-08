import express  from 'express';
import cors from 'cors'
import userRouter from './routes/user.routes.js';  


export const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors())

 

app.use('/api/v1' , userRouter) 



