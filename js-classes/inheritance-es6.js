class Car {
	constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
		this.name = name;
		this.model = model;
		this.year = year;
		this.color = color;
		this.maxSpeed = maxSpeed;
		this.fuelCapacity = fuelCapacity;
		this.fuelConsumption = fuelConsumption;
	}

	getFullName() {
		return `${this.name} ${this.model}`;
	}

	getAge() {
		return new Date().getFullYear() - this.year;
	}

	changeColor(color) {
		if(this.color === color) {
			console.log(`This car already is ${color}`);
		} else {
			this.color = color;
			console.log(`Now this car is ${this.color}`);
		}
	}

	calculateWay(kilometers, fuel) {
		if(fuel < 10) {
			console.log('There is not enough fuel, you need to refuel the car');
		}
		let travelTime = kilometers / this.maxSpeed;
		let requiredFuel = kilometers / 100 * this.fuelConsumption;
		console.log(`A car travels ${kilometers} km in ${travelTime} hours`);
		if(requiredFuel < fuel) {
			console.log(`A car needs ${requiredFuel} for this distance, you need to refuel ${Math.ceil((requiredFuel - fuel) / this.fuelCapacity)} times`);
		}
	}
}