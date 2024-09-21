// Define constants for wage per hour, working hours, and working days per month
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

// Function to calculate daily wage based on employee type
function calculateDailyWage(employeeType) {
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
