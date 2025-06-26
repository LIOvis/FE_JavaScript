console.log("");

// Return longest word in a string
// EX: "This string has several different values" => "different"

let maxWord = "";
let maxLength = 0;

function longestWord(a) {
  wordArray = a.split(" ");
  for (word of wordArray) {
    if (word.length > maxLength) {
      maxWord = word;
      maxLength = word.length;
    }
  }
  return maxWord;
}

console.log(longestWord("This string has several different values"));

console.log("");

// Write a program that takes a string and returns the letters in alphabetical order
// EX: "Hi there" => "eehhirt"

// same as challenge4 from conditional challenges

function sortedString(a) {
  if (typeof a === "string") {
    lowerStr = a.toLowerCase();
    letterArray = lowerStr.split("");
    letterArray.sort();
    sortedStr = letterArray.join("");
    noSpaces = sortedStr.replaceAll(" ", "");
    {
      return noSpaces;
    }
  } else {
    return String(a) + " is not a string.";
  }
}

console.log(sortedString("Uh, uh, right! Plan 2!"));

console.log(sortedString("Uh, uh, uh, uh, uh, what's plan 2!?!"));

console.log(sortedString("Uh, stuff him in a sack!"));

console.log(sortedString(8));

console.log("");

// Write a program that returns extracted values from an array using specified indices and puts them into a new array.
// ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']
// ['a', 'b', 'c', 'd'] is the original code.
// [1, 3] is the specified indices fo the array (index 1 and index 3)
// [b, d] is the new array returned from the specified indices.

// same as challenge2 from loops challenges

function removeByIndex(a, b) {
  count = 0;
  newArray = [];
  console.log(newArray);
  for (index of b) {
    newArray[count] = a[index];
    count++;
  }
  for (index of b) {
    a.slice(index, 1);
  }
  return newArray;
}

console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));

console.log("");

// Complete the following steps:
// Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
// the userName property should take any string value.
// the starter (or default) for the activeStatus property should be set to 'away'.

function createUser(name, status = "away") {
  user = {};
  if (typeof name !== "string") {
    return "invalid username";
  } else {
    user = {
      userName: name,
      activeStatus: status,
    };
    return user;
  }
}

console.log(createUser("Lio", "idle"));
console.log(createUser("Ammon"));
console.log(createUser(8, "active"));

console.log("");

// Write an arrow function
// that changes the activeStatus to 'active'
// returns an interpolated string that contains the userName and activeStatus values.
// login(user) => 'ryan is active'

// Note: Use string interpolation. Avoid hardcoding this.

const nowActive = (user) => {
  user["activeStatus"] = "active";
  return user["userName"] + " is " + user["activeStatus"];
};

console.log(nowActive(createUser("Lio", "idle")));

console.log("");

// Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16

// Note: No outside of pre-built functions and the '**' exponent operator is not allowed.

function toPower(a, b) {
  sum = a;
  for (i = 1; i < b; i++) {
    sum = sum * a;
  }
  return sum;
}

console.log(toPower(4, 2));

console.log("");
