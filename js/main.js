// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  let result = str.toUpperCase()
  return result
}
console.log(makeUpperCase())

/*
// fake binary
function fakeBin(x){
  if (x >= 5){
    return 1
  }else{
    return 0
  }
  }
  console.log(fakeBin(7))


function even_or_odd(num) {
  return(num % 2 == 0 ? 'Even' : 'Odd')
}
console.log(even_or_odd())


// Convert number to reversed array of digits - 2.24.21
function digitize(num) {
 
}


// Counting sheep... 2.24.21 - wrong answer
function countSheeps(arrayOfSheep) {
  const sheepCounter = 0;
  for(i = 0; i < arrayOfSheep.length; i++){
    if(sheepCounter[i]){
      sheepCounter++
    }
  }
  return sheepCounter
}



// Count the Monkeys 2.17.21
function monkeyCount(n) {
  const monkeys = []
  for(i = 1; i<n+1; i++){
    monkeys.push(i)
  }
  return monkeys;
  }


// Remove String Spaces 2.19.21
function noSpace(x){
  return x.split(" ").join('')
  }


  // Beginner - Lost Without a Map
  function maps(x){
    const y = x.map(value => value *2)
    return y
  }
  
  maps([1,2,3])


  // Find the smallest integer in the array
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b) => a-b)[0]
    }
  }
  

// Convert a String to a Number
var stringToNumber = function(str){
  // put your code here
  return parseInt(str);
}


// Function 1 - hello world
// Write a function "greet" that returns "hello world!"
function greet(){
  return 'hello world!'
}


// Convert boolean values to strings 'Yes' or 'No'
function boolToWord( bool ){
  //...
  if (bool === true){
    return 'Yes'
  } else{
    return 'No'
  }
}


// Convert a Number to a String!
function numberToString(num) {
  // Return a string of the number here!
  return String(num)
}

numberToString(1)


// String repeat
function repeatStr (n, s) {
  finalStr = ''
  for(i = 0; i < n;i++){
    finalStr += s
  }
  return finalStr
}

repeatStr(5, 'hi')


// Sum Mixed Array
function sumMix(x) {
  const newArr = x.map(el => Number(el));
  const reducer = newArr.reduce((acc, currentVal) => acc + currentVal)

  return reducer
}

//turn into number
//reduce method to return number
//return number


// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let summedArr = [0, 0]
  if (!input || input.length < 1) {
      return [];
  }
  for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
          summedArr[0]++
      } else {
          summedArr[1] += input[i];
      }
  }
  return summedArr;
}


// Remove First and Last Character
function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
};
console.log(removeChar('xhellox'));


// Return Negative
function makeNegative(num) {
  // Code?
  return -Math.abs(num)
}

console.log(makeNegative(5))


// Vowel Count
function getCount(str) {
  // str = str.toLowerCase
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // enter your majic here
  for (let char of str) {
      if (vowels.includes(char)) {
          vowelsCount++
      }
  }
  return vowelsCount;
}

let solution = getCount('abracadabra');
console.log(solution)


// Sum of positive
function positiveSum(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          sum += arr[i]
      }
  }
  return (sum)
}


// Reversed Strings
const solution = str => str.split('').reverse().join('')


// Opposite number
const opposite = number => -number


// Multiply
function multiply(a, b){
  return a * b
}
*/