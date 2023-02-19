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
for (const [i, elm] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${elm}`);
}

// Step 2
console.log(Object.values(game.odds).reduce((a, b) => a + b) / Object.keys(game.odds).length);

// Step 3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === "x" ? "draw" : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`)
}

// Step 4
const scorers = {};
for (const scorer of game.scored) {
    scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1)
}

console.log((scorers));