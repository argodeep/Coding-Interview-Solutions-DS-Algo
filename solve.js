// Q1. STARTS
let s = 'ABCDB';

function getFirstRecurringChar(s) {
  let pointer = 0;
  let charDictionary = {};
  while (pointer < s.length) {
    if (charDictionary[s.charAt(pointer)]) {
      return s.charAt(pointer)
    }
    charDictionary[s.charAt(pointer)] = s.charAt(pointer)
    pointer++;
  }
  return 'No Recurring Character'
}

console.log(getFirstRecurringChar(s))

// Q1. ENDS

// Q2. STARTS

Comming soon...
