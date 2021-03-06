const display = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digits");
const operationBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const allClearBtn = document.querySelector(".clear");
const backSpcBtn = document.querySelector(".backspace");
const posNegBtn = document.querySelector(".pos-neg");
const factorialBtn = document.querySelector(".factorialize");

let operand1 = null;
let operand2 = null;
let currentOperation = null;
let calculationComplete = false;
let waitingForSecondOperand = false;

digitBtns.forEach((button) => {
  button.addEventListener("click", inputDigit);
});

operationBtns.forEach((button) => {
  button.addEventListener("click", handleOperation);
});

posNegBtn.addEventListener("click", changeSign);

factorialBtn.addEventListener("click", factorial);

allClearBtn.addEventListener("click", allClear);

backSpcBtn.addEventListener("click", backspace);

// Performs the calculation and resets operands and state of operation
equalsBtn.addEventListener("click", function (event) {
  if (currentOperation !== null) {
    operand2 = parseFloat(getDisplayValue());
    setDisplayValue(operate(currentOperation, operand1, operand2));
    operand1 = null;
    operand2 = null;
    currentOperation = null;
    calculationComplete = true;
  }
});

// Get whatever is showing in the display
function getDisplayValue() {
  return display.textContent;
}

// Set what's going to be shown in the display.  Param "value" is a placeholder for whatever will be shown in the display.
function setDisplayValue(value) {
  return display.textContent = value;
}

// Append digits to the display
function appendToSetDisplayValue(value) {
  display.textContent += value;
}

// Backspace to delete the most recent digit press
function backspace() {
  let digitString = getDisplayValue();
  let newDigitString = digitString.slice(0, -1);
  setDisplayValue(newDigitString);
}

// All clear function
function allClear() {
  setDisplayValue("");
  operand1 = null;
  operand2 = null;
  currentOperation = null;
  calculationComplete = false;
  waitingForSecondOperand = false;
}

// Changes display value from positive to negative and vice versa
function changeSign() {
  let displayValue = getDisplayValue();
  if (waitingForSecondOperand === true && displayValue !== "") { 
    setDisplayValue("");
    setDisplayValue("-");
    waitingForSecondOperand = false;
  } else if (displayValue === "") {
    setDisplayValue("-");
  } else if (displayValue === "-") {
    setDisplayValue("");
  } else if (displayValue === "0") {
    setDisplayValue("-");
  } else if (parseFloat(getDisplayValue()) > 0) {
    setDisplayValue(parseFloat(getDisplayValue()) * -1);
  } else {
    setDisplayValue(parseFloat(getDisplayValue()) * -1);
  }
}

// Input digits into the display -- updated with decimal validation and digit limit for operands
function inputDigit(event) {
  let displayValue = getDisplayValue(); 
  let clickedButtonValue = event.target.value;
  if (displayValue.includes(".") && clickedButtonValue === "." && waitingForSecondOperand === false) {
    return;
  } else if (displayValue === "") {
    setDisplayValue(clickedButtonValue);
  } else if (displayValue === "-") {
    appendToSetDisplayValue(clickedButtonValue);
  } else if (displayValue.includes("-") && waitingForSecondOperand === false) {
    appendToSetDisplayValue(clickedButtonValue);
  } else if (displayValue.toString().length <= 9 && waitingForSecondOperand === false && calculationComplete === false && displayValue !== "") {
    appendToSetDisplayValue(clickedButtonValue);
  } else if (waitingForSecondOperand === true && displayValue !== "") {
    setDisplayValue("");
    setDisplayValue(clickedButtonValue);
    waitingForSecondOperand = false;
    calculationComplete = false;
  } else if (calculationComplete === true && displayValue !== "") {
    setDisplayValue("");
    setDisplayValue(clickedButtonValue);
    calculationComplete = false;
  }
} 

// When operator button is pressed, after inputting the first operand
function handleOperation(event) {
  let clickedButtonValue = event.target.value;
  currentOperation = window[clickedButtonValue];
  operand1 = parseFloat(getDisplayValue());
  waitingForSecondOperand = true;
} 

//Functions below are add/subtract/multiply/divide for single pairs of numbers only.
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return setDisplayValue("not possible!"); 
  } else {
    return num1 / num2;
  }
} 

//Factorial fx, using for loop
function factorial(event) {
  let num = parseInt(getDisplayValue());
  if (num > 100) {
    setDisplayValue("error");
    return; 
  } else if (num === 0 || num === 1) {
    num = 1;
    setDisplayValue(num);
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  setDisplayValue(formatResult(num));
}

// Operate function. Takes as params an operator fx and two nums to perform the calculation. 
function operate(operator, num1, num2) {
  let answer = 0;
  let mathOperation = operator(num1, num2); 
  if (operator === divide && num2 === 0) {
    return mathOperation;
  } else if (operator === divide && mathOperation < 1) {
    let result = mathOperation;
    return formatResult(result);
  } else {
    let result = parseFloat((answer += mathOperation));
    return formatResult(result);
  }
}

// Formats the result (if > 1 ) to certain number of sig figs (NOT decimal places) to fit in the display and formats with sci notation. Using toFixed() doesn't limit the decimals nor formats with sci notation.
function formatResult(result) {
  if (result < 1) {
    return parseFloat(result.toFixed(7)); // wrapping in parseFloat gets rid of trailing zeros :)
  } else if (result.toString().length > 9) {
    return parseFloat(result.toPrecision(9));
  }
  return result;
} 

