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


digitBtns.forEach((button) => {
	button.addEventListener("click", inputDigit);
}) 

operationBtns.forEach((button) => {
	button.addEventListener("click", handleOperation);
})

allClearBtn.addEventListener("click", allClear);

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

factorialBtn.addEventListener("click", factorial);

//Experiment #3. How do we determine if there is an operation in progress?  Use currentOperation variable, null, 
function inputDigit(event) {
	let clickedButtonValue = event.target.value;
	if (currentOperation === null && calculationComplete === false) {
		display.textContent += clickedButtonValue;
		// added the below to attempt fix for concatenation problem after pressing equals
	} else if (currentOperation == null && calculationComplete === true) {
		operand1 = parseFloat(getDisplayValue()); // ??

		display.textContent += clickedButtonValue; 
	} else {
		display.textContent = clickedButtonValue;
	} 
}

/* 1) determine which function to call 2) get operands (num1 and num2)
	- num1 is whatever is in the display
	- num2 is to be pressed
*/
function handleOperation(event) {
	let clickedButtonValue = event.target.value;
	currentOperation = window[clickedButtonValue];
	console.log(currentOperation);
	operand1 = parseFloat(getDisplayValue());
	console.log(operand1);
}

function getDisplayValue() {
	return display.textContent;
}

//All clear function.  This works on the surface but not internally? 
function allClear() {
	display.textContent = "";
	operand1 = null;
	operand2 = null;
	currentOperation = null;
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
		return display.textContent = "dividing by 0 is undefined";
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
		return display.textContent = "Error";
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