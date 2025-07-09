function newTitle() {
  let size = prompt("Please choose a number between 1 and 6");

  if (size === null) {
    return;
  } else if (Number(size) > 7 || Number(size) < 0) {
    return alert("Invalid Input.");
  } else {
    size = "h" + size;
  }

  let text = prompt(
    "Please enter the text you would like you new title to display."
  );

  if (text === null) {
    return;
  } else {
    const title = document.querySelector(".title");

    const newNode = document.createElement(size);
    newNode.innerText = text;
    title.appendChild(newNode);
  }
}

newTitle();
