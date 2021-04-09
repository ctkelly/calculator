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
}) 

operationBtns.forEach((button) => {
	button.addEventListener("click", handleOperation);
})

posNegBtn.addEventListener("click", changeSign);

factorialBtn.addEventListener("click", factorial);

allClearBtn.addEventListener("click", allClear);

backSpcBtn.addEventListener("click", backspace);

equalsBtn.addEventListener("click", function(event) {
	if (currentOperation !== null) {
		operand2 = parseFloat(getDisplayValue());
		display.textContent = operate(currentOperation, operand1, operand2);
		operand1 = null; // Put these in a separate function later
		operand2 = null;
		currentOperation = null;
		calculationComplete = true;

	}
});

// Get whatever number is showing in the display
function getDisplayValue() {
	return display.textContent;
}

// All clear function   CHECK THAT IT'S REALLY ALL CLEAR.  I think so.
function allClear() {
	display.textContent = "";
	operand1 = null;
	operand2 = null;
	currentOperation = null;
	calculationComplete = false;
	waitingForSecondOperand = false;
} 

// Changes display value from positive to negative and vice versa
function changeSign() {
	if (display.textContent === "") {
		display.textContent = "-";
	} else if (display.textContent === "-") {
		display.textContent = "";
	} else if (display.textContent === "0") {
		display.textContent = "-";
	} else if (parseFloat(getDisplayValue()) > 0) {
		display.textContent = parseFloat(getDisplayValue()) * -1;
	} else {
		display.textContent = parseFloat(getDisplayValue()) * -1;
	}
} 

// Backspace to delete the most recent digit press
function backspace () {
	let digitString = display.textContent;
	let newDigitString = digitString.slice(0, -1);
	display.textContent = newDigitString;

}

// Pseudocode to troubleshoot inputDigit fx (the proper way for it to work):
// if display is empty, then += clickedbtnvalue 
// if waiting for second op is false and display is not empty, then display.textCont += clickedbtnval
// if waiting for second op is true and display is not empty, then clear display and display.textCont = clickedbtnval and set waiting for second op to false
// then the display is not empty so on the next button press, will execute directions for waiting false and display not empty

// It works now!
function inputDigit(event) {
	let clickedButtonValue = event.target.value;
	if (display.textContent === "") {
		display.textContent = clickedButtonValue;
	} else if (waitingForSecondOperand === false && display.textContent !== "") {
		display.textContent += clickedButtonValue;
	} else if (waitingForSecondOperand === true && display.textContent !== "") {
		display.textContent = "";
		display.textContent = clickedButtonValue;
		waitingForSecondOperand = false;
	} 
} 

// When operator button is pressed, after inputting the first operand
function handleOperation(event) {
	let clickedButtonValue = event.target.value;
	currentOperation = window[clickedButtonValue];
	//console.log(currentOperation);
	operand1 = parseFloat(getDisplayValue());
	//console.log(operand1);
	waitingForSecondOperand = true;
	//console.log(waitingForSecondOperand);
}

//Functions below are add/subtract/multiply/divide for single pairs of numbers only
function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
	if (num2 === 0) {
		return display.textContent = "not possible!"; // How could I resize longer text to fit into the div
	} else {
  return num1 / num2;
	}
} 

//Factorial fx, using for loop
function factorial(event) {
	let clickedButtonValue = event.target.value;
	currentOperation = window[clickedButtonValue];
	console.log(currentOperation);
	let num = parseInt(getDisplayValue());

	if (num > 100) {
		return display.textContent = "error";
	} else if (num === 0 || num === 1) {
		num = 1;
		display.textContent = num;
		return num;
	}
	for(let i = num - 1; i >= 1; i--) {
		num *= i;
	}
	display.textContent = num;
	return num;
} 

//Function that takes two numbers and calls one of the above functions on the numbers
function operate(operator, num1, num2) {
  let answer = 0;
  let mathOperation = operator(num1, num2);
	if (operator === divide && num2 === 0) {
		return mathOperation;
	} else // there are no curly braces here but it still works ASK JEFF
	return answer += mathOperation; 
} 


//Functions below are for finding 1) sums and products of arrays; 2) exponents; 3) factorials
/*function sum (array) { 
	let initialValue = 0;
	
	let reducer = (runningSumTotal, item) => {
		return runningSumTotal + item;
	}

	let sum = array.reduce(reducer, initialValue);

	return sum;
} 

function multiplyAll (array) {
	let initialValue = 1;
	
	let reducer = (runningProductTotal, item) => {
		return runningProductTotal * item;
	}

	let product = array.reduce(reducer, initialValue);

	return product;
	
} 

function power(base, exponent) {
	return Math.pow(base, exponent);
}*/

//Factorial, with recursion
/*function factorial(buttonValue) {
	if (buttonValue == 0) {
		return 1;
	} else if (buttonValue > 9) {
		return "Error";
	} else {
		return (buttonValue != 1) ? buttonValue * factorial(buttonValue - 1) : 1;
	}	
}*/ 

//This works the same as below even without curly braces after if statement.  ASK JEFF.
/*function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}*/

/*function factorial(num) {
	if ( num === 0 || num === 1) {
		return 1;
	}
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num; 
}*/ 