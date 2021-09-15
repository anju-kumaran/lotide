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

const without = function(source, itemsToRemove) {
  let newArr = [];
  for ( let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  return newArr;
}

 assertArraysEqual(without([1, 2, 3], [1]),[2, 3] )// => [2, 3]
 assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);