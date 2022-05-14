const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

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

// Start server after DB connection
db.connect(err => {
   if (err) throw err;
   console.log('Database connected.');

   });


