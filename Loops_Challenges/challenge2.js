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
