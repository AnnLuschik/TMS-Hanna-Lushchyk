const findInput = document.querySelector('#input');

const clearButton = document.querySelector('#clear');

const myWeatherButton = document.querySelector('#my-weather');

const table = document.querySelector('#tbody');

const map = document.querySelector('#map');

let cityMap = new Map();

function showWeatherData(obj) {
	let {
		location: {name: city, country, lat, lon}, 
		current: {temperature: tempC}
	} = obj;

	let tempF = Math.ceil((tempC * 1.8) + 32);

	cityMap.set(city, {city, country, tempC, tempF, lat, lon});

	renderTableRow();

	showLocationMap(lat, lon);
}

function renderTableRow() {

	let tBody = '';

	cityMap.forEach(value => {
		let {city, country, tempC, tempF} = value;

		tBody += `
		<tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${tempC}</td>
            <td>${tempF}</td>
        </tr>
		`
	});

	table.innerHTML = tBody;
}

function getWeather(city) {
	return fetch(`http://api.weatherstack.com/current?access_key=cc3f94caaf8feef30483bb3e706b17e8&query=${city}`)
	.then(response => response.json());
}

function showLocationMap(lat, lon) {
	map.src = `https://maps.locationiq.com/v2/staticmap?key=pk.d89054d8b17b55dfd7691554b7652a5a&center=${lat},${lon}&size=400x400&zoom=14&markers=${lat},${lon}|icon:large-red-cutout;&format=png`;
}

function getWeatherByCoords({coords: {latitude: lat, longitude: lon}}) {
	getWeather(lat, lon)
	.then(response => {
		localStorage.setItem(response.location.name, JSON.stringify(response));
		showWeatherData(response)
	});
}

function getWeatherForMyLocation() {
	navigator.geolocation.getCurrentPosition(getWeatherByCoords);
}

function showDataFromStorage() {
	let keys = Object.keys(localStorage);
	for(let key of keys) {
		getWeather(key)
		.then(result => {
			localStorage.setItem(key, JSON.stringify(result));
			showWeatherData(result);
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
	.then(result => showWeatherData(result));

	findInput.value = '';
});

clearButton.addEventListener('click', () => {
	table.innerHTML = '';
	map.src = '';
});