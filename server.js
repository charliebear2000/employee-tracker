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
      if (answer.mainMenu === 'Add a role') {
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

// function for all employees
const viewEmployees = () => {
   const sql = `SELECT employee.id AS Employee_ID, employee.first_name,
               employee.last_name, roles.title, roles.salary, 
               department.name AS department, CONCAT(emp.first_name, ' ', emp.last_name)
               AS manager_name FROM employee INNER JOIN roles ON roles.id = employee.role_id
               INNER JOIN department on department.id = roles.department_id
               LEFT JOIN employee emp ON employee.manager_id = emp.id`;

   db.query(sql, (err, sql) => {
      if(err) {
         console.log(err);
         return;
      }
      console.table(sql);
      userInput();
   });

}

// function for adding a department
const addDepartment = () => {
   inquirer.prompt([
      {
         type: 'input',
         name: 'addDept',
         message: 'Enter the name of the department.',
         validate: addDept => {
            if(addDept) {
               return true;
            } else {
               console.log('Please enter a department name.');
               return false;
            }
         }
      }
   ])
   .then(answer => {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, answer.addDept, (err, res) => {
         if(err) {
            console.log(err);
            return;
         }
         viewDepartments();
      });
   })
}

// function for adding a role
const addRole = () => {
   inquirer.prompt([
       {
         type: 'input',
         name: 'role',
         message: 'Enter the job title.',
         validate: addRole => {
            if(addRole) {
               return true;
            } else {
               console.log('Please enter a job title.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'salary',
         message: 'Enter the salary for this position.',
         validate: addSalary => {
            if(addSalary) {
               return true;
            } else {
               console.log('Please enter a salary.');
               return false;
            }
         }
      },
      {
         type: 'input',
         name: 'dept',
         message: 'Enter the department ID number for this position.',
         validate: addDept => {
            if(addDept) {
               return true;
            } else {
               console.log('Please enter the department ID number.');
               return false;
            }
         }
      }
   ])
   .then(answer => {
      const params = [answer.role, answer.salary, answer.dept]
      const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
      db.query(sql, params, (err, res) => {
         if(err) {
            console.log(err);
            return;
         }
         viewRoles();
      });
   })
}


   