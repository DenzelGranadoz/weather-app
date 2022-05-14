async function dailyWeather(dataWeather) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${dataWeather.coord.lat}&lon=${dataWeather.coord.lon}&exclude=hourly,minutely&units=metric&APPID=20f7632ffc2c022654e4093c6947b4f4`,
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
    return weatherData;
  } catch (e) {
    alert(e);
    return null;
  }
}

export { getWeather, dailyWeather };
