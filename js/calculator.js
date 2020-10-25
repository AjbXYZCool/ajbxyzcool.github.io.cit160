function addNumbers(num1, num2){ return num1 + num2; }
function multNumbers(num1, num2){ return num1 * num2; }
function subtNumbers(num1, num2){ return num1 - num2; }
function divNumbers(num1, num2){ return num1/num2; }

function solutionCheck(){

    //Input: The numbers provided, the arithmetic operator, and the suggested answer.
    let numA = parseFloat(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let numB = parseFloat(document.getElementById("num2").value);
    let userAnswer = parseFloat(document.getElementById("ans").value);

    let trueAnswer;
    let message = "";

    switch(operator){

        case "+":
            trueAnswer = addNumbers(numA,numB);
            break;
        case "-":
            trueAnswer = subtNumbers(numA,numB);
            break;
        case "*":
            trueAnswer = multNumbers(numA,numB);
            break;
        case "/":
            trueAnswer = divNumbers(numA,numB);
            break;
        default:
            trueAnswer = false;
            break;
    }

    if(!trueAnswer){ message = "False operator, try again."; }
    else if (trueAnswer == userAnswer ){ message = "Correct!"; }
    else { message = "Incorrect."; }

    document.getElementById("output").innerHTML = message;
}