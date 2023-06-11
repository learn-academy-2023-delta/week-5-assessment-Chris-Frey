// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
  describe("codeBreaker", () =>{
    it("takes a string and returns a decoded message", () => {
      expect(codeBreaker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeBreaker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeBreaker(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
const codeBreaker = (str) => {
  let arr = str.split('')
  let new_arr = arr.map(letter => {
          if(letter.toLowerCase() == 'a') {
            return letter = "4"
          }else if(letter.toLowerCase() === "e") {
            return letter = "3"
          }else if(letter.toLowerCase() === "i") {
            return letter = "1"
          }else if(letter.toLowerCase() === "o"){
            return letter = "0"
          }else{
            return letter
          }
        }
  )
  return new_arr.join('')
}


// codeBreaker(secretCodeWord1);
// Pseudo code:
// create an arrow function that takes in a string argument
// split the argument into an array of letters and assign that array to a variable
// iterate over the variable with map
  // check to see if letters match criteria. if they do, then replace with new strings
//join the mapped array

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("fruity", () =>{
  it("takes an array and a letter, and returns words that have that letter", () => {
    expect(fruity(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(fruity(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
const fruity = (arr, letter) => {
  let new_arr = arr.filter(input => {
    return (input.toLowerCase()).includes(letter)
  })
  return new_arr
}
// Pseudo code:
// create arrow function with 2 inputs
// filter over the array
//  check to see if the words include a letter. if so, filter moves them to `new_arr`
// return new_arr

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("cards", () =>{
  it("takes an array of numbers and returns true if numbers make a full house", () => {
    expect(cards(hand1)).toEqual(true)
    expect(cards(hand2)).toEqual(false)
    expect(cards(hand3)).toEqual(false)
    expect(cards(hand4)).toEqual(true)
  })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
const cards = (hand) => {
  let handCheck = {}

  for(const element of hand) {
    // console.log(element);
    if(handCheck[element]) {
      handCheck[element] += 1
    } else {
      handCheck[element] = 1
    }
  }

  if(Object.keys(handCheck).length !== 2) {
    return false
  } else if(Object.values(handCheck).includes(3) && Object.values(handCheck).includes(2)) {
    return true
  } else {
    return false
  }
}
// Pseudo code:
// create arrow function that takes an array
// create a variable to hold the return from the for-of loop
// iterate over the array with for-of loop
// use conditional statement to check if the keys of the variable are greater than two, and if they include both the numbers 2 and 3
// everything else is false
