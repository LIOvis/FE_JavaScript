let randomInteger = 0;
const key = {
  1: "Rock",
  2: "Paper",
  3: "Scissors",
};

/*
            Rock    Paper    Scissors 
Rock          T       PW        RW                             

Paper         PW      T         SW                             

Scissors      RW      SW        T

only 6 outcomes 3 ties, rock over scissors, paper over rock, scissors over paper
*/

function game(a, b) {
  if (a === b) {
    return `\n${key[a]} vs. ${key[b]}\nTie\n`;
  } else if (
    (a === 1 && b === 3) ||
    (a === 2 && b === 1) ||
    (a === 3 && b === 2)
  ) {
    return `\n${key[a]} vs. ${key[b]}\nWin\n`;
  } else {
    return `\n${key[a]} vs. ${key[b]}\nLoss\n`;
  }
}

while (true) {
  var userResponse = prompt("Would you like to play a game?\n[ Y / N ]\n>>> ");
  if (userResponse === null) {
    break;
  } else if (userResponse.toLowerCase() === "n") {
    break;
  } else if (userResponse.toLowerCase() === "y") {
    userResponse = Number(prompt("\n(1) Rock\n(2) Paper\n(3) Scissors\n>>> "));
    randomInteger = Math.floor(Math.random() * (1, 4));
    if (randomInteger === 0) {
      randomInteger = 1;
    }
    if (userResponse === 1 || userResponse === 2 || userResponse === 3) {
      console.log(game(userResponse, randomInteger));
    } else {
      console.log("\nInvalid Input\n");
    }
  } else {
    console.log("\nInvalid Input\n");
  }
}
