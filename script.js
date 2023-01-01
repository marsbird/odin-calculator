let stageX;
let stageY;
let stageOperator;

// event listener for numpad
const display = document.querySelector(".display");
const numpadButtons = document.querySelectorAll(".numpad>button");
numpadButtons.forEach((btn) => {
    let digit = parseInt(btn.textContent);
    btn.addEventListener("click", () => {
        // if stageOperator is undefined, then assign digit to X; else assign it to Y
        if (stageOperator === undefined) {
            // if stageX is undefined, simply assign the digit. Otherwise, multiply by 10 and add the digit
            if (stageX === undefined) {
                stageX = digit;
            } else {
                stageX *= 10;
                stageX += digit;
            }
            display.textContent = stageX;
        } else {
            if (stageY === undefined) {
                stageY = digit;
            } else {
                stageY *= 10;
                stageY += digit;
            }
            display.textContent = stageY;
        }
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
