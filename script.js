const greetingElement = document.getElementById("greetingMessage");
document.addEventListener("DOMContentLoaded", function(){
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
const weatherData= document.getElementById("weatherData");
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

  if  (data.name == "undefined"){
    cityNameElement.innerHTML="No such city exists"
    tempElement.innerHTML="Error";
    conditionElement.innerHTML="Error"
  }
  else{
  cityNameElement.innerHTML=data.name;
  tempElement.innerHTML=data.main.temp+"°C";
  conditionElement.innerHTML=(data.weather[0].main);
  }
  
  const weather = data.weather[0].main;


  console.log(weather);
  switch (weather){
    case "Clear":
      weatherMain.style.backgroundImage='url("./images/snow.gif)';
      weatherImage.src="./images/clear-sky.png";
      break;
      case "Rain":
      weatherMain.style.backgroundImage='url("./images/rain.gif")';
        weatherMain.style.backgroundPosition=" center center";
        weatherMain.style.backgroundRepeat="no-repeat";
        weatherMain.style.backgroundSize = 'cover';
        greetingElement.style.color="black";
        weatherData.color="black";
        break;
        case "Clouds":
          weatherMain.style.backgroundImage='url("./images/cloudy.gif")';
          weatherMain.style.backgroundPosition=" center center";
          weatherMain.style.backgroundRepeat='no-repeat';
          weatherData.style.color='black';  
          greetingElement.style.color="black";  
          break;
        case "Snow":
          weatherMain.style.backgroundImage='url("./images/snow.gif)';
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundPosition="center center";
          weatherImage.src="./images/snowy.png";
          break;
        case "Thunderstorm":
          weatherMain.style.backgroundImage='url("./images/thunderstorm.gif)'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundRepeat="no-repeat";
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