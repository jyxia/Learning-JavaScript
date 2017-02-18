var orders = [
  { amount: 350 },
  { amount: 150 },
  { amount: 250 },
  { amount: 330 },
  { amount: 312 }
];

var totalAmount = orders.reduce(function(sum, order) {
  console.log("hi", sum, order);
  return sum + order.amount;
}, 0); // 0 is the initial value (starting point)

console.log(totalAmount);
