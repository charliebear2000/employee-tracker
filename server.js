const express = require('express');
const mysql = require('mysql2');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
   {
      host: 'localhost',
      user: 'root',
      password: 'Cloverhill2022$',
      database: 'business'
   },
   console.log('Connected to the business database.')
);



app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`);
});

module.exports = db;