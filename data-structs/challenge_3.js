"use strict";

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);


// Step 1
const eventSet = new Set();

gameEvents.forEach(elm => {
    eventSet.add(elm);
})

const events = [...eventSet]

console.log((events));

// Step 2
gameEvents.delete(64);
console.log(gameEvents);

// Step 3
console.log(`An event happpened, on average, every ${90 / gameEvents.size} minutes`);

// Step 4
gameEvents.forEach((event, time) => {
    const half = time <= 45 ? "FIRST HALF" : "SECOND HALF";
    console.log(`[${half}] ${time}: ${event}`);
})