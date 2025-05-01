const helpers = function () {
  const createElement = function (tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  };

  const createElementWithInnerText = function (tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    return element;
  };

  const addInnerText = function (id, text) {
    const element = document.getElementById(id);
    if (element) {
      element.innerText = text;
      return text;
    }
    return null;
  };

  const capitalizeDescription = function (desc) {
    if (!desc) return '';
    return desc.charAt(0).toUpperCase() + desc.slice(1);
  };

  const isColdWeather = function (tempCelsius) {
    return tempCelsius < 10;
  };

  const clearError = function () {
    const errorDiv = document.getElementById("errorMessage");
    if (errorDiv) errorDiv.innerText = "";
  };

  async function getFahrenheit(city) {
    try {
      clearError(); // pastron gabimet

      const API_KEY = 'cfae4a461317aedc5bdd601b0ea17261'; // përdor key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

      const response = await fetch(url);

      if (!response.ok) {
        let message;
        if (response.status === 401) {
          message = "401 → çelësi i API-së është gabim ose mungon autorizimi";
        } else if (response.status === 404) {
          message = "404 → qyteti nuk u gjet";
        } else if (response.status >= 500) {
          message = "500+ → problem me serverin";
        } else {
          message = `Gabim ${response.status} – ${response.statusText}`;
        }

        document.getElementById("errorMessage").innerText = message;
setTimeout(() => {
  document.getElementById("errorMessage").innerText = "";
}, 5000);

        console.error("API Error:", message);
        return null;
      }

      const cityFahr = await response.json();
      return cityFahr;
    } catch (error) {
      document.getElementById("errorMessage").innerText = "Gabim në rrjet ose lidhje me API.";
      console.error('Network Error:', error);
      return null;
    }
  }

  return {
    addInnerText,
    createElement,
    createElementWithInnerText,
    getFahrenheit,
    capitalizeDescription,
    isColdWeather,
    clearError,
  };
};

export default helpers;
