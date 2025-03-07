const express = require('express');
const router = express.Router();

// Route GET pour /api/role
router.get('/', (req, res) => {
  res.status(200).json({ message: 'On role' });
});

module.exports = router;
