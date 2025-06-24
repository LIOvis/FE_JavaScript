function shiftLoop(array) {
  for (let i = 0; i < array.length; ) {
    // console.log(array.length);
    if (array.length > 0) {
      let removedItem = array[0];
      console.log(removedItem);
      array.shift();
    }
  }
}

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = ["a", "b", "c", "d", "e"];
const arrayThree = [6, 7, 8, 9, 10, 11];

shiftLoop(arrayOne);
shiftLoop(arrayTwo);
shiftLoop(arrayThree);
