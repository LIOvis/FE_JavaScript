class ItemArray {
  constructor(array) {
    this.array = array;
  }

  altPop() {
    let length = this.array.length;

    for (let i = 1; i <= length; i++) {
      if (i % 2 === 1) {
        console.log(this.array.shift());
      } else {
        console.log(this.array.pop());
      }
    }
  }
}

let numArray = new ItemArray([1, 2, 3, 4, 5]);

numArray.altPop();
