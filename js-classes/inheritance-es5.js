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
	let travelTime = Math.round(kilometers / this.maxSpeed * 10) / 10;
	let requiredFuel = Math.round(kilometers / 100 * this.fuelConsumption * 10) / 10;
	console.log(`A car travels ${kilometers} km in ${travelTime} hours`);
	if(requiredFuel > fuel) {
		console.log(`A car needs ${requiredFuel} L. for this distance, you need to refuel ${Math.ceil((requiredFuel - fuel) / this.fuelCapacity)} times`);
	}
}

function Toyota(hybridSynergyDrive, battery, {name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption}) {
	Car.call(this, {name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption});
	this.hybridSynergyDrive = hybridSynergyDrive;
	this.battery = battery;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Object.defineProperty(Toyota.prototype, 'battery', {
	set(value) {
		if(value >=0 && value <=100) {
			this._battery = value;
		}
	},

	get() {
		return this._battery;
	}
});

Toyota.prototype.chargeBattery = function(value) {
	if(value > this.battery) {
		this.battery = value;
		console.log(`Now battery is ${this.battery}%`);
	} else {
		console.log(`Battery is ${this.battery}%`);
	}
}

let toyota = new Toyota(true, 10, {
	name: 'Toyota', 
	model: 'Prius', 
	year: 2010, 
	color: 'gray', 
	maxSpeed: 160, 
	fuelCapacity: 43, 
	fuelConsumption: 5,
});

console.log(toyota.getFullName());
console.log(toyota.getAge());
toyota.changeColor('gray');
toyota.changeColor('red');
toyota.calculateWay(300, 20);
toyota.chargeBattery(120);
toyota.chargeBattery(100);