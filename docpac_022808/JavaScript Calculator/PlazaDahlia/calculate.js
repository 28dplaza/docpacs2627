function calculate() {
    let firstNumber = document.getElementById("firstNumber").value
    firstNumber = Number(firstNumber)
    console.log(firstNumber);
    let secondNumber = document.getElementById("secondNumber").value
    secondNumber = Number(secondNumber)
    console.log(secondNumber);
    let operation = document.getElementById("operation").value
    console.log(operation);
    let result = document.getElementById("result")
    console.log(result);

    if (operation == "+") {
        result.innerText = firstNumber + secondNumber
    } else if (operation == "-") {
        result.innerText = firstNumber - secondNumber
    } else if (operation == "*") {
        result.value = firstNumber * secondNumber
    } else if (operation == "/") {
        if (secondNumber != 0) {
            result.innerText = firstNumber / secondNumber
        } else {
            result.innerText = "Cannot divide by zero"
        }
    } else {
        if (secondNumber != 0) {
            result.innerText = firstNumber % secondNumber
        } else {
            result.innerText = "Cannot divide by zero"
        }
    }
}