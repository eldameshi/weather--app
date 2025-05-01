// src/js/weather.js

// Merr të dhënat e motit nga API
export async function getWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    const data = await response.json();
    return data;
  }
  
  // Konverton temperaturën nga Celsius në Fahrenheit
  export function formatTemperature(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  