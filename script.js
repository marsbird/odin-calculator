// get html elements
const display = document.querySelector("#display");
const numpadBtns = document.querySelectorAll(".numpad");
const operatorBtns = document.querySelectorAll(".operators");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const signflipBtn = document.querySelector("#signflip");

// initialize variables
let x;
let operator;
let y;
let result;

// define functions
function inputNewDigit(previous, input) {
    return previous === undefined ? input : 10 * previous + input;
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
            x = inputNewDigit(x, number);
            display.textContent = x.toLocaleString("en-US");
        } else {
            y = inputNewDigit(y, number);
            display.textContent = y.toLocaleString("en-US");
        }
    });
});
operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (y === undefined) {
            operator = btn.id;
        } else {
            result = operate(x, y, operator);
            display.textContent = result.toLocaleString("en-US");
            x = result;
            y = undefined;
            operator = btn.id;
        }
    });
});
equalsBtn.addEventListener("click", () => {
    // if equals clicked before operator, do nothing
    if (operator === undefined) return;
    // default
    result = operate(x, y, operator);
    display.textContent = result.toLocaleString("en-US");
    x = result;
    y = undefined;
    operator = undefined;
});
clearBtn.addEventListener("click", () => {
    x = undefined;
    y = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = 0;
});
signflipBtn.addEventListener("click", () => {
    if (operator === undefined) {
        // if 0, do nothing
        if (!x) return;
        // default
        x *= -1;
        display.textContent = x.toLocaleString("en-US");
    } else {
        // if 0, do nothing
        if (!y) return;
        // default
        y *= -1;
        display.textContent = y.toLocaleString("en-US");
    }
});
