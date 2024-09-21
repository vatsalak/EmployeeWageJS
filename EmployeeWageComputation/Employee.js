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
  