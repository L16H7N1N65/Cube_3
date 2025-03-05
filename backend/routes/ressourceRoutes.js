const express = require('express');
const router = express.Router();

// Route GET pour /api/ressource
router.get('/', (req, res) => {
  res.status(200).json({ message: 'On ressource' });
});



module.exports = router;