const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);

// default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

// start express server
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});