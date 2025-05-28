
import { NotificationPreferences, WeatherNotification, WeatherAlertService } from './notifications';
import { Sponsorship, RecommendationPersonalization } from './sponsorship';


import { NotificationPreferences } from './notifications';

const userPrefs = new NotificationPreferences("user123", { receiveDaily: true });

import { WeatherNotification } from './notifications';

const notif = WeatherNotification.createNotification("Sot do të ketë shi.", "info");
console.log(notif.message); // "Sot do të ketë shi."

import { WeatherAlertService, WeatherNotification } from './notifications';

const alertService = new WeatherAlertService(8);
const current = { temp: 15 };
const forecast = { temp: 5 };

const alert = alertService.checkForSuddenChange(current, forecast);
if (alert) {
    console.log(alert.message); // Njoftim për mot të papritur
}


import dom from './dom';

const events = function events() {
  function showFlow(data) {
    dom().clearForms();
    dom().fillCard(data);
    dom().imageSwitch(data, 'image');
    dom().show('search');

    const farCel = document.getElementById('farCel');
    farCel.onclick = function changeTemp() { dom().converter(data); };
  }

  function forecastFlow(data) {
    dom().clearForms();
    dom().createCard(data);
    dom().show('forecast');
    // === SPONSORIZIMET ===
  const forecastTemp = data.list[0].main.temp;
  const forecastType = data.list[0].weather[0].main.toLowerCase();

  const userType = "Premium"; // ose "Free"
  const personalization = new RecommendationPersonalization(userType);

  personalization.addSponsorship(new Sponsorship(
    "RainCoat Co.",
    "Stay dry with 20% off raincoats!",
    { weatherType: "rain" }
  ));

  personalization.addSponsorship(new Sponsorship(
    "HotDrinks Inc.",
    "Warm up with our cocoa!",
    { tempBelow: 15 }
  ));

  const recommendations = personalization.getRecommendations({
    temp: forecastTemp,
    type: forecastType
  });

  const sponsorDiv = document.getElementById("sponsorships");
  if (sponsorDiv) {
    sponsorDiv.innerHTML = recommendations.length > 0
      ? recommendations.map(r => `<p>${r}</p>`).join('')
      : "<p>No sponsorships today.</p>";
  }
}
  

  async function getSearch(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=903507f17d707fecd352d38301efba77&units=metric`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      showFlow(cityData);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }

  function getLocation(searchBar) {
    const city = (document.getElementById(searchBar).value).toLowerCase();
    getSearch(city);
  }

  async function getForecast() {
    try {
      const value = (document.getElementById('search').value).toLowerCase();
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=903507f17d707fecd352d38301efba77`;
      const response = await fetch(url, { mode: 'cors' });
      const cityData = await response.json();
      forecastFlow(cityData);
    } catch (error) {
      console.error('Error:', error);
      alert('Could not find the location');
    }
  }


  return {
    getSearch, showFlow, getForecast, getLocation,
  };
};

export { events as default };