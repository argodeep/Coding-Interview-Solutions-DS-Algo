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

let ar = [1, 2, 5, 6, 3, 4, 4];

function getPairMatchesSum(ar, sum) {
  let pair = {};
  let count = 0;
  ar.map((v, i) => {
    pair[v] = {
      value: v,
      count: pair[v] ? pair[v].count + 1 : 1
    };
    let index = sum - pair[v].value;
    if (pair[index] && pair[v].count === 1) {
      count ++
    }
  })
  return count
}

console.log(getPairMatchesSum(ar, 8));

// Q2. ENDS

// Comming soon...
