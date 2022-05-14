const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');

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
   userInput();

   });

// inquirer prompts
const userInput = () => {
   inquirer.prompt ([
      {
      type: 'list',
      name: 'mainMenu',
      message: 'What would you like to do?',
      choices: ['View all departments',
               'View all roles',
               'View all employees',
               'Add a department',
               'Add a role',
               'Add an employee',
               'Update an employee role',
               'Exit application']
      }
   ])
   .then(answer => {
      if (answer.userInput === 'View all departments') {
         viewDepartments();
      }
      if (answer.userInput === 'View all roles') {
         viewRoles();
      }
      if (answer.userInput === 'View all employees') {
         viewEmployees();
      }
      if (answer.userInput === 'Add a department') {
         addDepartment();
      }
      if (answer.userInput === 'Add a role') {
         addRole();
      }
      if (answer.userInput === 'Add an employee') {
         addEmployee();
      }
      if (answer.userInput === 'Update an employee role') {
         employeeRole();
      }
      if (answer.userInput === 'Exit application') {
         db.end();
      }
   });
};

