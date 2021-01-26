// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'christmas'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

// let name = 'logan'
// alert(name.slice(-4))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
/*
function takeIn5(n1, n2, n3, n4, n5) {
    let diff = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(diff))
}

takeIn5(10, 10, 10, 10, 10)
*/

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
/*
function threeNumsHighAndLow(n1, n2, n3) {
    console.log(`the lowest number is ${Math.min(n1, n2, n3)} but the highest number is ${Math.max(n1, n2, n3)}`)
}

threeNumsHighAndLow(100, 50, 1)
*/

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails() {
    return Math.random() < .5 ? 'heads' : 'tails'
}

console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


