const express = require('express');
const app = express();
const db = require('./db');

const contactRoutes = require('./contact/router');

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Utilisation des routes définies pour les utilisateurs
app.use('/contact', contactRoutes);

const PORT =  3000;

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
