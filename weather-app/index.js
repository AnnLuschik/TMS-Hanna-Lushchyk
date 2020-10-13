const findInput = document.querySelector('#input');

const clearButton = document.querySelector('#clear');

const table = document.querySelector('#tbody');

let cityMap = new Map();

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

form.addEventListener('submit', function(event) {
	event.preventDefault();

	getWeather(findInput.value)
	.then(result => {
		let {
			location: {name: city, country, lat, lon}, 
			current: {temperature: tempC}
		} = result;

		let tempF = Math.ceil((tempC * 1.8) + 32);

		cityMap.set(city, {city, country, tempC, tempF, lat, lon});

		renderTableRow();

		getLocation(lat, lon);

	});

});

clearButton.addEventListener('click', function() {
	table.innerHTML = '';
})