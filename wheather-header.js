const apiKey = "0734d499012e36b97b34fd338b17ef25";
const city = "Tooele";
const state = "US"; 

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`;

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    const windChill =
            35.74 +
            0.6215 * temperature -
            35.75 * Math.pow(windSpeed, 0.16) +
            0.4275 * temperature * Math.pow(windSpeed, 0.16)
    
    document.getElementById("current-desc").textContent = " " + description;
    document.getElementById("current-temp").textContent = " " + temperature + " °F";
    document.getElementById("current-humid").textContent = " " + humidity + "%";
    document.getElementById("current-windSpeed").textContent = " " + windSpeed + " mph";
    document.getElementById("current-windChill").textContent = " " + windChill;
  })

  .catch(error => console.error("Error fetching weather:", error));