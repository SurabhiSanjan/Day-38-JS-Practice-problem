const ps3 = require("prompt-sync");
const prompt3 = ps3();
let firstNumber = prompt3("Enter First Number !! ");
let secondNumber = prompt3("Enter Second Number !! ");
let thirdNumber = prompt3("Enter Third Number !! ");


let firstResult; 
let secondResult;
let thirdResult;
let fourthResult;
let operationArr = [];
let operation = function (firstNumber,secondNumber,thirdResult){
    firstResult = ((+firstNumber)+(+secondNumber)*(+thirdNumber));
    
    operationArr.push(firstResult);
    secondResult = ((+firstNumber)%(+secondNumber)+(+thirdNumber));
    operationArr.push(secondResult);
    thirdResult = ((+thirdNumber)+(+firstNumber)/(+secondNumber));
    operationArr.push(thirdResult.toFixed(2));
    fourthResult = ((+firstNumber)*(+secondNumber)+(+thirdNumber));
    operationArr.push(fourthResult);

    return operationArr;
}
console.log(operation(firstNumber,secondNumber,thirdNumber));
operationArr.sort((a,b)=>a-b);
console.log(`Minimun value is ${operationArr[0]}`);
operationArr.sort((a,b)=>b-a);
console.log(`Maximum value is ${operationArr[0]}`);