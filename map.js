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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

