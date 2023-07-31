// const greetingElement = document.getElementById("greetingMessage");
// function disableRightClick(event) {
//   event.preventDefault();
// }
// document.addEventListener('contextmenu', disableRightClick);
// document.addEventListener("DOMContentLoaded", function(){
//     const Time = new Date().getHours();

//     let message;
//     if(Time>=0 && Time<6){
//         message="Good Morning ";
//     }
//     else if(Time>=6 && Time<12){
//       message="Good Morning 🌞"
//     }
//     else if(Time>=12 && Time < 18){
//         message="Good Afternoon 🌤️";
//     }
//     else{
//         message="Good Evening 🌚"
//     }
//     greetingElement.innerHTML=message;
// });

// const APIKey = "0583365f139ec165ccba2b00c1ea7b11";
// const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

// const weatherMain = document.getElementById("weather-main");
// const weatherData= document.getElementById("weatherData");
// const query = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");
// const cityNameElement = document.getElementById("city-name");
// const conditionElement = document.getElementById("weather-condition");
// const tempElement = document.getElementById("temp");
// const weatherImage = document.getElementById("weather-image");



// async function loaclDataFunction(){

// var loaclData = await fetch(APIURL+"q="+"kollam"+`&appid=${APIKey}`);
// var kollamData= await loaclData.json();
// cityNameElement.innerHTML=kollamData.name;
// conditionElement.innerHTML=kollamData.weather[0].main;
// weatherSwitch(kollamData.weather[0].main);
// tempElement.innerHTML=kollamData.main.temp;" °C"

// }

// loaclDataFunction();
// async function getWeather(city){
//   if(city!=""){
//   const response = await fetch(APIURL+"q="+city+`&appid=${APIKey}`);
//   var data = await response.json();
//   }
//   else{
//     cityNameElement.innerHTML=""
//     tempElement.innerHTML="No city found";
//     tempElement.style.fontSize="50px"
//     conditionElement.innerHTML="";
//     weatherMain.style.backgroundImage='url(./images/sad.png)';
//     greetingElement.style.color="black";
//     weatherData.style.color="black";
//   }

//   if  (data.message == "city not found"){
//     cityNameElement.innerHTML="No city found"
//     tempElement.innerHTML="ERROR";
//     conditionElement.innerHTML="ERROR";
//     weatherMain.style.backgroundImage='url(./images/sad.png)';
//     greetingElement.style.color="black";
//     weatherData.style.color="black";
//   }
//   else{
//   cityNameElement.innerHTML=data.name;
//   tempElement.innerHTML=data.main.temp+"°C";
//   conditionElement.innerHTML=(data.weather[0].main);
//   }
  
//   const weather = data.weather[0].main;
//   weatherSwitch(weather);
// }

// function weatherSwitch(weather){
//   switch (weather){
//     case "Clear":
//       weatherMain.style.backgroundImage='url("./images/mist.gif")';
//         weatherMain.style.backgroundPosition=" center center";
//         weatherMain.style.backgroundRepeat="no-repeat";
//         weatherMain.style.backgroundSize = 'cover';
//         greetingElement.style.color="black";
//         weatherData.style.color="black";
//       break;
//       case "Rain":
//       weatherMain.style.backgroundImage='url("./images/rain.gif")';
//         weatherMain.style.backgroundPosition=" center center";
//         weatherMain.style.backgroundRepeat="no-repeat";
//         weatherMain.style.backgroundSize = 'cover';
//         greetingElement.style.color="white";
//         weatherData.style.color="white";
//         break;
//         case "Clouds":
//           weatherMain.style.backgroundImage='url("./images/cloudy.gif")';
//           weatherMain.style.backgroundPosition=" center center";
//           weatherMain.style.backgroundRepeat='no-repeat';
//           weatherMain.style.backgroundSize = 'cover';
//           weatherData.style.color='black';  
//           greetingElement.style.color="black";  
//           break;
//         case "Snow":
//           weatherMain.style.backgroundImage='url("./images/snow.gif")';
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherMain.style.backgroundPosition="center center";
//           weatherImage.src="./images/snowy.png";
//           weatherData.style.color='black';  
//           greetingElement.style.color="black";
//           break;
//         case "Thunderstorm":
//           weatherMain.style.backgroundImage='url("./images/thunderstorm.gif")'
//           weatherMain.style.backgroundPosition="center center";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherData.style.color='white';  
//           greetingElement.style.color="white";

    
//           weatherImage.src="./images/thunder.png";
//           break;
//         case "Drizzle":
//           weatherMain.style.backgroundImage='url("./images/drizzle.gif")'
//           weatherMain.style.backgroundPosition="center center";
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherData.style.color="white";
//           greetingElement.style.color="white";
//           break;
//         case "Mist":
//         case "Haze":
//           weatherMain.style.backgroundImage='url("./images/fog.gif")'
//           weatherMain.style.backgroundPosition="center center";
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherData.style.color="white";
//           greetingElement.style.color="white";
//           break;
//         case "Fog":
//           weatherMain.style.backgroundImage='url("./images/fog.gif")'
//           weatherMain.style.backgroundPosition="center center";
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherData.style.color="white";
//           greetingElement.style.color="white";
//           break;
//         case "Windy":
//           weatherMain.style.backgroundImage='url("./images/wind.gif")'
//           weatherMain.style.backgroundPosition="center center";
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherData.style.color="black";
//           greetingElement.style.color="black";
//           break;
//         case "Heat Wave":
//         case "Scorching":
//           weatherMain.style.backgroundImage='url("./images/heatwave.gif")'
//           weatherMain.style.backgroundPosition="center center";
//           weatherMain.style.backgroundRepeat="no-repeat";
//           weatherMain.style.backgroundSize = 'cover';
//           weatherData.style.color="black";
//           greetingElement.style.color="black";
//           break;
//       default:
//       weatherMain.style.background="black";
//       break;
//       }
// }
// searchButton.addEventListener("click",()=>{
//   getWeather(query.value);
// })

// query.addEventListener("keypress",function(event){
//   if(event.key=="Enter"){
//     getWeather(query.value);
//   }
// })


const _0x4bd0aa=_0x4e83;(function(_0x14a5e6,_0x5727e3){const _0x121b32=_0x4e83,_0x458bfd=_0x14a5e6();while(!![]){try{const _0x18fb77=-parseInt(_0x121b32(0x16b))/0x1+-parseInt(_0x121b32(0x164))/0x2+parseInt(_0x121b32(0x14d))/0x3+parseInt(_0x121b32(0x12f))/0x4*(-parseInt(_0x121b32(0x15f))/0x5)+-parseInt(_0x121b32(0x160))/0x6*(parseInt(_0x121b32(0x175))/0x7)+parseInt(_0x121b32(0x154))/0x8+parseInt(_0x121b32(0x16a))/0x9;if(_0x18fb77===_0x5727e3)break;else _0x458bfd['push'](_0x458bfd['shift']());}catch(_0x4a9370){_0x458bfd['push'](_0x458bfd['shift']());}}}(_0xed02,0xec66b));function _0xed02(){const _0x2b193f=['3774626NsSOEd','Good\x20Morning\x20🌞','url(\x22./images/thunderstorm.gif\x22)','querySelector','url(\x22./images/fog.gif\x22)','backgroundPosition','44544330YbMlNv','681458EbBNFA','addEventListener','backgroundRepeat','DOMContentLoaded','ERROR','Good\x20Morning\x20','black','src','temp','name','5719SnocMg','93092spWVgs','greetingMessage','main','preventDefault','backgroundSize','contextmenu','Clouds','getElementById','\x20center\x20center','style','0583365f139ec165ccba2b00c1ea7b11','url(\x22./images/cloudy.gif\x22)','https://api.openweathermap.org/data/2.5/weather?units=metric&','backgroundImage','weather-main','No\x20city\x20found','url(./images/sad.png)','kollam','url(\x22./images/mist.gif\x22)','weather','white','Scorching','.search\x20button','&appid=','key','Enter','Windy','url(\x22./images/wind.gif\x22)','getHours','url(\x22./images/drizzle.gif\x22)','2632551eeCFjo','./images/thunder.png','Drizzle','Heat\x20Wave','background','cover','value','3024912ftlcHW','\x20°C','Mist','color','click','Thunderstorm','50px','innerHTML','Good\x20Evening\x20🌚','Clear','center\x20center','170HbnqnS','13782gvQxFu','.search\x20input','no-repeat','json'];_0xed02=function(){return _0x2b193f;};return _0xed02();}const greetingElement=document[_0x4bd0aa(0x136)](_0x4bd0aa(0x130));function disableRightClick(_0x1dc069){const _0x441a50=_0x4bd0aa;_0x1dc069[_0x441a50(0x132)]();}document[_0x4bd0aa(0x16c)](_0x4bd0aa(0x134),disableRightClick),document['addEventListener'](_0x4bd0aa(0x16e),function(){const _0x20d54a=_0x4bd0aa,_0x5b086c=new Date()[_0x20d54a(0x14b)]();let _0x13b15d;if(_0x5b086c>=0x0&&_0x5b086c<0x6)_0x13b15d=_0x20d54a(0x170);else{if(_0x5b086c>=0x6&&_0x5b086c<0xc)_0x13b15d=_0x20d54a(0x165);else _0x5b086c>=0xc&&_0x5b086c<0x12?_0x13b15d='Good\x20Afternoon\x20🌤️':_0x13b15d=_0x20d54a(0x15c);}greetingElement[_0x20d54a(0x15b)]=_0x13b15d;});const APIKey=_0x4bd0aa(0x139),APIURL=_0x4bd0aa(0x13b),weatherMain=document[_0x4bd0aa(0x136)](_0x4bd0aa(0x13d)),weatherData=document[_0x4bd0aa(0x136)]('weatherData'),query=document[_0x4bd0aa(0x167)](_0x4bd0aa(0x161)),searchButton=document[_0x4bd0aa(0x167)](_0x4bd0aa(0x145)),cityNameElement=document[_0x4bd0aa(0x136)]('city-name'),conditionElement=document[_0x4bd0aa(0x136)]('weather-condition'),tempElement=document[_0x4bd0aa(0x136)](_0x4bd0aa(0x173)),weatherImage=document['getElementById']('weather-image');async function loaclDataFunction(){const _0x1326c5=_0x4bd0aa;var _0x3b74ba=await fetch(APIURL+'q='+_0x1326c5(0x140)+(_0x1326c5(0x146)+APIKey)),_0xf940d2=await _0x3b74ba[_0x1326c5(0x163)]();cityNameElement[_0x1326c5(0x15b)]=_0xf940d2['name'],conditionElement['innerHTML']=_0xf940d2[_0x1326c5(0x142)][0x0]['main'],weatherSwitch(_0xf940d2['weather'][0x0][_0x1326c5(0x131)]),tempElement[_0x1326c5(0x15b)]=_0xf940d2[_0x1326c5(0x131)]['temp'],_0x1326c5(0x155);}loaclDataFunction();async function getWeather(_0x27a061){const _0x3755f6=_0x4bd0aa;if(_0x27a061!=''){const _0x47e9a0=await fetch(APIURL+'q='+_0x27a061+(_0x3755f6(0x146)+APIKey));var _0x16d9af=await _0x47e9a0[_0x3755f6(0x163)]();}else cityNameElement['innerHTML']='',tempElement['innerHTML']=_0x3755f6(0x13e),tempElement['style']['fontSize']=_0x3755f6(0x15a),conditionElement[_0x3755f6(0x15b)]='',weatherMain[_0x3755f6(0x138)]['backgroundImage']=_0x3755f6(0x13f),greetingElement[_0x3755f6(0x138)][_0x3755f6(0x157)]=_0x3755f6(0x171),weatherData['style'][_0x3755f6(0x157)]=_0x3755f6(0x171);_0x16d9af['message']=='city\x20not\x20found'?(cityNameElement[_0x3755f6(0x15b)]=_0x3755f6(0x13e),tempElement['innerHTML']='ERROR',conditionElement[_0x3755f6(0x15b)]=_0x3755f6(0x16f),weatherMain['style'][_0x3755f6(0x13c)]='url(./images/sad.png)',greetingElement[_0x3755f6(0x138)][_0x3755f6(0x157)]='black',weatherData[_0x3755f6(0x138)][_0x3755f6(0x157)]=_0x3755f6(0x171)):(cityNameElement['innerHTML']=_0x16d9af[_0x3755f6(0x174)],tempElement[_0x3755f6(0x15b)]=_0x16d9af['main'][_0x3755f6(0x173)]+'°C',conditionElement[_0x3755f6(0x15b)]=_0x16d9af[_0x3755f6(0x142)][0x0]['main']);const _0x2a7627=_0x16d9af[_0x3755f6(0x142)][0x0][_0x3755f6(0x131)];weatherSwitch(_0x2a7627);}function weatherSwitch(_0x5b05e2){const _0x147bac=_0x4bd0aa;switch(_0x5b05e2){case _0x147bac(0x15d):weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]=_0x147bac(0x141),weatherMain[_0x147bac(0x138)][_0x147bac(0x169)]=_0x147bac(0x137),weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherMain[_0x147bac(0x138)][_0x147bac(0x133)]=_0x147bac(0x152),greetingElement[_0x147bac(0x138)]['color']=_0x147bac(0x171),weatherData[_0x147bac(0x138)][_0x147bac(0x157)]='black';break;case'Rain':weatherMain['style'][_0x147bac(0x13c)]='url(\x22./images/rain.gif\x22)',weatherMain[_0x147bac(0x138)][_0x147bac(0x169)]='\x20center\x20center',weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherMain['style'][_0x147bac(0x133)]='cover',greetingElement[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x143),weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x143);break;case _0x147bac(0x135):weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]=_0x147bac(0x13a),weatherMain[_0x147bac(0x138)][_0x147bac(0x169)]=_0x147bac(0x137),weatherMain[_0x147bac(0x138)]['backgroundRepeat']=_0x147bac(0x162),weatherMain['style']['backgroundSize']='cover',weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x171),greetingElement[_0x147bac(0x138)][_0x147bac(0x157)]='black';break;case'Snow':weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]='url(\x22./images/snow.gif\x22)',weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherMain[_0x147bac(0x138)][_0x147bac(0x133)]=_0x147bac(0x152),weatherMain[_0x147bac(0x138)][_0x147bac(0x169)]=_0x147bac(0x15e),weatherImage[_0x147bac(0x172)]='./images/snowy.png',weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x171),greetingElement['style'][_0x147bac(0x157)]='black';break;case _0x147bac(0x159):weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]=_0x147bac(0x166),weatherMain[_0x147bac(0x138)][_0x147bac(0x169)]=_0x147bac(0x15e),weatherMain[_0x147bac(0x138)]['backgroundSize']=_0x147bac(0x152),weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x143),greetingElement['style'][_0x147bac(0x157)]='white',weatherImage[_0x147bac(0x172)]=_0x147bac(0x14e);break;case _0x147bac(0x14f):weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]=_0x147bac(0x14c),weatherMain[_0x147bac(0x138)]['backgroundPosition']=_0x147bac(0x15e),weatherMain['style'][_0x147bac(0x16d)]='no-repeat',weatherMain['style'][_0x147bac(0x133)]=_0x147bac(0x152),weatherData[_0x147bac(0x138)][_0x147bac(0x157)]='white',greetingElement[_0x147bac(0x138)][_0x147bac(0x157)]='white';break;case _0x147bac(0x156):case'Haze':weatherMain['style'][_0x147bac(0x13c)]=_0x147bac(0x168),weatherMain['style']['backgroundPosition']=_0x147bac(0x15e),weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherMain[_0x147bac(0x138)][_0x147bac(0x133)]=_0x147bac(0x152),weatherData[_0x147bac(0x138)]['color']=_0x147bac(0x143),greetingElement[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x143);break;case'Fog':weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]=_0x147bac(0x168),weatherMain[_0x147bac(0x138)][_0x147bac(0x169)]=_0x147bac(0x15e),weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherMain['style'][_0x147bac(0x133)]='cover',weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x143),greetingElement['style'][_0x147bac(0x157)]=_0x147bac(0x143);break;case _0x147bac(0x149):weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]=_0x147bac(0x14a),weatherMain[_0x147bac(0x138)]['backgroundPosition']=_0x147bac(0x15e),weatherMain[_0x147bac(0x138)][_0x147bac(0x16d)]=_0x147bac(0x162),weatherMain[_0x147bac(0x138)][_0x147bac(0x133)]=_0x147bac(0x152),weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x171),greetingElement[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x171);break;case _0x147bac(0x150):case _0x147bac(0x144):weatherMain[_0x147bac(0x138)][_0x147bac(0x13c)]='url(\x22./images/heatwave.gif\x22)',weatherMain['style']['backgroundPosition']=_0x147bac(0x15e),weatherMain[_0x147bac(0x138)]['backgroundRepeat']=_0x147bac(0x162),weatherMain[_0x147bac(0x138)][_0x147bac(0x133)]=_0x147bac(0x152),weatherData[_0x147bac(0x138)][_0x147bac(0x157)]=_0x147bac(0x171),greetingElement[_0x147bac(0x138)]['color']=_0x147bac(0x171);break;default:weatherMain['style'][_0x147bac(0x151)]='black';break;}}function _0x4e83(_0x5618c3,_0x395046){const _0xed0270=_0xed02();return _0x4e83=function(_0x4e8324,_0x199157){_0x4e8324=_0x4e8324-0x12f;let _0xc94792=_0xed0270[_0x4e8324];return _0xc94792;},_0x4e83(_0x5618c3,_0x395046);}searchButton[_0x4bd0aa(0x16c)](_0x4bd0aa(0x158),()=>{const _0x1bcd10=_0x4bd0aa;getWeather(query[_0x1bcd10(0x153)]);}),query[_0x4bd0aa(0x16c)]('keypress',function(_0x186a1e){const _0x1f7b1a=_0x4bd0aa;_0x186a1e[_0x1f7b1a(0x147)]==_0x1f7b1a(0x148)&&getWeather(query[_0x1f7b1a(0x153)]);});