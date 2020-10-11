class Car {
	constructor({name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10}) {
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
		if(requiredFuel > fuel) {
			console.log(`A car needs ${requiredFuel} for this distance, you need to refuel ${Math.ceil((requiredFuel - fuel) / this.fuelCapacity)} times`);
		}
	}
}

class Toyota extends Car {
	constructor(hybridSynergyDrive, battery, {
		name, 
		model, 
		year, 
		color, 
		maxSpeed, 
		fuelCapacity, 
		fuelConsumption
	}) {
		super({name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption});
		this.hybridSynergyDrive = hybridSynergyDrive;
		this.battery = battery;
	}

	set battery(value) {
		if(value >=0 && value <=100) {
			this._battery = value;
		}
	}

	get battery() {
		return this._battery;
	}

	chargeBattery(value) {
		if(value > this.battery) {
			this.battery = value;
			console.log(`Now battery is ${this.battery}%`);
		} else {
			console.log(`Battery is ${this.battery}%`);
		}
	}
}

class Lexus extends Car {
	constructor(climateControl, {
		name, 
		model, 
		year, 
		color, 
		maxSpeed, 
		fuelCapacity, 
		fuelConsumption
	}) {
		super({name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption});
		this.climateControl = climateControl;
	}

	set climateControl(value) {
		if(typeof value === 'boolean') {
			this._climateControl = value;
		}
	}

	get climateControl() {
		return this._climateControl;
	}

	changeClimateControl() {
		if(climateControl) {
			this.climateControl = false;
			console.log('Climate control is turned off.');
		} else {
			this.climateControl = true;
			console.log('Climate control is turned on.');
		}
	}
}

class Volkswagen extends Car {
	constructor( trunkCapacity = 460, {
		name, 
		model, 
		year, 
		color, 
		maxSpeed, 
		fuelCapacity, 
		fuelConsumption
	}) {
		super({name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption});
		this.trunkCapacity = trunkCapacity;
	}

	set trunkCapacity(value) {
		if(value >=0 && value <= 460) {
			this._trunkCapacity = value;
		}
	}

	get trunkCapacity() {
		return this._trunkCapacity;
	}

	putPotatoesInTheTrunk(bag) {
		if((bag * 40) <= this.trunkCapacity) {
			this.trunkCapacity -= bag * 40;
			if(bag > 1) {
				console.log(`You put ${bag} bags of potatoes in the trunk.`);
			} else if (bag === 1) {
				console.log(`You put ${bag} bag of potatoes in the trunk.`);
			} else {
				console.log(`You did'nt put potatoes in the trunk.`);
			}
			
		} else {
			console.log(`You can put just ${Math.floor(this.trunkCapacity / 40)} bags in the trunk.`);
		}
	}
}