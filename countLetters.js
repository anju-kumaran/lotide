const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('✅✅✅ Assertion Passed: ', actual, ' === ',expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ', actual, ' !== ',expected);
  }
};

const countLetters = function(inputString) {
  const count = {};
  for (let letter of inputString) {
    if (letter !== ' ') {
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

const countOfLetters  = countLetters("lighthouse in the house");
assertEqual(countOfLetters, {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});

assertEqual(countLetters('LHL'), {L: 2, H: 1});