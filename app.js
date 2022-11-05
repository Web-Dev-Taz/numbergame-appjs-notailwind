"use strict"

// to select the text of an element use the line below to identify it by it's class and then the .textContent method
// console.log(document.querySelector(".message").textContent);

// then you can change the text content with this line, textContent = "..."
// document.querySelector(".message").textContent = "Congrats! You guessed it! 🥳";

// if you're dealing with inputs use the .value method instead of .textContent
// document.querySelector(".guess").value = 77;

// --------------------

// we need to define the secret number with the Math object that Js gives us and then we can use the random method times 20 plus one.
// this will generate a random number between 1 and 20 but include both 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1

// Establish our score
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

   if (!guess) {
      document.querySelector(".message").textContent = "Enter a number below!"
   } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Congrats! You Win! 🥳"
      document.querySelector("body").style.backgroundColor = "#50577A"
   } else if (guess > secretNumber) {
      if (score < 4) {
         document.querySelector(".message").textContent = "Too High 🦅"
         score++
         document.querySelector(".score").textContent = score
      } else {
         document.querySelector(".message").textContent =
            "You lost. Try again! 🦄"
         document.querySelector(".score").textContent = "💥"
      }
   } else if (guess < secretNumber) {
      if (score < 4) {
         document.querySelector(".message").textContent = "Too Low 🦑"
         score++
         document.querySelector(".score").textContent = score
      } else {
         document.querySelector(".message").textContent =
            "You lost. Try again! 🦄"
         document.querySelector(".score").textContent = "💥"
      }
   }
})
