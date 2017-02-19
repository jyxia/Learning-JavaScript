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

var results = endorsements.reduce((results, endorsement) => {
  var newSkill = true;
  results.forEach((res) => {
    if (res.skill === endorsement.skill) {
      res.user.push(endorsement.user);
      res.count++;
      newSkill = false;
    }
  });

  if (newSkill) {
    results.push({
      skill: endorsement.skill,
      user: [endorsement.user],
      count: 1
    });
  }

  return results;
}, []);

console.log(results);

// an updated version using find
var results = endorsements.reduce((results, endorsement) => {
  var updateEntry = results.find(result => {
    return result.skill === endorsement.skill;
  });

  if (updateEntry) {
    updateEntry.user.push(endorsement.user);
    updateEntry.count++;
  } else {
    results.push({
      skill: endorsement.skill,
      user: [endorsement.user],
      count: 1
    });
  }

  return results;
}, []);

console.log(results);
