var person = {
  firstName: 'first name',
  lastName: 'last name'
}

var joe = Object.create(person);

console.log(joe.firstName);
console.log(joe.lastName);
console.log(joe.middleName); // undefined
