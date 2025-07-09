// https://zim.fandom.com/wiki/Zim

const elements = document.querySelectorAll("*");
const length = elements.length;

const divElements = document.querySelectorAll("div");
const divLength = divElements.length;

function loop(array, length) {
  for (i = 0; i < length; i++) {
    console.log(array[i]);
  }
}

loop(elements, length);
loop(divElements, divLength);
