// see stackoverflow
// http://stackoverflow.com/questions/26695272/how-would-i-write-this-jquery-addclass-method-in-vanilla-js

function $(selector) {
  return new Selector(selector);
}

function Selector(selector) {
  this.selectors = document.querySelectorAll(selector);
}

Selector.prototype.addClass = function(name) {
  this.selectors.forEach(function(selector) {
    selector.className += ' ' + name;
  });
}
