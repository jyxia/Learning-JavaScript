// because there is var a, it means, a get hoisted to the top the function,
// same as define `var a = 20` at the top, then `a` inside the function is a local variable
// this local a is not the same variable in the global.
// 1st example
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);  // 1

// second example
var a = 1;
function b() {
    a = 10;
    return;
    var a = 20;
}
b();
console.log(a);  // 1

// The a inside the function is the global a
var a = 1;
function b() {
    a = 10;
    return;
}
b();
console.log(a);  // 10

// a gets hoisted, so a acts as if it is declared!!!! but not defined.
a = 1;
function b() {
    console.log(typeof a); // undefined
    return;
    var a = function() {};
}
b();

// a gets hoisted, so a acts as if it is declared!!!!
a = 1;
function b() {
    console.log(typeof a); // undefined
    return;
    var a = 10;
}
b();

// function a gets hoisted, it is a function!!!!!!!
a = 1;
function b() {
    console.log(typeof a); // function
    return;
    function a() {};
}
b();

// global variable now
a = 1;
function b() {
    console.log(typeof a); // number
    return;
}
b();
