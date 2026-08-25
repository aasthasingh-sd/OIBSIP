
let btns = document.querySelectorAll(".btn");
let num = document.querySelector(".input-area");
let equalBtn = document.querySelector(".equal");
let DelBtn = document.querySelector(".del");
let clrBtn = document.querySelector(".clear");
let justCalculated = false;

function clickBtn(){
    btns.forEach((btn)=>{
       btn.addEventListener("click",()=>{
        if(btn.classList.contains("equal")||btn.classList.contains("del") || btn.classList.contains("clear") ){
           console.log("it should not be in input area");
        }else{
            if (justCalculated) {
            num.value = "";
            justCalculated = false;
            }
            num.value += btn.innerText;
        }
    }
)})}

clickBtn();

let expression = num.value;

//Method chaining
function calculate(expression){
    let parts = expression.split(/([+\-*/])/);

    //multiplication and division
    for(let i=1;i<parts.length;i++){
        if(parts[i]=== "*"){
            let a = Number(parts[i-1]);
            let b = Number(parts[i+1]);
            let mul = a*b;
            parts.splice(i-1,3,mul);
            i-=2;
        }else if(parts[i]=== "/"){
            let a = Number(parts[i-1]);
            let b = Number(parts[i+1]);
            let div =  a/b;
             //Division by zero
            if(b == 0){
            console.error("Division by zero is undefined");
            return "error";
            }else{
            parts.splice(i-1,3,div);
            i-=2;
            }
        }
    }
    //Addition and subtraction
    for(let i=1;i<parts.length;i++){
        if(parts[i]=== "+"){
            let a = Number(parts[i-1]);
            let b = Number(parts[i+1]);
            let sum = a+b;
            parts.splice(i-1,3,sum);
            i-=2;
          
        }else if(parts[i]=== "-"){
            let a = Number(parts[i-1]);
            let b = Number(parts[i+1]);

            let sub =  a-b;
        
            parts.splice(i-1,3,sub);
            i-=2;
            }
        }
        return Number(parts[0]);
    }
   


equalBtn.addEventListener("click",()=>{
    let expression = num.value;
    let result = calculate(expression);

    num.value = expression + " = " + result;
    justCalculated = true;
});

//clear button 
clrBtn.addEventListener("click",()=>{
    num.value = "";
});

//Delete button
DelBtn.addEventListener("click",()=>{
    let val = num.value.slice(0,-1);
    num.value = val;
});
