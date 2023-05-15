let now = new Date();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDays[now.getDay()];
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
let h2 = document.querySelector("#time-box");
h2.innerHTML = `${day}, ${hours}: ${minutes}`;
// Updates the temperature in the UI

function updateCity(weatherData) {
  const cityName = document.querySelector("#city");
  cityName.innerHTML = `${weatherData.name}`;
  const descriptionUI = document.querySelector("#description");
  descriptionUI.innerHTML = `${weatherData.weather[0].description}`;

  const humidityUI = document.querySelector("#humidity-rate");
  humidityUI.innerHTML = `${weatherData.main.humidity}%`;

  const windSpeedUI = document.querySelector("#wind-speed");
  windSpeedUI.innerHTML = `${Math.round(weatherData.wind.speed)} km/h`;

  const cloudinessUI = document.querySelector("#cloud");
  cloudinessUI.innerHTML = `${weatherData.clouds.all}%`;
  const temperatureNew = document.querySelector("#temp-special");
  temperatureNew.innerHTML = Math.round(weatherData.main.temp);
}
function searchCity(city) {
  const apiKey = "562fcad81f0b3f7577282336ebcbcfd5";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then((response) => {
    updateCity(response.data);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let textInput = document.querySelector("#city-input");
  const city = textInput.value.trim();

  if (!city) return;

  searchCity(city);

  textInput.value = "";
}
const searchForm = document.querySelector("#form-special");
searchForm.addEventListener("submit", handleSubmit);
