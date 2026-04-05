const todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
};

console.log(`1. Today's high temperature: ${todaysWeather.temperature.high}`);
console.log(`2. Today's low temperature: ${todaysWeather.temperature.low}`);
console.log(`3. Today's conditions: ${todaysWeather.conditions}`);
console.log(`4. Today's sunrise time: ${todaysWeather.astronomy.sunrise}`);
console.log(`5. Today's weather is ${todaysWeather.conditions}. The high temperature is ${todaysWeather.temperature.high}°F and the low temperature is ${todaysWeather.temperature.low}°F. The sun rose at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`);