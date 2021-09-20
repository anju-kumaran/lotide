const eqArrays = function(inputArr1, inputArr2) {
  let result = false;
  for ( let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] !== inputArr2[i]) {
      return false;
    } else {
      result = true;
    } 
  }
  return result;
 };

 module.exports = eqArrays;