const testRoutes = require('./testRoutes'); // Importer la route de test

// Exporter toutes les routes
module.exports = (app) => {
  app.use('/api/hello', testRoutes); // Associer la route /api/test à la logique de test
};
