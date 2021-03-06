
const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = 'c202eca0a84479d1a53bf0e6549c478e';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`;


function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getWeather(lat, lng) {
  return fetch(`${WEATHER_API_URL}${lat},${lng}`)
    .then(res => res.json());
}

function getAddress(lat,lng){
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
  .then(response => response.json())
}

function getEmbedURL(lat, lng) {
  return `https://darksky.net/map-embed/@temperature,${lat},${lng},4.js?domain="+encodeURIComponent(window.location.href)+"&auth=1525213550_b5fc128e7789bb56048952cc704c8473& embed=true&timeControl=false&fieldControl=false&defaultField=temperature&defaultUnits=_c`
}
export default {
  getAddress,
  getWeather,
  getCoordinates,
  getEmbedURL,
};
