import { getDay, getDayArray, convertDays } from './utils';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function round(num) {
  return Math.round(num);
}

function decimalPercentage(num) {
  return num * 100;
}

function getAverage(num1, num2) {
  return (num1 + num2) / 2;
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

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function displayDailyForecast(data) {
  const currentDay = getDay();
  const sevenDayNumArray = getDayArray(currentDay);
  const convertedToDays = convertDays(sevenDayNumArray);
  console.log(sevenDayNumArray);
  console.log(convertedToDays);

  const forecastDiv = document.getElementById('weekForecast');
  removeAllChildNodes(forecastDiv);

  // render 7 day forecast
  for (let i = 0; i < sevenDayNumArray.length; i++) {
    const div = document.createElement('div');
    div.classList.add('daily-w');
    div.setAttribute('id', sevenDayNumArray[i]);
    forecastDiv.appendChild(div);

    const p1 = document.createElement('p');
    p1.classList.add('day');
    p1.innerHTML = convertedToDays[i];
    div.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('w-desc');
    p2.innerHTML = capitalize(data.daily[i].weather[0].description);
    div.appendChild(p2);

    const p3 = document.createElement('p');
    p3.classList.add('week-temp');
    p3.innerHTML =
      round(getAverage(data.daily[i].temp.day, data.daily[i].temp.eve)) +
      '&#8451;';
    div.appendChild(p3);

    const img = document.createElement('img');
    img.classList.add('daily-w-icon');
    img.alt = 'Forecast Logo';
    img.src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
    div.appendChild(img);
  }
}

function renderWeatherData(location, data) {
  const locDisplay = document.getElementById('locDisplay');
  locDisplay.innerHTML = location.cityName;
  displayTodayForecast(data);
  displayDailyForecast(data);
  console.log(data);
}

export default renderWeatherData;
