const Message = require('../models/message');

exports.createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json({ newMessage: newMessage, message: 'Nouveau message ajouté avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création d\'un message', error: error.message });
  }
};

exports.getMessages = async (req, res) => {
    try {
      const messages = await Message.findAll();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des messages', error: error.message  });
    }
  };
  
exports.getMessage = async (req, res) => {
    try {
      const message = await Message.findByPk(req.params.id);
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      return res.status(200).json(message);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.updateMessage = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Message.findByPk(req.params.id);
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

  exports.deleteMessage = async (req, res) => {
    try {
      const user = await Message.findByPk(req.params.id);
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