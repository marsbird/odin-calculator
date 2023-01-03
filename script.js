// assign basic variables
let x;
let operator;
let y;
let result;
const display = document.querySelector("#display");

// event listener for numpad
const numpadButtons = document.querySelectorAll(".numpad");
numpadButtons.forEach((btn) => {
    let number = parseInt(btn.textContent);
    btn.addEventListener("click", () => {
        // if operator is undefined, then assign number to X; else assign it to Y
        if (operator === undefined) {
            x = logNumber(x, number);
            display.textContent = x;
        } else {
            y = logNumber(y, number);
            display.textContent = y;
        }
    });
});

// event listener for operators
const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach((btn) => {
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

// event listener for equals
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    result = operate(x, y, operator);
    display.textContent = result;
    x = undefined;
    y = undefined;
    operator = undefined;
});

// numpad functions
function logNumber(previous, input) {
    previous === undefined ? input : 10 * previous + input;
}

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

// 1. send numbers to display when clicked
// 2. when operator is clicked
//     send display number to outside variable
//     and send operator to outside variable
//     ready display to clear itself on next numpad click
// 3. when equals is clicked,
//     send all variables to operate function
//     populate display with result
// 4. when a second operator is clicked before the result is cleared
//     send display number to first outside variable
//     send operator to operator variable
//     ready display to clear itself on next numpad click
