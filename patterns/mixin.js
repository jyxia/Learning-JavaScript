function Person(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

var speaker = {
  speak: function() {
    return this.name + " is speaking";
  }
};

var mover = {
  walk: function() {
    return this.name + " is walking";
  },
  run: function() {
    return this.name + " is running";
  }
};

var arithmetic = {
  add: function() {
    return this.name + " is adding numbers";
  }
};

// extend speak, walk, running to Person and Dog. Mixins.
// in jQuery, $.extend(Person, speaker, mover, arithmetic);
// $.extend(Dog, mover);

function extend(target) {
  if (!arguments[1]) {
    return;
  }

  for (var i = 1, length = arugments.length; i < length; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (!target[prop] && source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
}
