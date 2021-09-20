const eqArrays = require('./eqArrays');
const assertArraysEqual = function(inputArr1, inputArr2) {
  let flag = eqArrays(inputArr1, inputArr2);
 
  if (flag) {
    console.log('✅ Assertion Passed: ', inputArr1, ' === ', inputArr2);
  } else {
    console.log('🛑 Assertion Failed: ', inputArr1, ' === ', inputArr2);
  }

  return flag;
};

module.exports = assertArraysEqual;