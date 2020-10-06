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
			alert(`This car already is ${color}`);
		} else {
			this.color = color;
			alert(`Now this car is ${this.color}`);
		}
	}
}