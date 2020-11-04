const table = document.querySelector('#tbody');
const map = document.querySelector('#map');


export function showWeatherData(obj, dataMap) {
	let {
		location: {name: city, country, lat, lon}, 
		current: {temperature: tempC}
	} = obj;

	let tempF = Math.ceil((tempC * 1.8) + 32);

	dataMap.set(city, {city, country, tempC, tempF, lat, lon});

	renderTableRow(dataMap);

	showLocationMap(lat, lon);
}


export function clearTable() {
	table.innerHTML = '';
	map.src = '';
}


function renderTableRow(dataMap) {

	let tBody = '';

	dataMap.forEach(value => {
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


function showLocationMap(lat, lon) {
	map.src = `https://maps.locationiq.com/v2/staticmap?key=pk.d89054d8b17b55dfd7691554b7652a5a&center=${lat},${lon}&size=400x400&zoom=14&markers=${lat},${lon}|icon:large-red-cutout;&format=png`;
}
