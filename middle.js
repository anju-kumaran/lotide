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

module.exports = middle;