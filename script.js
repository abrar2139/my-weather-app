// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const API_KEY = "685f1bee34e6047045023f675a2ca6d4";


const searchBox =document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const defaultWeather= "lahore";

async function checkWeather(city) {
    const response = await fetch(API_URL + city +`&appid=${API_KEY}` )

    if (response.status == 404) {
        document.querySelector(".weather-bottom").style.display="none"
        document.querySelector(".weather-middle").style.display="none"
        document.querySelector(".error").style.display="block"
    }else{
        var data =await response.json()
        console.log(data)
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    
    
    if (data.weather[0].main == "Clear") {
        weatherIcon.src= "images/clear.png"
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src= "images/clouds.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src= "images/snow.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src= "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src= "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzel") {
        weatherIcon.src= "images/drizzle.png"
    }
    else if (data.weather[0].main == "Smoke") {
        weatherIcon.src= "images/smoke.png"
    }
    
    document.querySelector(".error").style.display="none"

    }
}
 checkWeather(defaultWeather)
searchBtn.addEventListener("click",function() {
    checkWeather(searchBox.value)
})
searchBox.addEventListener("keydown",(event)=>{
if (event.key === "Enter") {
    checkWeather(searchBox.value)
}
})


setInterval(function(){
document.querySelector(".exclaim").style.color="blue"
},1000)
setInterval(function(){
    document.querySelector(".exclaim").style.color="yellow"
    },2000)
    setInterval(function(){
        document.querySelector(".exclaim").style.color="orange"
        },3000)
    














