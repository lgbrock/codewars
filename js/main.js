// Calculate BMI
function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  
  if(bmi <= 18.5){
    return 'Underweight'
  } else if (bmi <= 25.0) {
    return 'Normal'
  } else if (bmi <= 30.0) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

bmi(180, 72)

/*
// L1: Set alarm
unction setAlarm(employed, vacation){
  if(employed && !vacation){
    return true
  } else {
    return false
  }
}




// Transportation on vacation
//for(let i = 0; i < d.length; i++){ if d.length > 7}
function rentalCarCost(d) {
  const cost = 40

  if(d >= 7) return d * cost -50
  if(d >= 3) return d * cost -20

  return d * cost
}
console.log(rentalCarCost(7))



// Convert number to reversed array of digits
function digitize(n) {
  const answer = []
  const str = n.toString()

  for(item of str){
    answer.unshift(parseInt(item))
  }
  return answer
}




/ Count the divisors of a number
function getDivisorsCnt(n){
  let j = 0;
  for(i = n; i > 0; i--){
    if(n % i == 0) j++;
  }
return j;
}
console.log(getDivisorsCnt(10))



// Get Planet Name By ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}




// How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for(i = 0; i < classPoints.length; i++){
    sum += classPoints[i]
  }
  return sum / classPoints.length < yourPoints ? true : false
}



// Convert a Boolean to a String
function booleanToString(b){
  return b.toString()
}



// You only need one - Beginner
function check(a, x) {
  if (a.includes(x)) {
    return true
  }else{
    return false
  }
}



// build a function that returns an array of integers from n to 1 where n>0
const reverseSeq = n => {
  for(let i = n; i >= 0; i -=1){
    return [i]
  }
};
console.log(3,4,5)



function doubleInteger(i) {
    return i *2;
  }



// Write a function which converts the input string to uppercase.
function makeUpperCase(str) {
  let result = str.toUpperCase()
  return result
}
console.log(makeUpperCase())


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