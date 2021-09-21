const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  // Test Case 1: Check the returned array elements
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns Labs for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result[1], 'Labs');
  });

  // Test Case 2: Check the original array 
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns Labs for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(words.length, 3); // original array should still have 3 elements!
  });
  
  // Test Case 3: Array with only one element should yield an empty array for its tail 
  const singleArr = tail(["Lighthouse"]); 
  it("returns 0 for ['Lighthouse']", () => {
    assert.deepEqual(singleArr.length, 0); // 0 elements!
  });

  //Test Case 4:  Empty array should yield an empty array for its tail
  const emptyArr = tail([]); 
  it("returns 0 for []", () => {
    assert.deepEqual(emptyArr.length, 0); // 0 elements!
  });
  

});