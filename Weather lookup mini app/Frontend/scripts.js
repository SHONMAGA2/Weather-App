const API_KEY = ""

async function fetchWeather() {
    const city_name = document.getElementById("city-input");
    if(!city_name) return;

    const url = "http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric";
}