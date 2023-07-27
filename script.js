const greetingElement = document.getElementById("greetingMessage");
document.addEventListener("DOMContentLoaded", function(){
    const Time = new Date().getHours();

    let message;
    if(Time>=0 && Time<6){
        message="Good Morning ";
    }
    else if(Time>=6 && Time<12){
      message="Good Morning 🌞"
    }
    else if(Time>=12 && Time < 18){
        message="Good Afternoon 🌤️";
    }
    else{
        message="Good Evening 🌚"
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
weatherSwitch(kollamData.weather[0].main);
tempElement.innerHTML=kollamData.main.temp;" °C"

console.log(kollamData);

}

loaclDataFunction();
async function getWeather(city){
  if(city!=""){
  const response = await fetch(APIURL+"q="+city+`&appid=${APIKey}`);
  var data = await response.json();
  }
  else{
    cityNameElement.innerHTML=""
    tempElement.innerHTML="No city found";
    tempElement.style.fontSize="50px"
    conditionElement.innerHTML="";
    weatherMain.style.backgroundImage='url(./images/sad.png)';
    greetingElement.style.color="black";
    weatherData.style.color="black";
  }
  console.log(data);
  console.log(query.value);
  console.log(data.name);
  console.log(data.message);

  if  (data.message == "city not found"){
    cityNameElement.innerHTML="No city found"
    tempElement.innerHTML="ERROR";
    conditionElement.innerHTML="ERROR";
    weatherMain.style.backgroundImage='url(./images/sad.png)';
    greetingElement.style.color="black";
    weatherData.style.color="black";
  }
  else{
  cityNameElement.innerHTML=data.name;
  tempElement.innerHTML=data.main.temp+"°C";
  conditionElement.innerHTML=(data.weather[0].main);
  }
  
  const weather = data.weather[0].main;


  console.log(weather);
  weatherSwitch(weather);
}

function weatherSwitch(weather){
  switch (weather){
    case "Clear":
      weatherMain.style.backgroundImage='url("./images/mist.gif")';
        weatherMain.style.backgroundPosition=" center center";
        weatherMain.style.backgroundRepeat="no-repeat";
        weatherMain.style.backgroundSize = 'cover';
        greetingElement.style.color="black";
        weatherData.style.color="black";
      break;
      case "Rain":
      weatherMain.style.backgroundImage='url("./images/rain.gif")';
        weatherMain.style.backgroundPosition=" center center";
        weatherMain.style.backgroundRepeat="no-repeat";
        weatherMain.style.backgroundSize = 'cover';
        greetingElement.style.color="white";
        weatherData.style.color="white";
        break;
        case "Clouds":
          weatherMain.style.backgroundImage='url("./images/cloudy.gif")';
          weatherMain.style.backgroundPosition=" center center";
          weatherMain.style.backgroundRepeat='no-repeat';
          weatherMain.style.backgroundSize = 'cover';
          weatherData.style.color='black';  
          greetingElement.style.color="black";  
          break;
        case "Snow":
          weatherMain.style.backgroundImage='url("./images/snow.gif")';
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundSize = 'cover';
          weatherMain.style.backgroundPosition="center center";
          weatherImage.src="./images/snowy.png";
          break;
        case "Thunderstorm":
          weatherMain.style.backgroundImage='url("./images/thunderstorm.gif")'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundSize = 'cover';
          weatherMain.style.backgroundRepeat="no-repeat";
    
          weatherImage.src="./images/thunder.png";
          break;
        case "Drizzle":
          weatherMain.style.backgroundImage='url("./images/drizzle.gif")'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundSize = 'cover';
          weatherData.style.color="white";
          greetingElement.style.color="white";
          break;
        case "Mist":
        case "Haze":
          weatherMain.style.backgroundImage='url("./images/fog.gif")'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundSize = 'cover';
          weatherData.style.color="white";
          greetingElement.style.color="white";
          break;
        case "Fog":
          weatherMain.style.backgroundImage='url("./images/fog.gif")'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundSize = 'cover';
          weatherData.style.color="white";
          greetingElement.style.color="white";
          break;
        case "Windy":
          weatherMain.style.backgroundImage='url("./images/wind.gif")'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundSize = 'cover';
          weatherData.style.color="black";
          greetingElement.style.color="black";
          break;
        case "Heat Wave":
        case "Scorching":
          weatherMain.style.backgroundImage='url("./images/heatwave.gif")'
          weatherMain.style.backgroundPosition="center center";
          weatherMain.style.backgroundRepeat="no-repeat";
          weatherMain.style.backgroundSize = 'cover';
          weatherData.style.color="black";
          greetingElement.style.color="black";
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