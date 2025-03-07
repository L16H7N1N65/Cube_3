const express = require('express');
const userQueries = require('../queries/userQueries.js');

const router = express.Router();

// Ajouter un utilisateur
router.post('/', userQueries.createUser);

// Récupérer tous les utilisateurs
router.get('/', userQueries.getUsers);

router.get('/:id', userQueries.getUser);

router.put('/:id', userQueries.updateUser); 

router.delete('/:id', userQueries.deleteUser);

module.exports = router;
