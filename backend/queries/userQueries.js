const User = require('../models/user');

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
  
exports.getUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.username = username ?? user.username;
      user.email = email ?? user.email;
      user.password = password ?? user.password;
      await user.save();
      return res.status(200).json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.destroy();
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };