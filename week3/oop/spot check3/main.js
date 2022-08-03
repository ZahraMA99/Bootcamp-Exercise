class Vehicle {
  static carSold = 0;
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    thix.fuel = fuel;
    this.speed = speed;
    Vehicle.carSold++;
  }

  getInfo() {
    console.log("Cars are great");
  }
  static calculateMoney() {
    const dollar = (Vehicle.carSold)*30000;
    console.log("Made " +dollar+ " dollars") ;
  }
  set setFuel(speed) {
    if (speed < 0) {
        return console.log("Speed must be positive")
    }
    this._speed = speed
}
}
}

const v1 = new Vehicle();
const v2 = new Vehicle();
const v3 = new Vehicle();
Vehicle.calculateMoney();
