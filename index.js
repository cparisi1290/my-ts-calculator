"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    // ask for user inputs
    var firstStr = readline_sync_1.question('Enter first number:\n');
    var operator = readline_sync_1.question('Enter operator:\n');
    var secondStr = readline_sync_1.question('Enter second number:\n');
    // verify number inputs
    var firstNum = isNumber(firstStr);
    var secondNum = isNumber(secondStr);
    // console.log(firstNum, secondNum)
    // verify operator
    var op = isOperator(operator);
    console.log(op);
}
// to test if number inputs are numbers
function isNumber(str) {
    // convert string input to integer
    var maybeNum = parseInt(str);
    // check to see if input is a number
    var isNum = !isNaN(maybeNum);
    return isNum;
}
// test to validate operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
main();
