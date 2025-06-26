const prompt = require("prompt-sync")();
// you might need to run {npm install prompt-sync} in your terminal

let randomInteger = Math.floor(Math.random() * (1, 101));
count = 0;

while (true) {
  var userPrompt = Number(prompt("Please guess a number between 1 and 100: "));
  if (randomInteger !== userPrompt) {
    if (randomInteger > userPrompt) {
      console.log("\nToo low.\n");
      count++;
    } else {
      console.log("\nToo high.\n");
      count++;
    }
  } else {
    count++;
    console.log(`\nCorrect!\nYou took ${count} attempts.\n`);
    break;
  }
}
