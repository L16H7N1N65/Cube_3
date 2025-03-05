const express = require('express');
const router = express.Router();

// Route GET pour /api/hello
router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello to the Martin\'s API!' });
});

// Route GET pour /api
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Nothing on /api. Try on API\'s status on /api/hello!' });
});

module.exports = router;
