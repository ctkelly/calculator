const display = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digits");
const operationBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const allClearBtn = document.querySelector(".clear");
const backSpcBtn = document.querySelector(".backspace");
const posNegBtn = document.querySelector(".pos-neg");
const factorialBtn = document.querySelector(".factorial");

digitBtns.forEach((button) => {
	button.addEventListener("click", buttonValue);
}) 

operationBtns.forEach((button) => {
	button.addEventListener("click", buttonValue);
})

allClearBtn.addEventListener("click", allClear);

equalsBtn.addEventListener("click", operate);

//factorialBtn.addEventListener("click", factorial);


//How to convert a string to a number with the below?
/* Number()
parseInt()
parseFloat()
*/

//Experiment with fx expression. Needed to put before buttonValue is called for it to work. 
/*const buttonValue = function(event) {
	let button = event.target;
	displayValue = button.value;
	display.textContent += displayValue;
	console.log(displayValue);
	console.log(typeof displayValue);
	return Number(displayValue);
}*/


//Original.  Concatenates on display but not in console.
/*function buttonValue(event) {

	let button = event.target;
	displayValue = button.value;
	display.textContent += displayValue;
	console.log(displayValue);
	console.log(typeof displayValue); //this needs to be a number and not a string -- parseInt and Number don't work when applied to above.
	return displayValue;
}*/

//Experiment #1.  Does not concatenate in display or in console.
/*function buttonValue(event) {

	clickedButtonValue = event.target.value;
	let displayedNumber = "";
	display.textContent = displayedNumber += clickedButtonValue;
	console.log(displayedNumber);
	console.log(typeof displayedNumber);
	return displayedNumber;
}*/ 

//Experiment #2. Says undefined in display and console. Concatenates in the display and in the console.
/*function buttonValue(event) {

	let clickedButtonValue = event.target.value;
	display.value += clickedButtonValue;
	display.textContent = display.value;
	console.log(display.value);
}*/

//Experiment #3. Concatenates in display but not in console.
/*function buttonValue(event) {
	
	let clickedButtonValue = event.target.value;
	display.textContent += clickedButtonValue;
	console.log(clickedButtonValue);
	console.log(typeof clickedButtonValue); //string

}*/

//Experiment #4.  Does not concatenate in display or console.
function buttonValue(event) {
	let displayedNumber = "";
	let clickedButtonValue = event.target.value;
	displayedNumber += Number(clickedButtonValue);
	display.textContent = displayedNumber;
	console.log(typeof clickedButtonValue); //string
	console.log(typeof displayedNumber); //string
	console.log(displayedNumber);
} 


//All clear function.  This works on the surface but not internally? 
function allClear() {
	display.textContent = "";
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
  return num1 / num2;
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


//Factorial, with for loop
/*function factorial(event) {
	
	let num = event.target.value; //??

	if ( num === 0 || num === 1) {
		return 1;
	}
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num; 
}*/