(async function () {
  let data = await fetch("./src/data.json");
  let json = await data.json();
  let employeeList = json;
  console.log(employeeList);
  let empDataList = document.querySelector(".empDataList");
  let empFormData = document.querySelector(".form");

  const renderData = () => {
    empDataList.innerHTML = "";
    employeeList.forEach((val) => {
      let tr = `<tr>
      <td>${val.firstName}</td>
      <td>${val.email}</td>
      <td>${val.number}</td>
      <td>${val.dob}</td>
      </tr>`;
      empDataList.insertAdjacentHTML("beforeend", tr);
    });
  };
  renderData();

  const validate = (data) => {
    let numErr = document.querySelector(".numberError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let success = true;
    let error = {};
    numErr.textContent = "";
    if (data.number.toString().length != 10) {
      success = false;
      numErr.textContent = "please enter 10 digits";
    }
    if (!emailPattern.test(data.email)) {
      success = false;
      numErr.textContent = "please enter 10 digits";
    }
    return { success, error };
  };

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataSet = new FormData(empFormData);
    let formArr = [...dataSet.entries()];
    let getData = {};
    formArr.forEach((val) => {
      getData[val[0]] = val[1];
    });
    let validateForm = validate(getData);
    if (validateForm.success) {
      getData.id = employeeList[employeeList.length - 1].id + 1;
      employeeList.push(getData);
      renderData();
      empFormData.reset();
    }
  });
})();


//! throttle


(async function () {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();

  const userData = json.products;

  userData.forEach((val) => {
    let pTag = `<p>${val.title}</p>`;
    document.querySelector("#app").insertAdjacentHTML("beforebegin", pTag);
  });

  const debounce = () => {
    let timer = null;
    return function (val) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        console.log(val);
      }, 700);
    };
  };

  const throttle = () => {
    let timer = null;
    return function (val) {
      if (!timer) {
        timer = setTimeout(() => {
          console.log(val, "throttle");
          clearTimeout(timer);
          timer = null;
        }, 500);
      }
    };
  };

  let thr = throttle();

  let deb = debounce();

  document.querySelector(".searchBox").addEventListener("input", (e) => {
    deb(e.target.value);
    thr(e.target.value);
  });

  // const promiseAll = [
  //    fetch("https://dummyjson.com/products/1"),
  //    fetch("https://dummyjson.com/products/2"),
  //    fetch("https://dummyjson.com/products/3")
  // ]

  // let response = await Promise.all(promiseAll)
  // let [response1, response2, response3] = response;
  // let res1 = await response1.json()
  // let res2 = await response2.json()
  // let res3 = await response3.json()

  // console.log(res1,res2,res3)

  // document.querySelector("#app").insertAdjacentHTML("beforeend",`<p>${res1.title} ${res2.title} ${res2.title}</p>`)
})();
