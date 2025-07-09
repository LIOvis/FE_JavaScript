function rgbSlice(rgb) {
  let length = rgb.length;
  let sliced = rgb.slice(4, length - 1);
  let colorArray = sliced.split(",");
  return colorArray;
}

function rgbToHex(r, g, b) {
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      j = r;
    } else if (i === 1) {
      j = g;
    } else {
      j = b;
    }

    if (j > 256 || j < -1) {
      return "Invalid arguments";
    } else if (i === 0) {
      r = j.toString(16);
    } else if (i === 1) {
      g = j.toString(16);
    } else {
      b = j.toString(16);
    }
  }

  return "#" + r + g + b;
}

function addText() {
  for (i = 1; i < 4; i++) {
    let className = ".col" + i;
    const element = document.querySelector(className);
    const computedStyle = getComputedStyle(element);
    const backgroundColor = computedStyle.getPropertyValue("background-color");
    const rgb = rgbSlice(backgroundColor);
    element.innerText = rgbToHex(
      Number(rgb[0]),
      Number(rgb[1]),
      Number(rgb[2])
    );
  }
}

addText();
