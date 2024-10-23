
let button = document.getElementById("button");
let humidity = document.getElementById("number1")
let wind = document.getElementById("number2")
let precipitation =  document.getElementById("number3")
let uvindex = document.getElementById("number4")
let feellike = document.getElementById("number5")
let visibility = document.getElementById("number6")

function getdata(){
  const cityname = input.value
  document.getElementById("loadingimg").style.display = 'flex';
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=6e1125014a674ae5a1575713241110&q=${cityname}`
  )
    .then((response) => response.json())
    .then((data) => {
  document.getElementById("loadingimg").style.display = "none";
     nameloc.innerHTML = `${data.location.name}`
     datetime.innerHTML = `${data.location.localtime}`
     celcius.innerHTML = `${data.current.temp_c.toFixed()}°`
     condition.innerHTML = `${data.current.condition.text}`
     humidity.innerHTML = `${data.current.humidity}%`;
     wind.innerHTML = `${data.current.wind_kph} km/h`;
     precipitation.innerHTML = `${data.current.precip_mm} mm`;
     uvindex.innerHTML = `${data.current.uv}`;
     feellike.innerHTML = `${data.current.feelslike_c}C`;
     visibility.innerHTML = `${data.current.vis_km} km`;
     weathericon(data.current.condition.text)
    })
    .catch((error) => { 
      alert("City not found. Please try again.")
    }) 
    input.value=""
  }

function  weathericon(condition) {

  document.getElementById("sun").style.display = "none";
  document.getElementById("sunimage").style.display="none";
  document.getElementById("cloud").style.display = "none";
  document.getElementById("coludyimage").style.display="none";
  document.getElementById("rain").style.display = "none";
  document.getElementById("rainyimage").style.display="none";
  document.getElementById("snow").style.display = "none";
  document.getElementById("snowimage").style.display="none";
  document.getElementById("wind").style.display = "none";

  if (condition.includes("sunny")) {
    document.getElementById("sun").style.display = "flex";
  } else if (condition.includes("cloudy")) {
    document.getElementById("cloud").style.display = "flex";
  } else if (condition.includes("rain")) {
    document.getElementById("rain").style.display = "flex";
  } else if (condition.includes("snow")) {
    document.getElementById("snow").style.display = "flex";
  } else if (condition.includes("wind")) {
    document.getElementById("wind").style.display = "flex";
  } else {
    document.getElementById("sun").style.display = "flex";  
  }

  if (condition.includes("sunny")) {
    document.getElementById("sunimage").style.display = "flex";
  } else if (condition.includes("cloudy")) {
    document.getElementById("coludyimage").style.display = "flex";
  } else if (condition.includes("rain")) {
    document.getElementById("rainyimage").style.display = "flex";
  } else if (condition.includes("snow")) {
    document.getElementById("snowimage").style.display = "flex";
  } else {
    document.getElementById("sunimage").style.display = "flex";  
  }
}

// let suggestions = document.getElementById("suggestions")
// let cities = []
// fetch("cities.json")
//   .then(response => response.json())
//   .then(data => {cities = data })
//   .catch(error => {
//     console.error('Error loading city data:', error)
//   });
document.getElementById("suggestions").style.display = "none";
let input = document.getElementById("name");
let city = cities.json
function complete() {
  let cityname = input.value 
  if (cityname.length >= 2) { 
  document.getElementById("suggestions").style.display = "flex";
  }
}
function selectcity(cityname) {
  input.value = cityname; 
  document.getElementById("suggestions").style.display  = "none";
  getdata(); 
} 


 



 

















  










  
   

 //to make no without decimal
// let number = 12.4
// console.log(number.toFixed()	)

// console.log(result)
// function click(){
// }
//  button.addEventListener('click', getdata)

// async function getdata(){
//   let fetch =  await fetch("http://api.weatherapi.com/v1/current.json?key=6e1125014a674ae5a1575713241110&q=London&aqi=yes")
//    return await fetch
//    console.log(fetch)
// }

//  async function click(){
//        let value =input.value
//        let result = await getdata()}


