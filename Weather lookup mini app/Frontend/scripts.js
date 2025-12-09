const API_KEY = "e5a07dc691135b64e7af7ddfc3189dbb";

async function fetchWeather() {
    const city_name = document.getElementById("city-input");
    if(!city_name) return;

    const url = "http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if(data.cod !== 200){
            document.getElementById("weather-info").innerHTML = "City not found";
            return;
        }

        document.getElementById(weather-info).innerHTML = `
        <h2>${data.name}</h2>
        <p> Temperature: ${data.main.temp}C</p>
        <p>Condition: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        document.getElementById("weather-info").innerHTML = "Network Issue";      
    }
}