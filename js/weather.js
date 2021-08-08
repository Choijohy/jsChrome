const city = document.querySelector("#weather span:first-child");
const cityWeather = document.querySelector("#weather span:last-child");
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "f0b4fda16f59f801baa7c325fc88aa27";
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            city.innerText = data.name;
            cityWeather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError)
