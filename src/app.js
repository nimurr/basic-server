import express  from 'express';
import cors from 'cors'
import userRouter from './routes/user.routes.js'; 
import phoneRouter from './routes/phone.routes.js';

export const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors())


app.use('/' , userRouter)
app.use('/v1/' , phoneRouter)





