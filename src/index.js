// do all imports here?
import './styles/style.css';
import Icon from './assets/sirts_icon.png';
import { getWeather, dailyWeather } from './modules/weather';
import renderWeatherData from './modules/DOM';
import { displayTime } from './modules/utils';

const locInput = document.getElementById('location');
const locForm = document.getElementById('form');

function clearInput() {
  locInput.value = '';
}

async function getLocation() {
  if (locInput.value === '') return;
  const locData = await getWeather(locInput.value);
  const dailyData = await dailyWeather(locData);
  renderWeatherData(locData, dailyData);
}

locForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getLocation();
  clearInput();
});

const searchBtn = document.querySelector('.search-icon');
searchBtn.src = Icon;

window.setInterval(displayTime, 1000);
