"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize random value
  let randNum = Math.floor(Math.random() * 20 + 1);

  // Query for DOM elements
  const score = document.querySelector(".score");
  const message = document.querySelector(".message");
  const body = document.querySelector("body");
  const number = document.querySelector(".number");
  const guessElm = document.querySelector(".guess");

  // Add event listener for check button
  document.querySelector(".btn.check").onclick = () => {
    let guess = guessElm.value;

    if (guess == randNum) {
      message.textContent = "Correct number!";
      body.style.backgroundColor = "green";
      number.style.width = "30rem";
      number.textContent = randNum;
    } else {
      score.textContent--;

      if (!guess) {
        message.textContent = "No number";
      } else {
        message.textContent = guess > randNum ? "Too high!" : "Too Low!";
      }
    }
  };

  document.querySelector(".btn.again").onclick = () => {
    const highscore = document.querySelector(".highscore");

    if (guessElm.value == randNum) {
      highscore.textContent =
        highscore.textContent < parseInt(score.textContent)
          ? score.textContent
          : highscore.textContent;
      number.textContent = "?";
      number.style.width = "15rem";
      body.style.backgroundColor = "rgb(34,34,34)";
    }

    randNum = Math.floor(Math.random() * 20 + 1);
    score.textContent = 20;
    message.textContent = "Start guessing...";
    guessElm.value = "";
  };
});