const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", moveInput);

const myInput = document.querySelector("#my-input");

let clicked = false;

function moveInput() {
  if (clicked) {
    myInput.computedStyleMap.translate = "10px 20px";
    clicked = true;
  } else {
    myInput.translate = "0px 0px";
    clicked == false;
  }
}
