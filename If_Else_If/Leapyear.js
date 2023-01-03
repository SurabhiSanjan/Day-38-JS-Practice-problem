const ps = require("prompt-sync");
const prompt = ps();
let year = prompt("Enter a Year!!  ");
if (year.length == 4 && ((+year%4)==0 && (+year%100)!==0 || (+year%400)==0)) {
    console.log("Entered year is Leap year");
    
} else {
    if(+year.length != 4){
        console.log("Enter valid year format");
    }

    console.log("Entered Year is not a Leap Year");   
}