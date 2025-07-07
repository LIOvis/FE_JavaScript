const reel1 = ["!", "@", "#", "$", "#", "@", "!", "$", "#", "!", "@", "$"];
const reel2 = ["#", "!", "@", "$", "@", "#", "$", "!", "@", "$", "#", "!"];
const reel3 = ["!", "@", "$", "#", "!", "@", "#", "$", "#", "!", "$", "@"];

let reel1Start = Math.floor(Math.random() * 11);
let reel2Start = Math.floor(Math.random() * 11);
let reel3Start = Math.floor(Math.random() * 11);

let a1 = "";
let b1 = "";
let c1 = "";
let a2 = "";
let b2 = "";
let c2 = "";
let a3 = "";
let b3 = "";
let c3 = "";

let balance = 1000;

const pull = (ms) => new Promise((res) => setTimeout(res, ms));

async function spin(reel) {
  if (reel === reel1) {
    for (let count = 0; count < 12; count++) {
      await pull(250);
      reel1Start++;
      if (reel1Start === 12) {
        reel1Start = 0;
      }
    }
  } else if (reel === reel2) {
    for (let count = 0; count < 20; count++) {
      await pull(150);
      reel2Start++;
      if (reel2Start === 12) {
        reel2Start = 0;
      }
    }
  } else if (reel === reel3) {
    for (let count = 0; count < 15; count++) {
      await pull(150);
      reel3Start++;
      if (reel3Start === 12) {
        reel3Start = 0;
      }
    }
  }
}

async function slot(bet) {
  if (bet > balance) {
    console.log("Bet cannot exceed balance.");
  } else {
    await spin(reel1);
    await spin(reel2);
    await spin(reel3);
    a1 = reel1[reel1Start];
    b1 = reel2[reel2Start];
    c1 = reel3[reel3Start];
    a2 = reel1[reel1Start === 0 ? 11 : reel1Start - 1];
    b2 = reel2[reel2Start === 0 ? 11 : reel2Start - 1];
    c2 = reel3[reel3Start === 0 ? 11 : reel3Start - 1];
    a3 = reel1[reel1Start === 11 ? 0 : reel1Start + 1];
    b3 = reel2[reel2Start === 11 ? 0 : reel2Start + 1];
    c3 = reel3[reel3Start === 11 ? 0 : reel3Start + 1];

    if (a1 === b1 && a1 === c1) {
      if (a1 === "!") {
        balance += bet;
      } else if (a1 === "@") {
        balance += bet * 2;
      } else if (a1 === "#") {
        balance += bet * 5;
      } else if (a1 === "$") {
        balance += bet * 10;
      }
    } else {
      balance -= bet;
    }

    console.log(
      "Bet: " +
        bet +
        "\n  " +
        a2 +
        b2 +
        c2 +
        "\n[ " +
        a1 +
        b1 +
        c1 +
        " ] <-----\n  " +
        a3 +
        b3 +
        c3 +
        "\n\nTotal Balance: " +
        balance
    );
  }
}

let userResponse = prompt("Would you like to play a game?\n[ Y / N ]\n>>>");
loop();

async function loop() {
  while (true) {
    if (userResponse !== null) {
      if (userResponse.toLowerCase() === "y") {
        userResponse = prompt(
          "How much would you like to bet?\nCurrent Balence: " + balance
        );
        newBet = Math.floor(Number(userResponse));

        if (newBet !== NaN && newBet !== 0) {
          await slot(newBet);
        } else {
          console.log("Invalid Input.");
        }
      } else if (userResponse.toLowerCase() === "n") {
        console.log("Thanks for playing! :)");
        break;
      } else {
        console.log("Invalid Input");
      }
    } else {
      console.log("Thanks for playing! :)");
      break;
    }
    userResponse = prompt("Continue playing?\n[ Y / N ]\n>>>");
  }
}
