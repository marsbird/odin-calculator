// get display field and set default to 0
const display = document.querySelector(".display");

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

function operate(x,y,operator) {
    switch (operator) {
        case "add":
            return add(x,y);
        case "subtract":
            return subtract(x,y);
        case "multiply":
            return multiply(x,y);
        case "divide":
            return divide(x,y);
    };
};
