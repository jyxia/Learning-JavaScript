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

var endorsements = [
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'css', user: 'Bill' },
  { skill: 'html', user: 'Sue' }
];

// Result

//[
//  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
//  { skill: 'html', user: [ 'Sue' ], count: 1 }
//];

var results = endorsements.reduce((result, endorsement) => {
  var newSkill = true;
  result.forEach((res) => {
    if (res.skill === endorsement.skill) {
      res.user.push(endorsement.user);
      res.count++;
      newSkill = false;
    }
  });

  if (newSkill) {
    result.push({
      skill: endorsement.skill,
      user: [endorsement.user],
      count: 1
    });
  }

  return result;
}, []);

console.log(results);
