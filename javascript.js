const operate = function(string) {
    const args = string.trim().split(" ").filter(char => char != "");

    if (args.length > 3) {
        return ("Please input an expression with one operator and two operands")
    }

    if (args.length === 1) {
        return (args[0]);
    }

    args[0] = parseFloat(args[0]);
    args[2] = parseFloat(args[2]);

    if (isNaN(args[0]) || isNaN(args[2])) {
        return("Invalid Input");
    }

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
const input = document.querySelector(".expression");
buttons.forEach((button) => button.addEventListener("click", () => {
    let previous = 0;
    let count = 0;

    if(button.classList.contains("backspace")) {
        if(input.textContent.length > 0) {
            input.textContent = input.textContent.slice(0, -1);
        }
    }
    else {        
        if (button.textContent != "clear" && button.textContent != "=") {
            console.log(input.textContent[0])
            if (input.textContent[0] != "-" && isNaN(parseFloat(input.textContent.trim()[0]))) {
                input.textContent = "";
                input.textContent = button.textContent;
            }
            else {
                if (button.textContent != "+" && button.textContent != "-" && button.textContent != "*" && button.textContent != "/") {
                    input.textContent +=  button.textContent; 
                }
                else {
                    input.textContent += " " + button.textContent +" ";
                }
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
    }
    
}))
