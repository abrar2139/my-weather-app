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
        document.querySelector(".weather-bottom").style.visibility="hidden"
        document.querySelector(".weather-middle").style.visibility="hidden"
        document.querySelector(".error").style.display="block"
    }else{
        document.querySelector(".error").style.display="none"
        document.querySelector(".weather-bottom").style.visibility="visible"
        document.querySelector(".weather-middle").style.visibility="visible"
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
        weatherIcon.src= "images/smoke1.png"
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
    

        setInterval(function(){
            document.body.style.height="100vh"
            document.body.style.backgroundRepeat="no-repeat"
            document.body.style.backgroundPosition="center"
            document.body.style.backgroundSize="cover"
            document.body.style.backgroundImage= "url('https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg')"
        },3000)
        setInterval(function(){
            document.body.style.height="100vh"
            document.body.style.backgroundRepeat="no-repeat"
            document.body.style.backgroundPosition="center"
            document.body.style.backgroundSize="cover"
            document.body.style.backgroundImage=  "url('https://t4.ftcdn.net/jpg/05/36/32/95/360_F_536329537_RblOApJIbTIPjNlROJrKKiJaFmceLJvZ.jpg')"
        },6000)
        setInterval(function(){
            document.body.style.height="100vh"
            document.body.style.backgroundRepeat="no-repeat"
            document.body.style.backgroundPosition="center"
            document.body.style.backgroundSize="cover"
            document.body.style.backgroundImage= "url('https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4=')"
        },9000)
        setInterval(function(){
            document.body.style.height="100vh"
            document.body.style.backgroundRepeat="no-repeat"
            document.body.style.backgroundPosition="center"
            document.body.style.backgroundSize="cover"
            document.body.style.backgroundImage= "url('https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg')"
        },12000)
        setInterval(function(){
            document.body.style.height="100vh"
            document.body.style.backgroundRepeat="no-repeat"
            document.body.style.backgroundPosition="center"
            document.body.style.backgroundSize="cover"
            document.body.style.backgroundImage= "url('https://t4.ftcdn.net/jpg/02/55/17/43/360_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg')"
        },15000)











