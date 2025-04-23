const places = require('places.js');

function autoComplete() {
  const KEY = '572b3b2570bb87550218e111aedb86e5';
  const ID = 'plBAKYUGY2FI';
  const placesAutocomplete = places({
    appId: ID,
    apiKey: KEY,
    container: document.querySelector('#search'),
    templates: {
      value(suggestion) {
        return suggestion.name;
      },
    },
  }).configure({
    type: 'city',
    aroundLatLngViaIP: true,
  });
  return placesAutocomplete;
}


export default autoComplete;