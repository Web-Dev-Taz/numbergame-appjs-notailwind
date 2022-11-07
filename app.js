"use strict"

// to select the text of an element, identify the element by it's class and then use the textContent method like this:

// console.log(document.querySelector(".message").textContent);

// then you can change the text content with this line, .textContent = "..."
// like this:
// document.querySelector(".message").textContent = "Congrats! You guessed it! 🥳";

// if you're dealing with inputs use the .value method instead of .textContent
// like this:
// document.querySelector(".guess").value = 77;

// Manipulating Css Styles
// if you want to select the style of an element use the .style method and which property you want to change
// like this:
// document.querySelector("body").style.backgroundColor = "#E99277";

// it's important to use a string when assigning a style
// like with the width here:
// document.querySelector(".number").style.width = "10rem"
// and guess what?! These new styles are applied as inline styles that you can find using the dev tools!

// --------------------

// we need to define the secret number with the Math object that JavaScript gives us
// and then we can use the random method times 20 plus one.
// this will generate a random number between 1 and 20, and include both 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1

// we also need to define our current score so we can manipulate it
// so we define it like this:
let score = 0

// then we connect it to the div with the class of number
document.querySelector(".number").textContent = secretNumber

// We start by selecting and adding an event listener to the check button
// Then verify if there's even a number entered at all
// Then compare the secret number with the user's guess starting with the correct guess
// Then greater than (too high)
// Then less than (too low)
document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value)
   console.log(guess, typeof guess)

   // when there is no input
   if (!guess) {
      document.querySelector(".message").textContent = "Enter a number below!"

      // when our player wins
   } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Congrats! You Win! 🥳"
      document.querySelector("body").style.backgroundColor = "#E14D2A"
      document.querySelector(".number").style.width = "10rem"

      // when the guess is too high
   } else if (guess > secretNumber) {
      if (score < 4) {
         document.querySelector(".message").textContent = "Too High 🦅"
         score++
         document.querySelector(".score").textContent = score
      } else {
         document.querySelector(".message").textContent =
            "You lost. Try again! 🦄"
         document.querySelector("body").style.backgroundColor = "#404258"
         document.querySelector(".score").textContent = "💥"
      }

      // when the guess is too low
   } else if (guess < secretNumber) {
      if (score < 4) {
         document.querySelector(".message").textContent = "Too Low 🦑"
         score++
         document.querySelector(".score").textContent = score
      } else {
         document.querySelector(".message").textContent =
            "You lost. Try again! 🦄"
         document.querySelector("body").style.backgroundColor = "#404258"
         document.querySelector(".score").textContent = "💥"
      }
   }
})
