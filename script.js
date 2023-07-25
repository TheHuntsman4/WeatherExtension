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
const weatherImage = document.getElementById("weather-image");

async function loaclDataFunction(){

var loaclData = await fetch(APIURL+"q="+"kollam"+`&appid=${APIKey}`);
var kollamData= await loaclData.json();
cityNameElement.innerHTML=kollamData.name;
conditionElement.innerHTML=kollamData.weather[0].main;
tempElement.innerHTML=kollamData.main.temp;" °C"

console.log(kollamData);

}

loaclDataFunction();
async function getWeather(city){

  const response = await fetch(APIURL+"q="+city+`&appid=${APIKey}`);
  var data = await response.json();

  console.log(data);
  console.log(query.value);
  console.log(data.name);

  cityNameElement.innerHTML=data.name;
  tempElement.innerHTML=data.main.temp+" °C";
  conditionElement.innerHTML=(data.weather[0].main);
  
  
  const weather = data.weather[0].main;
  console.log(weather);
  switch (weather){
    case "Clear":
      weatherMain.style.background="linear-gradient(129deg, #A1973B 25.87%, #00D2EF 100%)";
      weatherImage.src="./images/clear-sky.png";
      break;
      case "Rain":
        weatherMain.style.background="linear-gradient(129deg, #2C2A73 25.87%, rgba(140, 200, 255, 0.00) 100%)"
        weatherImage.src="./images/raining.png";
        break;
        case "Clouds":
          weatherMain.style.background="linear-gradient(130deg, #2C2A73 25.87%, rgba(140, 200, 255, 0.00) 100%)"
          weatherImage.src="./images/clear-sky.png";
          break;
        case "Snow":
          weatherMain.style.background="linear-gradient(to left top, #18cee9, #53d3e4, #73d8e1, #8edddf, #a5e1df)";
          weatherImage.src="./images/snowy.png";
          break;
        case "Thunderstorm":
          weatherMain.style.background="linear-gradient(129deg, #1E2627 25.87%, rgba(17, 183, 205, 0.00) 100%)";
          weatherImage.src="./images/thunder.png";
          break;
        case "Drizzle":
          weatherMain.style.background="linear-gradient(to left top, #1873e9, #0079cc, #0076a3, #106d7c, #486261)";
          weatherImage.src="./images/overcast.png";
          break;
        case "Mist":
        case "Haze":
          weatherMain.style.background="linear-gradient(to left top, #8eb0dc, #8dbbda, #96c4d7, #a5ccd3, #b7d3d2)";
          weatherImage.src="./images/haze.png";
          break;
        case "Fog":
          weatherMain.style.background="linear-gradient(to left top, #8eb0dc, #7aa8c7, #709fb1, #6d959b, #6d8988)";
          weatherImage.src="./images/fog.png";
          break;
        case "Windy":
          weatherMain.style.background="linear-gradient(to left top, #8eb0dc, #7aa8c7, #709fb1, #6d959b, #6d8988)";
          weatherImage.src="./images/windy.png";
          break;
        case "Heat Wave":
        case "Scorching":
          weatherMain.style.background="linear-gradient(to left top, #cacd7d, #ccb35a, #cf973e, #d2792d, #d35529)";
          weatherImage.src="./images/heat-wave.png";
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