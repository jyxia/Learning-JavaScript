// simple case
var arr = [[0, 1], [2, 3], [4, 5]];

var flatArr = arr.reduce((results, element)  => results.concat(element), []);

console.log(flatArr);

// recursion
var arr = [0, [1, [2, [3, [4, [5]]]]]];

var flatArr = arr => {
  return arr.reduce((results, element)  => {
    var nextElment = Array.isArray(element) ? flatArr(element) : element;
    return results.concat(nextElment);
  }, []);
};

console.log(flatArr(arr));

// (param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }
const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
console.log(flatten(arr));
