
const express = require('express');
const router = express.Router();

// Default Route
router.get('/', function (req, res) {
  res.send('Hello World!');
});

// Export Controller
module.exports = router;