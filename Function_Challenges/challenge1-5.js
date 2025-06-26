console.log();

// Write a program that takes an array of words and returns the longest word.
// ['a', 'b', 'cc', 'd] => 'cc'

let maxWord = "";
let maxLength = 0;

function longestWord(a) {
  for (word of a) {
    if (word.length > maxLength) {
      maxWord = word;
      maxLength = word.length;
    }
  }
  return maxWord;
}

console.log(longestWord(["a", "b", "cc", "d"]));

console.log();

// Write a program that swaps the first and last characters of a string.
// 'ryan' => 'nyar'

function charaSwap(a) {
  strList = a.split("");
  last = strList.length - 1;
  firstChara = strList[0];
  lastChara = strList[last];
  strList[0] = lastChara;
  strList[last] = firstChara;
  string = strList.join("");
  return string;
}

console.log(charaSwap("Alioth"));

console.log();

// Write a program that finds the sum of a list of numbers.
// [1, 2, 3] => 6

let sum = 0;

function arraySum(a) {
  for (number of a) {
    sum += number;
  }
  return sum;
}

console.log(arraySum([1, 2, 3]));

console.log();

// Combine two arrays by alternatingly taking elements from each at every iteration.
// EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]

function alternateArray(a, b) {
  index1 = 0;
  index2 = 0;
  newArray = [];
  while (true) {
    if (a[index1] || b[index1]) {
      if (a[index1]) {
        newArray[index2] = a[index1];
        index2++;
      }
      if (b[index1]) {
        newArray[index2] = b[index1];
        index2++;
      }
      index1++;
    } else {
      break;
    }
  }
  return newArray;
}

console.log(alternateArray([1, 2, 3], [4, 5, 6]));

console.log();

// Create a title case program
// EX: "I am a sentence" => "I Am A Sentence"

// it's the same as challenge3 in my conditional challenges

function titleCase(a) {
  if (typeof a === "string") {
    let strArray = a.split(" ");
    for (let i = 0; i < strArray.length; i++) {
      var word = strArray[i];
      strArray[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    let arrayStr = strArray.join(" ");
    {
      return arrayStr;
    }
  } else {
    return String(a) + " is not a string.";
  }
}

console.log(
  titleCase(
    "Howdy, perfectly normal human worm... baby! We are your new neighbors!"
  )
);
console.log(titleCase("You're wearing costumes!"));
console.log(titleCase("Eh, eh, eh, no we aren't!"));
console.log(titleCase(8));

console.log();
