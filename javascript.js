const operate = function(string) {
    const args = string.trim().split(" ").filter(char => char != "");
    if (args.length > 3) {
        return ("Please input an expression with one operator and two operands")
    }

    args[0] = parseFloat(args[0]);
    args[2] = parseFloat(args[2]);


    switch(args[1]) {
        case "+":
            return add(args[0], args[2]);
        case "-":
            return subtract(args[0], args[2]);
        case "*":
            return multiply(args[0], args[2]);
        case "/":
            return divide(args[0], args[2]);              
    }
}

const add = function (...args) {
    return args[0] + args[1];
}
const subtract = function (...args) {
    return args[0] - args[1];
}
const multiply = function (...args) {
    return args[0] * args[1];
}
const divide = function (...args) {
    return args[0] / args[1];
}

const buttons = document.querySelectorAll("button");
const input = document.querySelector(".input");
buttons.forEach((button) => button.addEventListener("click", () => {
    let previous = 0;
    let count = 0;
    if (button.textContent != "clear" && button.textContent != "=") {
        if (button.textContent != "+" && button.textContent != "-" && button.textContent != "*" && button.textContent != "/") {
            input.textContent +=  button.textContent; 
        }
        else {
            input.textContent += " " + button.textContent +" ";
        }
    }
    if (button.textContent === "clear") {
        input.textContent = "";

        count = 0;
    }
    if (button.textContent === "=") {
        if (count === 0) {
            input.textContent = (operate(input.textContent));
            count ++;
        }
        else {
            input.textContent = (operate(input.textContent));
        }
    }
}))
