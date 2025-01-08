// import dotenv from 'dotenv';
// import path from 'path'; 


// dotenv.config({ path: path.join(process.cwd(), '.env') });


// export default {
//   port: process.env.PORT || 5000,
//   database: process.env.DATABASE_URL || 'mongodb://localhost:27017'
// };


import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
    console.error('Error loading .env file:', result.error);
} else {
    console.log('Environment variables loaded:', result.parsed);
}

export default {
  port: process.env.PORT,
  database: process.env.DATABASE_URL
};


