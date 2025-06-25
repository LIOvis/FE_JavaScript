function matrix(a, b) {
  count = 0;
  newMatrix = [];
  for (i of a) {
    for (j of b) {
      newMatrix[count] = [i, j];
      count++;
      newMatrix[count] = [j, i];
      count++;
    }
  }
  return newMatrix;
}

arrayOne = [1, 2, 3];
arrayTwo = ["a", "b", "c", "d"];

console.log(matrix(arrayOne, arrayTwo));
