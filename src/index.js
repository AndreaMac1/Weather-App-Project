let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

function formatDayDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  let formattedDate = `${currentDay}, ${currentHour}:${currentMinute}`;

  return formattedDate;
}

console.log(formatDayDate());
let dateElement = document.querySelector("#day-time-now");
dateElement.innerHTML = formatDayDate("now");

function showWeather(response) {
  console.log(response.data.name);
  document.querySelector("#city-h1").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let apiTemp = document.querySelector("#bigTemp");
  apiTemp.innerHTML = temperature;

  //document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function showCity(event) {
  event.preventDefault();
  let apiKey = "aba65921cf9118001ca53f5c5941b98d";
  let city = document.querySelector("#city-entered").value;
  console.log(city);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", showCity);
