const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const dotenv= require('dotenv');
const mongoose = require('mongoose')

dotenv.config()

// Database
mongoose.connect(process.env.MONGO_URI_OFFICE,
    { useNewUrlParser: true }
)
.then(() => {
    console.log('DB Connected');
});

mongoose.connection.on('error', err => {
    console.log(`DB Connection error: ${err.message}`);
});

// Routes
const postRoutes = require('./routes/post');

// Middleware: Call Morgan's dev 
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", postRoutes);

// Route
// app.get("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`NodeJS is listening on port: ${port} `);
})