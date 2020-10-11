function Car({name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10}) {
	this.name = name;
	this.model = model;
	this.year = year;
	this.color = color;
	this.maxSpeed = maxSpeed;
	this.fuelCapacity = fuelCapacity;
	this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function() {
	return `${this.name} ${this.model}`;
}

Car.prototype.getAge = function() {
	return new Date().getFullYear() - this.year;
}

Car.prototype.changeColor = function(color) {
	if(this.color === color) {
		console.log(`This car already is ${color}`);
	} else {
		this.color = color;
		console.log(`Now this car is ${this.color}`);
	}
}

Car.prototype.calculateWay = function(kilometers, fuel) {
	if(fuel < 10) {
		console.log('There is not enough fuel, you need to refuel the car');
	}
	let travelTime = kilometers / this.maxSpeed;
	let requiredFuel = kilometers / 100 * this.fuelConsumption;
	console.log(`A car travels ${kilometers} km in ${travelTime} hours`);
	if(requiredFuel > fuel) {
		console.log(`A car needs ${requiredFuel} L. for this distance, you need to refuel ${Math.ceil((requiredFuel - fuel) / this.fuelCapacity)} times`);
	}
}