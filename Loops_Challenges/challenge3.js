function numToArray(a) {
  count = 0;
  newStr = String(a);
  newArray = newStr.split("");
  for (number of newArray) {
    newArray[count] = Number(number);
    count++;
  }
  return newArray;
}

console.log(numToArray(12345));
