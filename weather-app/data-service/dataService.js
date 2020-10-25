export function getWeather(city) {
	return fetch(`http://api.weatherstack.com/current?access_key=cc3f94caaf8feef30483bb3e706b17e8&query=${city}`)
	.then(response => response.json());
}