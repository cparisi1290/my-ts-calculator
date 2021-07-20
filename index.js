"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    // ask for user inputs
    var firstStr = readline_sync_1.question('Enter first number:\n');
    var operator = readline_sync_1.question('Enter operator:\n');
    var secondStr = readline_sync_1.question('Enter second number:\n');
    console.log(firstStr, operator, secondStr);
}
main();
