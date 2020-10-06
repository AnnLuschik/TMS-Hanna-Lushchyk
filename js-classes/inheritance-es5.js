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
}