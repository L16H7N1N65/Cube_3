// routes/globalRoutes.js

// const testRoutes = require('./testRoutes');
const userRoutes = require('./userRoutes');
const ressourceRoutes = require('./ressourceRoutes');
const personalDataRoutes = require('./personalDataRoutes')

module.exports = (app) => {
  // app.use('/api', testRoutes);

  app.use('/api/user', userRoutes);

  app.use('/api/ressource', ressourceRoutes);

  app.use('/api/PersonalData', personalDataRoutes);


  // Fallback 404 route if nothing else matches
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found', message: 'Please check your URL.' });
  });
};
