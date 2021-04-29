// USD => CNY
const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`
console.log(usdcny(1))





/*
p => parameters passed in to the function
r => what the the result of the function should be e.g          string array etc
e=> examples of input and expected output
p=> psuedocode

// Reversed sequence
const reverseSeq = n => Array(n).fill(0).map((e, i) => n - i) 
console.log(reverseSeq(6))




// Type of sum
const typeOfSum = (a, b) => typeof(a + b)





// Get number from string
const getNumberFromString = s => Number(s.match(/\d/g).join(""));
console.log(getNumberFromString('hi6'))





// Filter out the geese
const gooseFilter = (birds) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((b => !geese.includes(b)))
};





// Student's Final Grade
const finalGrade = (exam, projects) => {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}




// Twice as old
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - 2 * sonYearsOld)
console.log(twiceAsOld(40, 20))


 

// get character from ASCII Value
const getChar = (c) => String.fromCharCode(c)





// Grasshopper - Terminal Game Turn Function
function doTurn() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}





// Grasshopper - Terminal game move function
const move = (position, roll) => position + roll * 2;





// All Star Code Challenge #18
const strCount = (str, letter) => str.split(letter).length-1 




// Parse nice int from char problem
const getAge = (inputString) => parseInt(inputString)
console.log(parseInt('2 years old'))




// Sort and Star
const twoSort = (s) => s.sort().split().join('***')





// Can we divide it?
const isDivideBy = (num, a, b) => num % a === 0 && num % b === 0;





// Opposites Attract
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2





// Double Char
const doubleChar = (str) => str.split(' ').map((a) => `${a}${a}`).join('')

console.log(doubleChar('abc'))




// Welcome!
const greet = (language) => {
  const db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };
  
  return db[language] || db.english;
};






// Volume of a Cuboid
const Kata = {
  getVolumeOfCuboid: (l, w, h) => l * w * h
}





// Area or Perimeter
const areaOrPerimeter = (l , w) => l === w ? l * w : 2 * (l + w);





// DNA to RNA Conversion
const DNAtoRNA = (dna) => dna.replace(/T/g, 'U')





// Invert values
const invert = (array) => array.map(x => x === 0 ? x : -x)






// Abbreviate a Two Word Name
const abbrevName = (name) => {
  let abr = name.split(' ')
  return abr[0].charAt(0).toUpperCase() + '.' + abr[1].charAt(0).toUpperCase()
}







// Square(n) Sum
const squareSum = (nums) => nums.reduce((a, b) => b ** 2 + a, 0)






// Are You Playing Banjo?
const areYouPlayingBanjo = (name) => (/^[rR]/.test(name)) ? `${name} plays banjo` : `${name} does not play banjo`






// Expressions Matter
const expressionMatter = (a, b, c) => Math.max(a*(b+c), a*b*c, a+b+c, (a+b)*c)






// Contamination #1 - String
const contamination = (text, char) => char.repeat(text.length)






// The Wide-Mouthed frog!
const mouthSize = animal => /alligator/i.test(animal) ? 'small' : 'wide'





// Reversing Words in a String
reverse = str => str.split(' ').reverse().join(' ')




// Training JS #7: if..else and ternary operator
const saleHotdogs = (n) => n * (n < 5 ? 100 : (n >= 5 && n < 10 ? 95 : 90))





// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
const replace = (s) => s.replace(/[aeiou]/ig, '!')





// 5 without numbers !!
const unusualFive = () => ('hello').length






// Cat years, Dog years
const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
]






// The 'if' function
const _if(bool, func1, func2) => bool ? func1 : func2





// How many lightsabers do you own?
const howManyLightsabersDoYouOwn = (name) => (name === 'Zach' ? 18 : 0)






// Filling an array (part 1)
const arr = N => (N ? [...new Array(N).keys()] : []);






// Palindrome strings
const isPalindrome = (num) => (''+num) === (''+num).split('').reverse().join('')







// Reverse list order
const reverseList = list => list.reverse()






// Remove duplicates from list
const distinct = a => [...new Set(a)]





// Hello, Name or World!
const hello = (name) => `Hello, ${name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : 'World'}!`





// Exclusive "or" (xor) Logical Operator
xor = (a, b) => a !== b





// Difference of Volumes of Cuboids
const findDifference = ([a,b,c], [d,e,f]) => Math.abs(a*b*c - d*e*f)





// Rock Paper Scissors!
const rps = (p1, p2) => {
  if(p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper'){
    return 'Player 1 won!'
  } else if(p2 === 'rock' && p1 === 'scissors' || p2 === 'paper' && p1 === 'rock' || p2 === 'scissors' && p1 === 'paper') {
    return 'Player 2 won!' 
  } else {
    return 'Draw!'
  }
};





// Will there be enough space?
const enough = (o, a, b) => a + b > o ? a + b - o : 0






// Quarter of the year
const quarterOf = (m) => {
  if(m <= 3){
    return 1
  } else if(m > 3 && m <= 6) {
    return 2
  }else if(m > 6 && m <= 9) {
    return 3
  } else{
    return 4
  }
}





// I love you, a little , a lot, passionately ... not at all
const phrases = [
  'not at all',
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly'
]

const howMuchILoveYou = n => phrases[n % 6]




// Correct the mistakes of the character recognition software
const correct = s => s.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')





// Highest and Lowest
const highAndLow = (numbers) => {
  let nums = numbers.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}





// Find Maximum and Minimum Values of a List
min = (list) => Math.min(...list);
max = (list) => Math.max(...list);





// Sum arrays
sum = (numbers) => numbers.reduce((a,b) => a + b, 0)






// Fake binary
const fakeBin = (x) => x.split('').map(n => n < 5 ? '0' : '1').join('')





// Keep up the hoop
const hoopCount = (n) => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"




// Is it even?
const testEven = n => n % 2 == 0





// Switch it Up!
const switchItUp = n => ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine',][n]





// Remove exclamation marks
const removeExclamationMarks = (s) => s.replace(/!/g, '');






// Removing elements
function removeEveryOther(arr){
  return arr.filter((e, i) => i % 2 === 0)
}





// Function 2 - squaring an argument
const square = a => Math.pow(a,2)




// Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
} 





// Grasshopper - Messi goals function
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals




// If you can't sleep, just count sheep
const countSheep = function (num){
  let result = ''
  for(let i = 1; i <= num; i++){
    result += i.toString() + ' sheep...'
  }
  return result
}

console.log(countSheep(3))




// Beginner - Reduce but Grow
const grow = x => x.reduce((a,b) => a * b);




// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;





// Sentence Smash
const smash = (words) => words.join(' ')




// Calculate average
function find_average(array) {
  return array.reduce((result, currentValue) => result + currentValue, 0) / array.length;
}

console.log(find_average([2,2,2]))




// Count by X
function countBy(x, n) {
  var z = [];
  for(let i = 1; i <= x * n; i++)
  if(i % x === 0) z.push(i)
  return z;
}
console.log(countBy(2,10))




// Array plus array
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur)
}
console.log(arrayPlusArray([5],[5]))





// is he gonna survive?
const hero = (bullets, dragons) => bullets >= dragons * 2 ? true : false;  
const hero = (a, b) => a >= b * 2 ? true : false;





// Jenny's secret message
function greet(name){
  if(name === 'Johnny'){
    return 'Hello, my love!'
  } else{
    return `Hello, ${name}!`
  }    
}
console.log(greet('Logan'))





// A Needle in the Haystack
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle')
}

const findNeedle = (haystack) => {
  return 'found the needle at position ' + haystack.indexOf('needle')
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))




// Century From Year
const century = (year) => Math.ceil(year/100)





// Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  if(operation === '+'){
    return value1 + value2
  } else if (operation === '-'){
    return value1 - value2
  } else if (operation === '*'){
    return value1 * value2
  } else if (operation === '/'){
    return value1 / value2
  } else{
    return 'Try again! 😊'
  }
}

console.log(basicOp('+', 0,1))




// Keep Hydrated!
const litres = (time) => {
  let L = time * .5
  return Math.floor(L)
}
console.log(litres(6))




// Counting sheep
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length
}





// Grasshopper - Summation
var summation = function (num) {
  let sum = 0
  for (let i = 1; i <= num; i++){
    sum += i
  }
  return sum
}




// Beginner Series #2 Clock
past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000

console.log(past(0,1,1))




// Third Angle of a Triangle
const otherAngle = (a, b) => 180 - (a+b)
console.log(otherAngle(2,2))




// Grasshopper - Personalized Message
function greet (name, owner) {
  if (name === owner){
    return 'Hello boss'
  } else {
    return 'Hello guest'
  }
}




// Simple multiplication
function simpleMultiplication(number) {
  if(number % 2 === 0){
    return number * 8
  }else {
    return number * 9
  }
}
console.log(simpleMultiplication(10))




// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s * 27.777778)
}
console.log(`Your speed is ${cockroachSpeed(1)}cm/s`)



// Convert a string to an array
function stringToArray(string){
  return string.trim().split(' ')
}
console.log(stringToArray('logan brock'))




// Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let total = s1 + s2 + s3;
  let avg = total / 3;
  console.log(avg)

  if(avg >= 90) {
    return 'A'
  } else if (avg >= 80 && avg < 90) {
    return 'B'
  } else if (avg >= 70 && avg < 80) {
    return 'C'
  } else if (avg >= 60 && avg < 70) {
    return 'D'
  } else {
    return 'F'
  }
}

console.log(getGrade(80,80,70))




// Function 3 - multiplying two numbers
const multiply = (a,b) => a*b

console.log(multiply(2,2))



//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }
  return n * m
}
console.log(paperwork(5, 5))




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