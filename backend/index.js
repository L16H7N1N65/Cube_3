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

// Lancer le serveur sur un port défini dans .env ou 5000 par défaut
const PORT = process.env.DB_PORT;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
