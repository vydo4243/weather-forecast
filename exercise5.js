var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

// 1. Log today's weather conditions to the console.
console.log(`1. Today's weather conditions: ${weatherForecast[0].conditions}`);

// 2. Log Saturday's high temperature to the console.
console.log(`2. Saturday's high temperature: ${weatherForecast[1].temperature.high}`);

// 3. Log Saturday's sunrise time to the console.
console.log(`3. Saturday's sunrise time: ${weatherForecast[1].astronomy.sunrise}`);

// 4. Log Sunday's conditions to the console.
console.log(`4. Sunday's conditions: ${weatherForecast[2].conditions}`);

// 5. Log Sunday's sunset time to the console.
console.log(`5. Sunday's sunset time: ${weatherForecast[2].astronomy.sunset}`);

// 6. Use string template literals to build few sentences about the weather forecast for Sunday. 
// (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")
console.log(
  `6. \nThe high on Sunday will be ${weatherForecast[2].temperature.high} and the low will be ${weatherForecast[2].temperature.low}. We're predicting a ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`
);