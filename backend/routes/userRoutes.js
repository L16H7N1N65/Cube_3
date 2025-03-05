const express = require('express');
const router = express.Router();

// Route GET pour /api/user
router.get('/', (req, res) => {
  res.status(200).json({ message: 'On user' });
});

module.exports = router;
