const operate = function(string) {
    console.log(string)

    const args = string.split("").filter(char => char != " " && char != "");
    console.log(args)

    args[0] = parseFloat(args[0]);
    args[2] = parseFloat(args[2]);
    console.log(args)
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
console.log(operate("1+2"))
