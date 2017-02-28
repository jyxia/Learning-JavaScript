#### Hoist
Hoisting is JavaScript's default behavior of moving declarations to the top.
* No matter where you defined a `var`, (`var` statement), these variables act as if they were *declared* at the top of the function.
* Same for function declaration and name function expression, but not the function expression.
* JavaScript only hoists declarations, not *initializations*. (e.g. if define `var a = 10;` at the bottom of a function, but `a` is returned before this declarations, the output is `undefined` since `a` is not initialized);

#### Event Bubbling
* inner -> outer
* if use `capture`, then outer -> inner
* because event bubbling, event delegation can be implemented

#### `event.stopPropagation()` vs `event.preventDefault()`
* stopPropagation: Traps the events and doesn't let the event bubble up to the parent node
* preventDefault: Doesn't let the browser do the default actions
  * e.g. following a link or submitting a form.

#### Functions are first-class objects
* A function is an instance of `Object` type
* A function can have properties and methods, even its own constructor.
* A function can be assigned to a variable. So, functions are values.
* A function can be passed as an argument of a function

#### `this` keyword
* In the global context or inside a function this refers to the window object.
* function:
  * While executing a function in the context of an object, the object becomes the value of this
  * Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined.
  * If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
* Object.
* when use `apply`, `call`, passed object.
  * You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
* For dom event handler, value of this would be the element that fired the event
* Inside a setTimeout function, the value of this is the window object.

#### `apply`, `call`, `bind`?
* Borrowing methods without paying inheritance tax. (not copy the extra properties from prototype)
* `call` & `apply` invoke the function in the context immediately.
* `bind`: return the function for later use.
But `this` is passed to the function. (widely used for event listener callbacks).
* `call` pass multiple params, `apply` pass an array contains the multiple params.

#### `null` vs. `undefined`
* `undefined` means, value of the variable is not defined. undefined is a type with exactly one value: undefined.
* `null` means empty or non-existent value which is used by programmers to indicate “no value”. *primitive* type.

#### JavaScript primitive types?
`number`, `string`, `boolean`, `null`, `undefined`

#### Compare objects?
* First, consider the length of properties and if they have same properties.
* Second, you will check each property whether they have the same value.

#### Prototypal inheritance? (see [patterns](./patterns))
* You have an object that you want to reuse and you want to create a second object that gets its functionality from the first one!
* `Object.create(obj, {})` create a new object with `obj`
* e.g. (Prototypal inheritance)
```javascript
  function Parent(name) {
    this.name = name;
  }
  function Child(name) {
    Parent.call(this, name);
  }
  Child.prototype = Object.create(Parent.prototype);
```

#### Prototypal inheritance vs Classical inheritance
* Prototypal: it is a *delegation*. If an object is lacking a property, then it goes to its prototype, and so on until the process finally bottoms out with `Object.prototype`. If the desired property exists nowhere in the prototype chain, then the result is `undefined`. This is called `delegation`.

#### Native objects vs. Host objects
* Native objects: object in an ECMAScript implementation whose semantics are fully defined by this specification rather than by the host environment.
  * e.g. Math, Date etc.
* Host object: object supplied by the host environment to complete the execution environment of ECMAScript.
NOTE Any object that is not native is a host object.
  * e.g. Host objects (assuming browser environment): window, document, location, history, ....

#### Curry
Partial application
`add(5)(2) //7`

#### `postmessage`
To send a message to another window referenced by win, the postMessage method is used.
send the message to iframe on another domain.

To receive
```javascript
window.addEventListener('message',function(event) {});
```

#### `slice` vs `splice`
* `slice(start, end)`: returns a new array. *the original array is not changed*
* `splice(position, howmany, item1, ..., itemx)`, `position` is the position to add or remove. `howmany` to be removed. If it is 0, no items will be removed, then just insert the items into the position.
e.g.
``` javascript
var arr = ['x', 'y', 'z'];
arr.splice(2, 0, 'a'); // arr = ['x', 'y', 'a', 'z'];
```
#### `__proto__` vs. `prototype`
* object has `__proto__`, is used in the lookup chain to resolve methods. For example,
```javascript
 var dog = { breed: 'bulldog' };
 var myDog = { name: 'mydog' };
 Object.setPrototypeOf(myDog, dog);
 
 console.log(myDog.__proto__); // Object { breed: 'bulldog' }
 console.log(myDog.prototype); // undefined
```
 
* function has `prototype` only exists on functions, in case you want to use those objects as constructors passed to the `new` keyword.


#### Promise vs. callback
* Promise is composable. You can combine all promises into one array. For exmaple, `Promise.all[promise1, promise2...]`
* Promise is syntactic sugar for callbacks 
