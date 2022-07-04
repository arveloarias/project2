import {employeeOne} from './employeeList.js'



function employeeTemplate(){
    
  let them ='';
  let temp = ''
  let sumit = document.querySelector('#btnCheck')
  //remeber = gerencia
  sumit.addEventListener("click", function(){
      validate();
  })
  function validate(){
      
      for (let i = 0; i < employeeOne.employees.length; i++) {
          let selectLis = document.querySelector('#btnList')
          let selectlist= selectLis.options[selectLis.selectedIndex].text
          temp = `<ul>
          <li class = "employeePhoto"><img src = "images/${employeeOne.employees[i].photo}"></li>
          <li><span class ="ulTitle">Name<br></span>${employeeOne.employees[i].name}</li>
          <li><span class ="ulTitle">Position<br></span> ${employeeOne.employees[i].position}</li>
          <li><span class ="ulTitle">Employee#<br></span> ${employeeOne.employees[i].employeeNo}</li>
          <li><span class ="ulTitle">Division<br></span> ${employeeOne.employees[i].division}</li>
          <li><span class ="ulTitle">PhoneNumber<br></span> ${employeeOne.employees[i].phoneNumber}</li>
          </ul>`;

          if(selectlist === 'Full Index'){
              them += temp
          }else if(employeeOne.employees[i].division === selectlist){
              them += temp
              }
              document.querySelector(".employee").innerHTML = them
              document.querySelector(".title").innerHTML = selectlist;
          }
          them =""
      }
  validate()

}

employeeTemplate();
