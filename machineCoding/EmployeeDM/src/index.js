import { data } from "./data";
const func = async () => {
  const listData = document.querySelector("#listSide");
  console.log(data);
  // const data = await fetch("./data.json");
  // const res = await data.json();

  let employees = data;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  // Add Employee - START
  const createEmployee = document.querySelector(".createEmployee");
  const addEmployeeModal = document.querySelector(".addEmployee");
  const addEmployeeForm = document.querySelector(".addEmployee_create");
  employees.forEach((val) => {
    employeeList.innerHTML = `<p>${val.firstName} ${val.lastName}</p>`;
  });
};

func();
