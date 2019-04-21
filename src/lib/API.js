
const proxy='https://cors-anywhere.herokuapp.com/';
const API_KEY= 'c202eca0a84479d1a53bf0e6549c478e';
const location= '37.8267,-122.4233';
const API_URL = `${proxy}https://api.darksky.net/forecast/c202eca0a84479d1a53bf0e6549c478e/37.8267,-122.4233`;




 function getWeather(){
     return fetch(API_URL)
    .then(res => res.json())
}

export default{
    getWeather
};