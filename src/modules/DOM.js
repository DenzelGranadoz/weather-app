function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function round(num) {
  return Math.round(num);
}

function decimalPercentage(num) {
  return num * 100;
}

function displayTodayForecast(data) {
  const locLogo = document.getElementById('locLogo');
  const iconCode = data.current.weather[0].icon;
  locLogo.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const locDesc = document.getElementById('locDesc');
  locDesc.innerHTML = capitalize(data.current.weather[0].description);

  const currentTemp = document.getElementById('currentTemp');
  currentTemp.innerHTML = `${round(data.current.temp)}&#8451;`;

  const currentFeelsLike = document.getElementById('currentFeelsLike');
  currentFeelsLike.innerHTML = `${data.current.feels_like}&#8451;`;

  const currentHumidity = document.getElementById('currentHumidity');
  currentHumidity.innerHTML = `${data.current.humidity}&#37;`;

  const currentPop = document.getElementById('currentPop');
  currentPop.innerHTML = `${decimalPercentage(data.daily[0].pop)}&#37;`; // I took the following day probability of precipitation because current day doesnt have one

  const windSpeed = document.getElementById('currentWindSpeed');
  windSpeed.innerHTML = `${data.current.wind_speed}km/h`;
}

function renderWeatherData(location, data) {
  const locDisplay = document.getElementById('locDisplay');
  locDisplay.innerHTML = location.cityName;
  displayTodayForecast(data);
  console.log(data);
}

export default renderWeatherData;
