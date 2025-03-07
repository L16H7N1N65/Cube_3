const testRoutes = require('./testRoutes'); // Import route de test
const userRoutes = require('./userRoutes'); // Import route de user
const ressourceRoutes = require('./ressourceRoutes'); // Import route de ressource
const messageRoutes = require('./messageRoutes'); // Import route de message


// Exporter toutes les routes
module.exports = (app) => {
  app.use('/api', testRoutes); // Associer la route /api à la logique de test

  app.use('/api/user', userRoutes); // Associer la route /api/user à la logique de user

  app.use('/api/ressource', ressourceRoutes); // Associer la route /api/ressource à la logique de ressource

  app.use('/api/message', messageRoutes);
  // Route non trouvée
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found', message: 'Please check your URL.' });
  });
};
