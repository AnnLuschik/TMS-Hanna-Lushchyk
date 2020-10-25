import { clearTable, showWeatherData } from './dom-service'

const findInput = document.querySelector('#input');

const clearButton = document.querySelector('#clear');

const myWeatherButton = document.querySelector('#my-weather');

let cityMap = new Map();


function getWeather(city) {
	return fetch(`http://api.weatherstack.com/current?access_key=cc3f94caaf8feef30483bb3e706b17e8&query=${city}`)
	.then(response => response.json());
}

function getWeatherByCoords({coords: {latitude: lat, longitude: lon}}) {
	getWeather(lat, lon)
	.then(response => {
		localStorage.setItem(response.location.country, JSON.stringify(response));
		showWeatherData(response, cityMap)
	});
}

function getWeatherForMyLocation() {
	navigator.geolocation.getCurrentPosition(getWeatherByCoords);
}

function showDataFromStorage() {
	let keys = Object.keys(localStorage);
	for(let key of keys) {
		if(key = 'loglevel:webpack-dev-server') {
			return;
		}
		getWeather(key)
		.then(result => {
			localStorage.setItem(key, JSON.stringify(result));
			showWeatherData(result, cityMap);
		});
	}
}


window.addEventListener('load', () => {
	showDataFromStorage();
});


myWeatherButton.addEventListener('click', () => {
	getWeatherForMyLocation();
});

form.addEventListener('submit', function(event) {

	event.preventDefault();

	getWeather(findInput.value)
	.then(result => showWeatherData(result, cityMap));

	findInput.value = '';
});

clearButton.addEventListener('click', clearTable);