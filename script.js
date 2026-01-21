const apiKey = "YOUR_API_KEY_HERE";
// Get your free API key from https://openweathermap.org



function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                result.innerHTML = data.message;
                return;
            }

            result.innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error(error);
            result.innerHTML = "Error fetching data";
        });
}
