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
      if (answer.mainMenu === 'View all departments') {
         viewDepartments();
      }
      if (answer.mainMenu === 'View all roles') {
         viewRoles();
      }
      if (answer.mainMenu === 'View all employees') {
         viewEmployees();
      }
      if (answer.mainMenu === 'Add a department') {
         addDepartment();
      }
      if (answer.mainMenut === 'Add a role') {
         addRole();
      }
      if (answer.mainMenu === 'Add an employee') {
         addEmployee();
      }
      if (answer.mainMenu === 'Update an employee role') {
         employeeRole();
      }
      if (answer.mainMenu === 'Exit application') {
         db.end();
      }
   });
};

// function for all departments
const viewDepartments = () => {
   const sql = `SELECT department.id AS Department_ID, department.name AS Department_Name FROM department`;

   db.query(sql, (err, sql) => {
      if(err) {
         console.log(err);
         return;
      }
      console.table(sql);
      userInput();
      
   });
};

// function for all roles
const viewRoles = () => {
   const sql = `SELECT roles.id, roles.title, roles.salary, department.name AS department
               FROM roles LEFT JOIN department ON roles.department_id = department.id`;

   db.query(sql, (err, sql) => {
      if(err) {
         console.log(err);
         return;
      }
      console.table(sql);
      userInput();
      
   });
};