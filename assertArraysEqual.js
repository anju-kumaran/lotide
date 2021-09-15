const assertArraysEqual = function(inputArr1, inputArr2) {
  let flag = true;
  for ( let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] !== inputArr2[i]) {
      flag = false;
    }
  }
  if (flag) {
    console.log('✅ Assertion Passed: ', inputArr1, ' === ', inputArr2);
  } else {
    console.log('🛑 Assertion Failed: ', inputArr1, ' === ', inputArr2);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); 
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); 