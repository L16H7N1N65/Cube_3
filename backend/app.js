// app.js

const express = require('express');
require('dotenv').config(); 

const routes = require('./routes/globalRoutes');

const app = express();
app.use(express.json());


routes(app);

module.exports = app;
