const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const config = require('../config/api.config.js');

// Config and set BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Add CORS to Server
app.use(cors());

// Config and set MongoDB (mongoose)
mongoose.connect(config.mongodb.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// Register Routes
require('./routes/AccountRoutes.js')(app);

// Export Api Server
module.exports = app;