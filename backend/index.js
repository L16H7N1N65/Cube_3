const express = require('express');
const routes = require('./routes/globalRoutes'); // Importer toutes les routes de l'API
const { route } = require('./routes/testRoutes');
const connectDB = require('./queries/db'); // Importer la fonction de connexion
require('dotenv').config(); // Charger les variables d'environnement

// Initialiser l'application Express
const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

routes(app);

connectDB();


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

