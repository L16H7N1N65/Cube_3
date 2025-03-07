// routes/globalRoutes.js

// const testRoutes = require('./testRoutes');
const userRoutes = require('./userRoutes');
const ressourceRoutes = require('./ressourceRoutes');

module.exports = (app) => {
  // app.use('/api', testRoutes);

  app.use('/api/user', userRoutes);

  app.use('/api/ressource', ressourceRoutes);

  // Fallback 404 route if nothing else matches
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found', message: 'Please check your URL.' });
  });
};
