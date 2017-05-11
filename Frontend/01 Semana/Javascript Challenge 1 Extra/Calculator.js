<<<<<<< HEAD
// Calculator
// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters
//    calculator("suma",10,5) // 15
//    calculator("resta",10,5) // 5
//    calculator("multiplicacion",10,5) // 50
//    calculator("division",10,5) //


function calculatorPlus(){
	var operation = arguments[0]
	var result =arguments[1]
	var totalElements = arguments.length;
	var operand;

	for (var i=2; i<totalElements; i++){
		operand = arguments[i];
		if (operation === "suma") result += operand;
		if (operation === "resta") result -= operand;
		if (operation === "multiplicacion") result *= operand;
		if (operation === "division") result /= operand;
	}
	return result;
=======
// Calculator
// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters
//    calculator("suma",10,5) // 15
//    calculator("resta",10,5) // 5
//    calculator("multiplicacion",10,5) // 50
//    calculator("division",10,5) //


function calculatorPlus(){
	var operation = arguments[0]
	var result =arguments[1]
	var totalElements = arguments.length;
	var operand;

	for (var i=2; i<totalElements; i++){
		operand = arguments[i];
		if (operation === "suma") result += operand;
		if (operation === "resta") result -= operand;
		if (operation === "multiplicacion") result *= operand;
		if (operation === "division") result /= operand;
	}
	return result;
>>>>>>> origin/master
}