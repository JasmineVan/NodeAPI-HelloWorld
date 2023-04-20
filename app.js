const express = require('express')
const app = express()
const morgan = require('morgan')

// Routes
const { getHello } = require('./routes/post');

// Middleware: Call Morgan's dev 
app.use(morgan("dev"));

// Route
app.get("/", getHello);

const port = 8080;
app.listen(port, () => {
    console.log(`NodeJS is listening on port: ${port} `);
})