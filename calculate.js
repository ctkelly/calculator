const display = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digits");
const operationBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const allClearBtn = document.querySelector(".clear");
const backSpcBtn = document.querySelector(".backspace");
const posNegBtn = document.querySelector(".pos-neg");



//Test
/*digitBtns.forEach(button => {
	button.addEventListener("click", () => {
		let digit = button.value;
		display.textContent += digit;
	})
})*/

/*digitBtns.forEach((button) => {
	button.addEventListener("click", buttonValue);
}); 

function buttonValue() {
	let showValue = button.value;
	display.textContent += showValue;
}*/ 

digitBtns.forEach(button => {
	button.addEventListener("click", () => {
		let showValue = button.value;
		display.textContent += showValue;
	})
})




allClearBtn.addEventListener("click", allClear);

//All clear function 
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
}

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return (n != 1) ? n * factorial(n - 1) : 1;
	}	
}*/ 