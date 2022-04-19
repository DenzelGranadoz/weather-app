import { clearInput } from './DOM';

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3b64ee637f1db8b2a33aeda84b863bcf`,
      { mode: 'cors' },
    );
    // throwing an error manually because fetch wont throw an error after a bad HTTP status
    if (!response.ok) {
      const errorMessage = `An error has occured: ${response.status}, ${location} not found`;
      throw new Error(errorMessage);
    }
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (e) {
    console.error(e);
  }
}

function getLocation() {
  getWeather(location.value);
  clearInput();
}

export { getLocation };
