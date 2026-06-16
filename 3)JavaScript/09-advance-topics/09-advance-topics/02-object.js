const Employee  = require("./01-class.js");
// import Employee from "./01-class.js";
 var emp1 = new Employee("Ali", "ali@demo.com");
console.log( emp1.getEmployeeInfo());
emp1.setJobDescription("Send Emails");
console.log(emp1.getJobDescriptions());