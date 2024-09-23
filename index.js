console.log("hello world");
/* step 1: get the html element we need to attach event to
step 2: attach the event 
step 3: define the code that runs when the event is triggered
 */

let h1 = document.querySelector("h1");
h1.addEventListener("click", alertHelloWorld);

function alertHelloWorld(){
    alert("You clicked h1");
}

const calculate_btn = document.querySelector("#calculate");
calculate_btn.addEventListener("click", calculate);

function add(num1,num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function calculate(){
    
    //console.log("hi");
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    const operator = document.querySelector("#operator").value;
    const result = document.querySelector("#result");


    num1 = parseInt(num1);
    num2 = parseInt(num2);
        
    if (operator == "+"){
        result.innerText = add(num1, num2);
    }
    else if(operator == "-"){
        result.innerText = subtract(num1,num2);
    }
    else if(operator == "*"){
        result.innerText = multiply(num1,num2);
    }
    else if(operator == "/"){
        result.innerText = divide(num1,num2);
    }
    
}