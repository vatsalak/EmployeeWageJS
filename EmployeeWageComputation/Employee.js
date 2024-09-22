<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Function to check employee attendance
function checkAttendance() {
    // Generate a random number between 0 and 1
    let attendance = Math.floor(Math.random() * 2); // 0 or 1
  
    // Check if employee is present or absent
    if (attendance === 1) {
      console.log("Employee is Present");
    } else {
      console.log("Employee is Absent");
    }
  }
  
  // Call the function to check attendance
  checkAttendance();
  

// Define the constants
const wagePerHour = 20;
const fullDayHours = 8;

// Calculate the daily wage
const dailyWage = wagePerHour * fullDayHours;

// Display the result
console.log("Daily Employee Wage: $" + dailyWage);
>>>>>>> UC2-Branch
=======
// Define the constants
=======
// Define constants for wage per hour and working hours
>>>>>>> UC4-branch
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;

<<<<<<< HEAD
// Calculate the daily wage for full-time and part-time employees
const fullTimeWage = wagePerHour * fullDayHours;
const partTimeWage = wagePerHour * partTimeHours;

// Display the results
console.log("Full-Time Employee Daily Wage: $" + fullTimeWage);
console.log("Part-Time Employee Daily Wage: $" + partTimeWage);
>>>>>>> UC3-Branch
=======
// Function to calculate daily wage based on employee type
function calculateWage(employeeType) {
=======
// Define constants for wage per hour, working hours, and working days per month
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

// Function to calculate daily wage based on employee type
function calculateDailyWage(employeeType) {
>>>>>>> UC5-Branch
  let dailyWage;

  // Use switch case to determine the wage based on employee type
=======
// Define constants for wage per hour, working hours, and maximum conditions
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const maxWorkingHours = 100;
const maxWorkingDays = 20;

// Function to calculate the daily wage based on employee type
function calculateDailyWage(employeeType) {
  let dailyWage;
  
>>>>>>> UC6-Branch
  switch (employeeType) {
    case 'full-time':
      dailyWage = wagePerHour * fullDayHours;
      break;
    case 'part-time':
      dailyWage = wagePerHour * partTimeHours;
      break;
    default:
      dailyWage = 0; // Default case for invalid input
      console.log("Invalid employee type");
      break;
  }

  return dailyWage;
}

<<<<<<< HEAD
<<<<<<< HEAD
// Calculate and display the wages
const fullTimeWage = calculateWage('full-time');
console.log("Full-Time Employee Daily Wage: $" + fullTimeWage);

const partTimeWage = calculateWage('part-time');
console.log("Part-Time Employee Daily Wage: $" + partTimeWage);
>>>>>>> UC4-branch
=======
// Function to calculate monthly wage based on daily wage
function calculateMonthlyWage(employeeType) {
  const dailyWage = calculateDailyWage(employeeType);
  return dailyWage * workingDaysPerMonth;
}

// Calculate and display the monthly wages
const fullTimeMonthlyWage = calculateMonthlyWage('full-time');
console.log("Full-Time Employee Monthly Wage: $" + fullTimeMonthlyWage);

const partTimeMonthlyWage = calculateMonthlyWage('part-time');
console.log("Part-Time Employee Monthly Wage: $" + partTimeMonthlyWage);
>>>>>>> UC5-Branch
=======
// Function to calculate total wages till maximum conditions are met
function calculateTotalWage(employeeType) {
  let totalWage = 0;
  let totalHours = 0;
  let totalDays = 0;

  // Continue adding wages until maximum hours or days are reached
  while (totalHours < maxWorkingHours && totalDays < maxWorkingDays) {
    let dailyHours;
    
    switch (employeeType) {
      case 'full-time':
        dailyHours = fullDayHours;
        break;
      case 'part-time':
        dailyHours = partTimeHours;
        break;
      default:
        console.log("Invalid employee type");
        return 0;
    }

    totalHours += dailyHours;
    totalDays += 1;

    if (totalHours > maxWorkingHours) {
      totalHours -= dailyHours; // Revert to the previous state before exceeding max hours
      break;
    }

    totalWage += dailyHours * wagePerHour;
  }

  console.log(`Total Days Worked: ${totalDays}, Total Hours Worked: ${totalHours}`);
  return totalWage;
}

// Calculate and display the total wages till condition is met for full-time and part-time employees
const fullTimeTotalWage = calculateTotalWage('full-time');
console.log("Full-Time Employee Total Wage: $" + fullTimeTotalWage);

const partTimeTotalWage = calculateTotalWage('part-time');
console.log("Part-Time Employee Total Wage: $" + partTimeTotalWage);
>>>>>>> UC6-Branch
