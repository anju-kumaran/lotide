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

const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2); 
  let middleElement = [];
  if (array.length > 2) {
    if(array.length % 2 === 0) {
      middleElement.push(array[middleIndex - 1]);
      middleElement.push(array[middleIndex]);
    } else {
      middleElement.push(array[middleIndex]); 
    }
  }
  return middleElement;
};

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]);// => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]