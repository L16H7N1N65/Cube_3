const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ newUser: newUser, message: 'Nouvel utilisateur ajouté avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création d\'un utilisateur', error: error.message });
  }
};

exports.getUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des users', error: error.message  });
    }
  };
  
