(async function() {
  const data = await fetch("https://swapi.dev/api/people/");
  const res = await data.json()
  console.log(res)
  let moviesData = res

  let dataList = document.querySelector("#dataList")
  let formData = document.querySelector(".formMovies")
  let table = document.querySelector("table")
  let Vehicles = document.querySelector(".vehicles")
  // dataList.innerHTML = "";
  moviesData.results.forEach((val, ind) => {
    let insertMoviesData = `<option class=${ind} value=${val.name}>${val.name}</option>`

    dataList.insertAdjacentHTML("beforeend", insertMoviesData)
  })

  const callApi = async(val) => {
    let getData = []
    for(let i in val){
      getData.push(fetch(val[i]))
    }
    let resP = await Promise.all(getData)
    let arrOfResP = await Promise.all(resP.map(response => response.json()))
    return arrOfResP
  }

  const fetchMoviesData = async(data) => {
    const filteredData = moviesData.results.filter((val) => {
      if(val.name == data.moviesData){
        return val
      }
    })

    let filmsArr = filteredData[0].films;

    let arrFilms = await callApi(filmsArr)
  console.log(arrFilms)
    let arrVehicles = await callApi(arrFilms[0].vehicles)
  console.log(arrVehicles)
  // arrFilms.forEach((val)=> {
  //   let td = `<td>${val.title}</td>`
  //   Title.insertAdjacentHTML("beforeend", td)
  // })
  // arrVehicles.forEach((val)=> {
  //   let td = `<td>${val.name}</td>`
  //   Vehicles.insertAdjacentHTML("beforeend", td)
  // })

  for (let i = 0; i < Math.max(arrFilms.length, arrVehicles.length); i++) {
    const film = arrFilms[i] || {};
    const vehicle = arrVehicles[i] || {};

    const row = document.createElement("tr");
    row.innerHTML = `<td>${film.title || ''}</td><td>${vehicle.name || ''}</td>`;

    table.appendChild(row);
  }

  }

  formData.addEventListener("submit", ((e) => {
  e.preventDefault();
  let data = new FormData(formData)
  let fetchedData = [...data.entries()];
  console.log(fetchedData)
  const getData = {}
  fetchedData.forEach((val) => {
    getData[val[0]] = val[1]
  })
  fetchMoviesData(getData)

  }))
  })()
