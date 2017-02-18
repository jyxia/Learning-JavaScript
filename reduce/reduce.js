// mark john waffle 80 2
// mark john blender 200 1
// mark john knife 10 4
// Nick Smith waffle 80 1
// Nick Smith knife 10 2
// Nick Smith pot 20 3

// output:
// {
//   mark:
//    [ { name: 'john', price: 'waffle', quantity: '80' },
//      { name: 'john', price: 'blender', quantity: '200' },
//      { name: 'john', price: 'knife', quantity: '10' } ],
//   Nick:
//    [ { name: 'Smith', price: 'waffle', quantity: '80' },
//      { name: 'Smith', price: 'knife', quantity: '10' },
//      { name: 'Smith', price: 'pot', quantity: '20' } ]
// }

var fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((customer, line) => {
    customer[line[0]] = customer[line[0]] || [];
    customer[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customer;
  }, {});

console.log(output);
