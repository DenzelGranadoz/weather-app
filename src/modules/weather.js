async function dailyWeather(dataWeather) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${dataWeather.latitude}&lon=${dataWeather.longtitude}&exclude=hourly,minutely&units=metric&APPID=3b64ee637f1db8b2a33aeda84b863bcf`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      const errorMessage = `An error has occured: ${response.status}`;
      throw new Error(errorMessage);
    }
    const dailyWeatherData = await response.json();
    return dailyWeatherData;
  } catch (e) {
    alert(e);
    return null;
  }
}

function getCoords(data) {
  const {
    coord: { lat: latitude, lon: longtitude },
    name: cityName,
  } = data;
  return { latitude, longtitude, cityName };
}

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
    const weatherData = getCoords(await response.json());
    return weatherData;
  } catch (e) {
    alert(e);
    return null;
  }
}

export { getWeather, dailyWeather };
