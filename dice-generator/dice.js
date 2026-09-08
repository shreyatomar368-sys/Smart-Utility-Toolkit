const crypto = require("crypto");

const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {
    const diceValue = crypto.randomInt(1, 7);

    console.log(`Dice Roll ${i}: ${diceValue}`);
}
