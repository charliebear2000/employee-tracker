INSERT INTO department (name)
VALUES
   ('Engineering'),
   ('Technology'),
   ('Customer Care'),
   ('Product'),
   ('Data Science');

INSERT INTO roles (title, salary, department_id)
VALUES
   ('Software Engineer', 85000, 1),
   ('Data Engineer', 80000, 1),
   ('Cloud Engineer', 95000, 1),
   ('Cyber Technician', 67000, 2),
   ('IT Specialist', 92000, 2),
   ('Complaints Coordinator', 58000, 3),
   ('Customer Service Coordinator', 52000, 3),
   ('Collections Coordinator', 45000, 3),
   ('Product Manager', 70000, 4),
   ('Customer Acquisitions', 56000, 4),
   ('Data Scientist', 92000, 5),
   ('Quantitative Analyst', 120000, 5);

   INSERT INTO employee (first_name, last_name, role_id, manager_id)
   VALUES
   ('Tom', 'Adams', 3, 2),
   ('Jennifer', 'Wolf', 1, NULL),
   ('Francisco', 'Harding', 2, 2),
   ('Bruce', 'Hernandez', 1, 2),
   ('Michelle', 'Rogers', 4, NULL),
   ('Ralph', 'Smith', 5, 5),
   ('Jacob', 'Cook', 4, 5),
   ('Susan', 'Hale', 6, 9),
   ('Joseph', 'Rogers', 7, NULL),
   ('Vanessa', 'Erickson', 8, 9),
   ('Cynthia', 'Willis', 7, 9),
   ('Johnny', 'Bright', 9, Null),
   ('Elizabeth', 'Johnson', 9, 12),
   ('Chad', 'Zimmerman', 10, 12),
   ('Timothy', 'cPherson', 10, 12),
   ('David', 'Cuevas', 11, 17),
   ('Christina', 'Bryant', 12, NULL),
   ('Jordan', 'Bennett', 11, 17),
   ('Keith', 'Carlson', 12, 17),
   ('Wendy', 'Haynes', 12, 17);