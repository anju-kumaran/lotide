const eqArrays = function(inputArr1, inputArr2) {
  let result = true;
  for ( let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] !== inputArr2[i]) {
      result = false;
    } 
  }
  return result;
 };

const assertArraysEqual = function(actual, expected) {
  let flag = eqArrays(actual, expected);
  if (flag) {
    console.log('✅ Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('🛑 Assertion Failed: ', actual, ' === ', expected);
  }
};

const takeUntil = function(array, callback) {
  for (let item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);