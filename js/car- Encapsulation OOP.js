console.log("temp.js is running");

// class Car {
//   constructor(make, model, year) {
//     // Encapsulated data
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.isEngineRunning = false;
//     this.currentSpeed = 0;
//   }

//   // Encapsulated methods
//   startEngine() {
//     this.isEngineRunning = true;
//     console.log('Engine started.');
//   }

//   accelerate(speed) {
//     if (this.isEngineRunning) {
//       this.currentSpeed += speed;
//       console.log(`Accelerated to ${this.currentSpeed} km/h.`);
//     } else {
//       console.log('Engine is not running. Please start the engine first.');
//     }
//   }
// }



class Character {
	constructor (name, playerName, hitPoints, charLevel = 1) {
		console.log("Calling constructor!");
		// this.image_source = "https://www.mysite.com/jhbh8noma.jpg"
		this.campaign = "The Pirate Campaign"
		this.name = name;
		this["player name"] = playerName;
		this.hp = hitPoints;
		this.level = charLevel;
		// this.level = charLevel || 1;

		// if (charLevel === undefined) {
		// 	this.level = 1;
		// }

	}
}

const drud = new Character("Drud", "Bobba", 100, 5);
const eep = new Character("Eep", "Scott", 15);
const marlin = new Character("Marlin", "Matt", 42, 42);

console.log(drud, eep, marlin);
