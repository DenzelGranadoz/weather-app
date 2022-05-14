// do all imports here?
import './styles/style.css';
import { getWeather, dailyWeather } from './modules/weather';

const locInput = document.getElementById('location');
const locForm = document.getElementById('form');

function clearInput() {
  locInput.value = '';
}

async function getLocation() {
  if (locInput.value === '') return;
  const data = await getWeather(locInput.value);
  console.log(data); // send this somewhere, call a function with this as a parameter?
  const dailyData = await dailyWeather(data);
  console.log(dailyData);
}

locForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getLocation();
  clearInput();
});
