const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // username
    user: 'root',
    // password
    password: 'colin123',
    database: 'election'
  },
  console.log('Connected to the election database')
);


app.get('/', (req, res) => {
  res.json({
    message: 'Hello, world'
  });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

// start express server
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});