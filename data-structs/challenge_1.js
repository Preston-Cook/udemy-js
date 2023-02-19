"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Step 1
const { players: [players1, players2] } = game;

// Step 2
const [gk, ...fieldPlayers] = players1;

// Step 3
const allPlayers = [...players1, ...players2];

// Step 4
const players1Final = [...players1, "Thiago", "Coutino", "Perisic"];

// Step 5
const { odds: { team1, x: draw, team2 } } = game;

// Step 6
function printGoals(...players) {
  players.forEach(player => console.log(`Goals: ${players.length} Name: ${player}`))
}

// Step 7
team1 > team2 && console.log("Team 1 is more likely to win");
team2 > team1 && console.log("Team 2 is more likely to win");