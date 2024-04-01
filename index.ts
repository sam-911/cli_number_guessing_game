#! /usr/bin/env node

import inquirer from "inquirer";

const randonNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  { 
    name: "UserGuessedNumber",
    type: "number",
    message: "PLease guess anumber between 1-6: ",
  },
]);

if (answer.UserGuessedNumber === randonNumber) {
  console.log("Congratulation! you guessed correct number.");
} else {
  console.log("Your guessed in-correct number");
}
