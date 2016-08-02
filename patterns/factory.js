// Factory pattern example
// var carolla = CarMaker.factory('Compact');
// var miyata = CarMaker.factory('Convertible');
// var cherokee = CarMaker.factory('SUV');
// carolla.drive() // "I have 4 doors"
// miyata.drive() // "I have 2 doors"
// cherokee.drive() // "I have 7 doors"

function CarMaker() {};

CarMaker.prototype.drive = function() {
  return "I have " + this.doors + " doors";
};

CarMaker.factory = function(type) {
  var newCar;

  if (typeof CarMaker[type] !== 'function') {
    throw {
      name: 'error',
      message: type + " is not supported"
    }
  }

  if (typeof CarMaker[type].prototype.drive !== 'function') {
    CarMaker[type].prototype = Object.create(CarMaker.prototype);
  }

  newCar = new CarMaker[type] ();
  return newCar;
};

CarMaker.Compact = function() {
  this.doors = 4;
};

CarMaker.Convertible = function() {
  this.doors = 2;
};

CarMaker.SUV = function() {
  this.doors = 7;
};
