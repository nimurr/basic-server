import dotenv from 'dotenv';
import path from 'path'; 

dotenv.config({ path: path.join(process.cwd(), '.env') });


export default {
  port: process.env.PORT || 5000,
  database: process.env.DATABASE_URL || 'mongodb://localhost:27017'
};
