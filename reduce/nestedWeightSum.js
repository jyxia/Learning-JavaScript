// similar to Leetcode 339 weighted nested list weight sum

var depthSum = function(nestedList) {
    return helper(nestedList, 1);
};

var helper = function(nestedList, depth) {
    return nestedList.reduce(function(sum, list) {        
        if (!Array.isArray(list)) {
          sum += list * depth;
        } else {
          sum += helper(list, depth + 1);
        }

        return sum;
    }, 0);
};

// test
var sum = depthSum([2, [1, 1], [1, 1]]);
console.log(sum);
