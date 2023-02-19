const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
}

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.contructor = EV;

console.log(EV.prototype.contructor);

tesla = new EV('Tesla', 120, 50)

console.log(tesla, tesla.__proto__)