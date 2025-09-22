document.addEventListener("DOMContentLoaded", () => {
  const cityinput = document.getElementById("city-input");
  const weatherbutton = document.getElementById("get-weather-btn");
  const weatherinfodisplay = document.getElementById("weather-info");
  const citynamedisplay = document.getElementById("city-name");
  const temperaturedisplay = document.getElementById("temperature");
  const descriptiondisplay = document.getElementById("description");
  const errormessagedisplay = document.getElementById("error-message");
  const API_KEY = "42141d87173f77562242adb1240b7037";
  weatherbutton.addEventListener("click", async () => {
    const city = cityinput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    //get the weather data

    const response = await fetch(url);
    console.log(typeof response)
    console.log("RESPONSE", response)

    if(!response.ok){
        throw new Error("city not found ");
        
    }
    const data = await response.json()
    console.log(data)
    return data;
        
  }
  function displayWeatherData(data) {
    const{name,main,weather}=data;
    citynamedisplay.textContent = name ;
     temperaturedisplay.textContent = `Temperature : ${main.temp}`;
     descriptiondisplay.textContent = `Weather : ${weather[0].description}`;
    //display weather data
    weatherinfodisplay.classList.remove("hidden")
    errormessagedisplay.classList.add("hidden")
  }
  function showError() {
    weatherinfodisplay.classList.add("hidden");
    errormessagedisplay.classList.remove("hidden");
  }
});
