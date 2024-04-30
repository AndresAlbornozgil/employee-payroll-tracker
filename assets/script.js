// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // An empty array to store employee objects
  const employeesArray = [];

  // Gets number of employees from user's input
  const numberOfEmployees = parseInt(prompt('Enter the number of employees:'));

  // Loops though each employee to collect the data
  for (let i = 0; i < numberOfEmployees; i++) {

    // Gets the user's input for each employees's data
    const firstName = prompt(`Enter the first name of employee ${i + 1}:`);
    const lastName = prompt(`Enter the last name of employee ${i + 1}:`);
    const salary = parseFloat(prompt(`Enter the salary of employee ${i + 1}:`));

    // Creates an employee object and pushes it to the array
    const employee = { firstName, lastName, salary };
    employeesArray.push(employee);
  }
  
// Returns the array of employees object
return employeesArray;
}

// Displays the average employee salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // Calculates the total employee salary
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);

  // Calculates average employee salary
  const averageSalary = totalSalary / employeesArray.length;

  // Displays average employee salary
  console.log('Average Salary:', averageSalary.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Gets a random index within the range of the array's length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Gets a random employee object
  const randomEmployee = employeesArray[randomIndex];

  // Displays a random employee
  console.log('Random Employee:', randomEmployee);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
