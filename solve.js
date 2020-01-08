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

// Q3. Starts
function sortedSingleArray(a, b) {
  let sortedStack = {};
  a.map(e => {
     sortedStack[e] = e;
  });
  b.map(e => {
     sortedStack[e] = e;
  })
  return Object.values(sortedStack)
}

console.log(sortedSingleArray([1, 11, 4, 6], [5, 8, 9, 10]));
// Q3. Ends

// Q4 STARTS

let arr = [1, 4, 6, 8, 10, 15, 27];
let searchValue = 27;

function binarySearch(ar, value, min, max) {
  let mid = Math.floor((min + max) / 2);
  if (min > max) { return -1 }
  if (arr[mid] === value) {
    return mid
  }
  if (arr[mid] < value) {
    min = mid + 1;
    return binarySearch(ar, value, min, max)
  } else {
    max = mid - 1;
    return binarySearch(ar, value, min, max)
  }
}
// find value by binary search
console.log('Got from binary search => ' + binarySearch(arr, searchValue, 0, arr.length - 1));
console.log('Got from js array findIndex method => ' + arr.findIndex(e => e === searchValue));

// Q4 ENDS

// Q5 STARTS
let str1 = 'bdio';
let str2 = 'eidboaoo';

function firstStringPermutations(s1, s2) {
  let allMutations = getAllPermutations(s1);
  let index = 0;
  while (index < allMutations.length) {
    if (str2.indexOf(allMutations[index]) === 1) {
      return true
    }
    index++
  }
  return false
}

/* 
  HElPER FUNCTION TO GET PERMUTATION
*/
function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

console.log(firstStringPermutations(str1, str2));
// Q5 ENDS

// Comming soon...
