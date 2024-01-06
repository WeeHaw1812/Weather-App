document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "4873d7db271399c611db04d0fca7378e";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchBox = document.querySelector(".searchInput");
  const searchBtn = document.querySelector(".searchImg");
  const statusImg = document.querySelector(".statusImg");
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".information").style.display = "none";
    } else {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidityData").innerHTML =
        data.main.humidity + "%";
      document.querySelector(".windData").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main == "Clouds") {
        statusImg.src = "./images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        statusImg.src = "./images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        statusImg.src = "./images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        statusImg.src = "./images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        statusImg.src = "./images/mist.png";
      }
      document.querySelector(".information").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
});
