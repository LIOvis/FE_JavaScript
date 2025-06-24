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
