const operand1 = prompt("Enter the first number"," ");
const operator = prompt("Enter one of the these operator (either +, -, *, or /)"," ");
const operand2 = prompt("Enter the second number"," ");

let result;

if (operator == '+'){
    result = +operand1 + +operand2;
}
else if (operator == '-'){
    result = operand1 - operand2;
}
else if (operator == '*'){
    result = operand1 * operand2;
}
else if (operator == '/') {
    result = operand1 / operand2;
}
else{
    alert("You entered an invalid operator");
}

alert(`The result of: ${operand1} ${operator} ${operand2} = ${result}`);