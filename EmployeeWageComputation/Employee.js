// Define constants for wage per hour, working hours, and maximum conditions
const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const maxWorkingHours = 100;
const maxWorkingDays = 20;

// Function to calculate the daily wage based on employee type
function calculateDailyWage(employeeType) {
  let dailyWage;
  
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
