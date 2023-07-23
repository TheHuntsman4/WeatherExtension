document.addEventListener("DOMContentLoaded", function(){
    const greetingElement = document.getElementById("greetingMessage");
    const Time = new Date().getHours();

    let message;
    if(Time>=0 && Time<12){
        message="Good Morning";
    }
    else if(Time>=12 && Time < 18){
        message="Good Afternoon";
    }
    else{
        message="Good Evening"
    }
    greetingElement.innerHTML=message;
});

const APIKey = "0583365f139ec165ccba2b00c1ea7b11";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const weatherMain = document.getElementById("weather-main");
const query = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cityNameElement = document.getElementById("city-name");
const conditionElement = document.getElementById("weather-condition");
const tempElement = document.getElementById("temp");

async function getWeather(city){

  const response = await fetch(APIURL+"q="+city+`&appid=${APIKey}`);
  var data = await response.json();

  console.log(data);
  console.log(query.value);
  console.log(data.name);

  cityNameElement.innerHTML=data.name;
  tempElement.innerHTML=data.main.temp;
  conditionElement.innerHTML=data.weather[0].description;
  
  
  const weather = data.weather[0].main;
  console.log(weather);

  switch (weather){
    case "Clear":
      weatherMain.style.background="linear-gradient(129deg, #A1973B 25.87%, #00D2EF 100%)";
      break;
      case "Rain":
        weatherMain.style.background="linear-gradient(129deg, #2C2A73 25.87%, rgba(140, 200, 255, 0.00) 100%)"
        break;
        case "Cloud":
          weatherMain.style.background="inear-gradient(130deg, #2C2A73 25.87%, rgba(140, 200, 255, 0.00) 100%)"
          break;
        case "Snow":
          weatherMain.style.background="";
          break;
        case "Thunderstorm":
          weatherMain.style.background="";
          break;
        case "Drizzle":
          weatherMain.style.background="";
          break;
        case "Mist":
          weatherMain.style.background="";
          break;
        case "Fog":
          weatherMain.style.background="";
          break;
        case "Windy":
          weatherMain.style.background="";
          break;
        case "Heat Wave":
          weatherMain.style.background="";
          break;
        case "Scorching":
          weatherMain.style.background="";
          break;
      default:
      weatherMain.style.background="black";
      break;
      }
}

searchButton.addEventListener("click",()=>{
  getWeather(query.value);
})

query.addEventListener("keypress",function(event){
  if(event.key=="Enter"){
    getWeather(query.value);
  }
})