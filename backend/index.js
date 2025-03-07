const express = require('express');
const routes = require('./routes/globalRoutes'); 
const connectDB = require('./queries/db'); 


require('dotenv').config(); 

const app = express();
app.use(express.json());

routes(app);

connectDB();


const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

