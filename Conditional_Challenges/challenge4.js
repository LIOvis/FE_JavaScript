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
