import { Sponsorship, RecommendationPersonalization } from './helpers'; // ose './sponsorship' nëse i ke ndarë


const recommender = new RecommendationPersonalization("Premium");
recommender.addSponsorship(new Sponsorship("Adidas", "Mbajini këmbët ngrohtë me Adidas!", { tempBelow: 5 }));

const weather = { temp: 2, type: "snow" };
const results = recommender.getRecommendations(weather);
results.forEach(msg => console.log(msg));


const places = require('places.js');

function autoComplete() {
  const KEY = 'cfae4a461317aedc5bdd601b0ea17261' 
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