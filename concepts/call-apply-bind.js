var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMonthlyFee: function(fee) {
     this.total = this.total - fee;
     return this.name + ' remaining balance is '+ this.total;
  }
};

var rachel = { name: 'Rachel Green', total: 1500 };

// use call or apply, you can get the result immediately (the function is invoked instantly)
var rachelFeeDeductor = monica.deductMonthlyFee.call(rachel, 200);
console.log(rachelFeeDeductor);
// same for apply
var rachelFeeDeductor2 = monica.deductMonthlyFee.apply(rachel, [200]);
console.log(rachelFeeDeductor2);

var ross = {name:'Ross Geller', total:250};
// bind the function now, but use the function later.
// the function is called with the particular `this` (`ross` object in this case)
var RossFeeDeductor = monica.deductMonthlyFee.bind(ross, 200);
// now you can use the new function
console.log(RossFeeDeductor());
