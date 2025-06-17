class Car {
  constructor(make, model, year) {
    // Encapsulated data
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineRunning = false;
    this.currentSpeed = 0;
  }

  // Encapsulated methods
  startEngine() {
    this.isEngineRunning = true;
    console.log('Engine started.');
  }

  accelerate(speed) {
    if (this.isEngineRunning) {
      this.currentSpeed += speed;
      console.log(`Accelerated to ${this.currentSpeed} km/h.`);
    } else {
      console.log('Engine is not running. Please start the engine first.');
    }
  }
}