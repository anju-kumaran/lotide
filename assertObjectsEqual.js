const eqArrays = function(inputArr1, inputArr2) {
  let result = true;
  for ( let i = 0; i < inputArr1.length; i++) {
    if (inputArr1[i] !== inputArr2[i]) {
      result = false;
    } 
  }
  return result;
 };

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      if (Array.isArray(object1[key])) {
        eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  //const inspect = require('util').inspect;
  //console.log(`Example jhjhlabel: ${inspect(actual)}`);
  let flag = eqObjects(actual, expected);
  
  if (flag) {
    console.log('✅ Assertion Passed: ', actual, ' === ', expected);
    //console.log(`Example label: ${inspect(actual)}`);
  } else {
    console.log('🛑 Assertion Failed: ', actual, ' === ', expected);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(eqObjects(ab, abc), false);

const abcd = { a: "1", b: "1"};
eqObjects(ab, abcd); // => false
assertObjectsEqual(eqObjects(ab, abcd), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false