// Define the Employee class
class Employee {
    // Class variables
    static wagePerHour = 20;
    static fullDayHours = 8;
    static partTimeHours = 4;
    static maxWorkingHours = 100;
    static maxWorkingDays = 20;
  
    // Constructor to initialize employee type
    constructor(employeeType) {
      this.employeeType = employeeType;
      this.totalWage = 0;
      this.totalHours = 0;
      this.totalDays = 0;
    }
  
    // Method to calculate daily wage based on employee type
    calculateDailyWage() {
      switch (this.employeeType) {
        case 'full-time':
          return Employee.wagePerHour * Employee.fullDayHours;
        case 'part-time':
          return Employee.wagePerHour * Employee.partTimeHours;
        default:
          console.log("Invalid employee type");
          return 0;
      }
    }
  
    // Method to compute total wage until maximum conditions are met
    computeTotalWage() {
      while (this.totalHours < Employee.maxWorkingHours && this.totalDays < Employee.maxWorkingDays) {
        let dailyHours;
  
        // Calculate daily hours based on employee type
        switch (this.employeeType) {
          case 'full-time':
            dailyHours = Employee.fullDayHours;
            break;
          case 'part-time':
            dailyHours = Employee.partTimeHours;
            break;
          default:
            console.log("Invalid employee type");
            return 0;
        }
  
        // Add daily hours to total hours and increase the day count
        if (this.totalHours + dailyHours > Employee.maxWorkingHours) {
          break; // Stop if adding daily hours exceeds the max working hours
        }
        
        this.totalHours += dailyHours;
        this.totalDays += 1;
  
        // Add daily wage to total wage
        this.totalWage += dailyHours * Employee.wagePerHour;
      }
  
      console.log(`Employee Type: ${this.employeeType}, Total Days Worked: ${this.totalDays}, Total Hours Worked: ${this.totalHours}`);
      return this.totalWage;
    }
  }
  
  // Create instances for full-time and part-time employees
  const fullTimeEmployee = new Employee('full-time');
  const fullTimeTotalWage = fullTimeEmployee.computeTotalWage();
  console.log("Full-Time Employee Total Wage: $" + fullTimeTotalWage);
  
  const partTimeEmployee = new Employee('part-time');
  const partTimeTotalWage = partTimeEmployee.computeTotalWage();
  console.log("Part-Time Employee Total Wage: $" + partTimeTotalWage);
  