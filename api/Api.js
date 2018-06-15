const express = require('express');
const expressControllers = require('express-controller');
const app = express();

// Register Controllers
app.use(require('./controllers/DefaultController'));
app.use(require('./controllers/DemoController'));

// Export Api Server
module.exports = app;