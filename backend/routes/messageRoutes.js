const express = require('express');
const messageQueries = require('../queries/messageQueries');

const router = express.Router();

// Ajouter un utilisateur
router.post('/', messageQueries.createMessage);

// Récupérer tous les utilisateurs
router.get('/', messageQueries.getMessages);

router.get('/:id', messageQueries.getMessage);

router.put('/:id', messageQueries.updateMessage); 

router.delete('/:id', messageQueries.deleteMessage);

module.exports = router;
