// routes/ressourceRoutes.js
const express = require('express');
const router = express.Router();
const { Ressource } = require('../models'); 

// CREATE Ressource: POST /api/ressource
router.post('/', async (req, res) => {
  try {
    const newRessource = await Ressource.create(req.body);
    return res.status(201).json(newRessource);
  } catch (error) {
    console.error('Error creating ressource:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// READ All Ressources: GET /api/ressource
router.get('/', async (req, res) => {
  try {
    const ressources = await Ressource.findAll();
    return res.status(200).json(ressources);
  } catch (error) {
    console.error('Error fetching ressources:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// READ One Ressource: GET /api/ressource/:id
router.get('/:id', async (req, res) => {
  try {
    const ressource = await Ressource.findByPk(req.params.id);
    if (!ressource) {
      return res.status(404).json({ error: 'Ressource not found' });
    }
    return res.status(200).json(ressource);
  } catch (error) {
    console.error('Error fetching ressource:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// UPDATE Ressource: PUT /api/ressource/:id
router.put('/:id', async (req, res) => {
  try {
    const ressource = await Ressource.findByPk(req.params.id);
    if (!ressource) {
      return res.status(404).json({ error: 'Ressource not found' });
    }
    await ressource.update(req.body);
    return res.status(200).json(ressource);
  } catch (error) {
    console.error('Error updating ressource:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE Ressource: DELETE /api/ressource/:id
router.delete('/:id', async (req, res) => {
  try {
    const ressource = await Ressource.findByPk(req.params.id);
    if (!ressource) {
      return res.status(404).json({ error: 'Ressource not found' });
    }
    await ressource.destroy();
    return res.status(200).json({ message: 'Ressource deleted successfully' });
  } catch (error) {
    console.error('Error deleting ressource:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

