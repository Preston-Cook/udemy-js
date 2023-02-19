"use strict";

// Query for elements

document.addEventListener("DOMContentLoaded", () => {
  const player0 = document.querySelector(".player--0");
  const player1 = document.querySelector(".player--1");

  const score0 = document.querySelector("#score--0");
  const score1 = document.querySelector("#score--1");

  const current0 = document.querySelector("#current--0");
  const current1 = document.querySelector("#current--1");

  const dice = document.querySelector(".dice");

  const newGameBtn = document.querySelector(".btn--new");
  const rollDiceBtn = document.querySelector(".btn--roll");
  const holdBtn = document.querySelector(".btn--hold");

  let activePlayer = 0;

  // Reset Game

  newGameBtn.onclick = () => {
    resetGame();
  };

  rollDiceBtn.onclick = () => {
    const randNum = rollDice();

    const currentScore = document.getElementById(`current--${activePlayer}`);

    if (randNum !== 1) {
      currentScore.textContent = parseInt(currentScore.textContent) + randNum;
    } else {
      currentScore.textContent = 0;
      switchPlayer();
    }
  };

  holdBtn.onclick = () => {
    const score = document.getElementById(`score--${activePlayer}`);
    const currentScore = document.getElementById(`current--${activePlayer}`);

    score.textContent =
      parseInt(score.textContent) + parseInt(currentScore.textContent);

    currentScore.textContent = 0;

    if (parseInt(score.textContent) >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
    }

    switchPlayer();
  };

  function rollDice() {
    const randNum = Math.floor(Math.random() * 6) + 1;

    dice.src = `dice-${randNum}.png`;

    if (dice.classList.contains("hidden")) {
      dice.classList.remove("hidden");
    }

    return randNum;
  }

  function resetGame() {
    if (!dice.classList.contains("hidden")) {
      dice.classList.add("hidden");
    }

    if (!player0.classList.contains("player--active")) {
      switchPlayer();
    }

    document
      .querySelector(".player--winner")
      .classList.remove("player--winner");

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;
  }

  function switchPlayer() {
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");

    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});