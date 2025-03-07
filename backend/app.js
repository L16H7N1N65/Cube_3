// app.js
const express = require('express');
require('dotenv').config();

const routes = require('./routes/globalRoutes'); 
const connectDB = require('./queries/db'); 


const app = express();
app.use(express.json());


routes(app);
connectDB();
module.exports = app;
