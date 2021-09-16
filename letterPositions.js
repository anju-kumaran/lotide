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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      position = results[sentence[i]];
      position.push(i);
      results[sentence[i]] = position;
    } else {
      let position = [];
      position.push(i);
      results[sentence[i]] = position;
    }
  }
  return results;
};

//console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hhelllo").l, [ 3, 4, 5 ]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);