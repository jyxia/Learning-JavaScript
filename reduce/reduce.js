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
