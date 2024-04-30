// Load the express module
const express = require('express');

// Create an express application
const app = express();

// Import the service file
const service = require('./service');

// Define the port to run the server on
const PORT = process.env.PORT || 8080;

// Define a route for HTTP GET requests to the root URL ('/')
app.get('/', (req, res) => {
    // Use the getGreeting function from the service module
    res.send(service.getGreeting());
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

