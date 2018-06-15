
const express = require('express');
const router = express.Router();

// Default Route
router.get('/demo', function (req, res) {
  res.send('Demo Request');
});

// Export Controller
module.exports = router;