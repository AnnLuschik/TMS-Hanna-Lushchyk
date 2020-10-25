import { clearTable, showWeatherData } from './dom-service'
import { getWeather } from './data-service'

const findInput = document.querySelector('#input');

const clearButton = document.querySelector('#clear');

const myWeatherButton = document.querySelector('#my-weather');

let cityMap = new Map();



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