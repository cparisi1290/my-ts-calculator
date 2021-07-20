import { question } from 'readline-sync';

function main(): void {
    // ask for user inputs
    const firstStr: string =  question('Enter first number:\n')
    const operator: string =  question('Enter operator:\n')
    const secondStr: string =  question('Enter second number:\n')

    // verify number inputs
    const firstNum = isNumber(firstStr)
    const secondNum = isNumber(secondStr)
  
    // verify operator
    const op = isOperator(operator)

    // validate whole equation
    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr); 
    console.log(validInput)
}

// to test if number inputs are numbers
function isNumber(str: string): boolean {
    // convert string input to integer
    const maybeNum = parseInt(str);
    // check to see if input is a number
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

// test to validate operator
function isOperator(operator: string): boolean {
    switch(operator) {
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