const express = require('express');
const router = express.Router();

// Route GET pour tester l'API
router.get('/', (req, res) => {
  res.send('Hello to the Martin\'s API!');
});

module.exports = router;
