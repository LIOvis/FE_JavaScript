// Write a program that checks if the input is a string.
// Check your program using the following examples:

// isString("abc") => true
// isString(190) => false

function isString(string) {
  return typeof string === "string";
}

console.log("\n");

console.log(isString("abc"));
console.log(isString(190));

console.log("\n");
// Write a program that checks if a string is blank.
// Check your program using the following examples:

// isBlankString("") => true
// isBlankString(" ") => true
// isBlankString("fjfjf") => false

function isBlankString(string) {
  if (typeof string === "string") {
    trimmedString = string.trim();
  }
  if (trimmedString === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("           "));
console.log(isBlankString("fjfjf"));
console.log(isBlankString(190));
console.log(isBlankString(undefined));

console.log("\n");

// Write a program that capitalizes the first character of a string.
// Check your program using the following examples:

// captializeFirst("abcdef") = > "Abcdef"

function captializeFirst(string) {
  if (typeof string === "string") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return String(string) + " is not a string.";
  }
}

console.log(captializeFirst("abcdef"));
console.log(captializeFirst(8));

console.log("\n");

// Write a program that abbreviates a full name.
// Check your program using the following examples:

// abbr("Ryan Curtis") => "Ryan C."

function abbr(string) {
  if (typeof string === "string") {
    let indexVal = string.indexOf(" ");
    cut = string.slice(indexVal + 2);
    return string.replace(cut, ".");
  } else {
    return String(string) + " is not a string.";
  }
}

console.log(abbr("Lio Roy"));
console.log(abbr("Jerry Mouse"));
console.log(abbr(8));

console.log("\n");

// Write a program that will truncate a sentence ater a given amount of characters.
// Check your program using the following examples:

// truncate("I am a long sentence", 6) => "I am a..."

function truncate(string, num) {
  if (typeof string === "string" && typeof num === "number") {
    if (string.length > num) {
      cut = string.slice(num);
      return string.replace(cut, "...");
    } else {
      return string;
    }
  } else {
    return "Invalid arguments";
  }
}

console.log(truncate("I am a long sentence", 6));
console.log(truncate("I am.", 6));
console.log(truncate("I am.", "I"));

console.log("\n");

// Use slice to return from the "g" all the way to the end of the following sentence:
// const str="The practitioners grappled on the road side!"
// Output: "grappled on the road side!"

const str = "The practitioners grappled on the road side!";
let index = str.indexOf("g");

console.log(str.slice(index));

console.log("\n");
