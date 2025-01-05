const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to Express!');
});

// Start the server
const PORT = 3000; // or any port of your choice
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
