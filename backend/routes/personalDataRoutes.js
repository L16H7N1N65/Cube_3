// routes/personaldataRoutes.js

const express = require('express');
const router = express.Router();
const { PersonalData } = require('../models'); 

router.post('/', async (req, res) => {
  try {
    const newPersonalData = await PersonalData.create(req.body);
    return res.status(201).json(newPersonalData);
  } catch (error) {
    console.error('Error creating p. data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

});



module.exports = router;