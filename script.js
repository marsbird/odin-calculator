// get html elements
const display = document.querySelector("#display");
const numpadBtns = document.querySelectorAll(".numpad");
const operatorBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector("#equals");

// initialize variables
let x;
let operator;
let y;
let result;

// define functions
function logNumber(previous, input) {
    previous === undefined ? input : 10 * previous + input;
}
function operate(x, y, operator) {
    switch (operator) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            return x / y;
    }
}

// add event listeners
numpadBtns.forEach((btn) => {
    // get number
    let number = parseInt(btn.textContent);
    // on click, assign number to (either x or y)
    btn.addEventListener("click", () => {
        if (operator === undefined) {
            x = logNumber(x, number);
            display.textContent = x;
        } else {
            y = logNumber(y, number);
            display.textContent = y;
        }
    });
});
operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (y === undefined) {
            operator = btn.id;
        } else {
            result = operate(x, y, operator);
            display.textContent = result;
            x = result;
            y = undefined;
            operator = btn.id;
        }
    });
});
equalsBtn.addEventListener("click", () => {
    result = operate(x, y, operator);
    display.textContent = result;
    x = undefined;
    y = undefined;
    operator = undefined;
});
