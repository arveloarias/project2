// These are the propeties of an individual employeee
// which later I'm going to pass to the list of employees
class Employee {
    constructor(
        //Define parameters
        name,
        photo,
        position,
        employeeNo,
        division,
        phoneNumber
    )
    //define properties
    {

        this.name = name;
        this.photo = photo;
        this.position = position;
        this.employeeNo = employeeNo;
        this.division = division;
        this.phoneNumber = phoneNumber;
    }

    //methods of each employees
    work() {
      console.log(this.name, "work")
    }
  }

  export default Employee;


