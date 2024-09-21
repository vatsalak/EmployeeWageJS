// Define constants for wage per hour and working hours
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;

// Function to calculate daily wage based on employee type
function calculateWage(employeeType) {
  let dailyWage;

  // Use switch case to determine the wage based on employee type
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

// Calculate and display the wages
const fullTimeWage = calculateWage('full-time');
console.log("Full-Time Employee Daily Wage: $" + fullTimeWage);

const partTimeWage = calculateWage('part-time');
console.log("Part-Time Employee Daily Wage: $" + partTimeWage);
