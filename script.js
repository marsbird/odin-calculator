// populate display when buttons are clicked
const display = document.querySelector(".display");
const numpadButtons = document.querySelectorAll(".numpad>button");
numpadButtons.forEach((btn) => {
  let number = btn.textContent;
  btn.addEventListener("click", () => {
    display.textContent += number;
  });
});

// operator functions
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate(x, y, operator) {
  switch (operator) {
    case "add":
      return add(x, y);
    case "subtract":
      return subtract(x, y);
    case "multiply":
      return multiply(x, y);
    case "divide":
      return divide(x, y);
  }
}
