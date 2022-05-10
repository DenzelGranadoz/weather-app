// do all imports here?
import './styles/style.css';

async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=3b64ee637f1db8b2a33aeda84b863bcf`,
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

const location = document.getElementById('location');
const locBtn = document.getElementById('submitBtn');

function clearInput() {
  location.value = '';
}

function getLocation() {
  getWeather(location.value);
  clearInput();
}

locBtn.addEventListener('click', getLocation);

// getWeather();

// need a try catch for the 404
// get loc through forms
// take weather infos
// display it

// take the important infos
// display them
// style the whole thing
// when searching do a next 7 days or 10 days of the loccation searched
// then donee :))))
// finish this by april 22 pls
