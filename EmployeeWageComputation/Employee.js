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
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;

// Calculate the daily wage for full-time and part-time employees
const fullTimeWage = wagePerHour * fullDayHours;
const partTimeWage = wagePerHour * partTimeHours;

// Display the results
console.log("Full-Time Employee Daily Wage: $" + fullTimeWage);
console.log("Part-Time Employee Daily Wage: $" + partTimeWage);
>>>>>>> UC3-Branch
