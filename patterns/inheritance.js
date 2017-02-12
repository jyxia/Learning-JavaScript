/*
  Beverage example, using constructor
*/
function Beverage(name) {
  this.name = name;
}

Beverage.prototype.drink = function() {
  console.log("You are drinking " + this.name);
};

function Coffee(name, type) {
  Beverage.call(this, name);
  this.type = type;
}

Coffee.prototype.sip = function() {
  console.log("You are sinking " + this.name);
}

// Object.create provides prototypal inheritance
// Essentially, The Object.create() method creates
// a new object with the specified prototype object and properties.
// So that it provides inheritance
Coffee.prototype = Object.create(Beverage.prototype);

var coffee = new Coffee('mocha');
coffee.drink();
coffee.sip()

/*
  literal object example, a single object inheritance
*/
// literal object testing
var bear = {
  name: "bear",
  sayName: function() {
    console.log("this is a " + this.name);
  }
};

var grizzly = Object.create(bear, {
  name: {
    value: "grizzly"
  },
  sayName: {
    value: function() {
      console.log("this is a overwritten sayName " + this.name);
    }
  },
  roar: {
    value: function() {
      console.log(this.name + " is roaring")
    }
  }
});

grizzly.sayName();
grizzly.roar(); // print out "grizzly is roaring"

/*
  delete test
*/
// delete actually delete 'price' property of 'customObject' itself.
// However, when you call the method getprice, first it looks for this.price in the child
// since the customObject doesn't have price property,
// JavaScript executor walks through the prototype chain towards the parent.
var myObject = {
    price: 20.99,
    get_price : function() {
        return this.price;
    }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;

delete customObject.price;
console.log(customObject.get_price()); // 20.99


/// what about this tricky JavaScript
function Person() {
  var firstName = "John";
  this.lastName = "Doe"
}

Person.prototype.sayName = function() {
  return name; // name is ""
};

Person.prototype.sayLastName = function() {
  return this.lastName; // this will return lastname as normal
};

Person.prototype.sayFirstName = function() {
  return firstName; // error due to the local variable `firstName`
};

var p = new Person();
console.log(p.sayName()); // return ""!!! `name` is an inheritanted property from Object???
console.log(p.sayLastName()); // return lastName
console.log(p.sayFirstName()); // error, firstName not defined
