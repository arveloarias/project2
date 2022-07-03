import Employee from "./employee.js"

  // Class employee which hold a list of employees.
  class EmployeesGroup {
    constructor(){
      this.employees = [] //Empty list of employees. I'm going to use Push() to fill it out.
    }
    //Function to create a new employee and then pass it.
    newEmployee(
      name,
      photo,
      position,
      employeeNo,
      division,
      phoneNumber
  ){
      //Instantace individualEmployee as a new employee and push it to the group.
      let employeeNew = new Employee(
        name,
        photo,
        position,
        employeeNo,
        division,
        phoneNumber
    )
      //Push new employee to the list above
      this.employees.push(employeeNew)
    }
    
  }

export default EmployeesGroup;