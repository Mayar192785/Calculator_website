const number0= document.querySelector(".operand0");
const number1= document.querySelector(".operand1");
const number2= document.querySelector(".operand2");
const number3= document.querySelector(".operand3");
const number4= document.querySelector(".operand4");
const number5= document.querySelector(".operand5");
const number6= document.querySelector(".operand6");
const number7= document.querySelector(".operand7");
const number8= document.querySelector(".operand8");
const number9= document.querySelector(".operand9");


const addd= document.querySelector(".add");
const subtractt= document.querySelector(".subtract");
const multi= document.querySelector(".multi");
const dividee= document.querySelector(".divide");
const decimal= document.querySelector(".decimal");
const equal= document.querySelector(".equal");
const clearr=document.querySelector(".clear");
const backspace=document.querySelector(".backspace");
const screen=document.getElementById("result");

let text="";
let result=0;
let operationState="";
const fb=undefined;
let equation=fb||[];
let k=0;

const numbers=[number0,number1,number2,number3,number4,number5,
               number6,number7,number8,number9,addd,subtractt,
               multi,dividee,equal,decimal];


for(let i=0; i<numbers.length; i++)
{
    const numberel=numbers[i];
    numberel.addEventListener('click',() =>{
        if(numbers[i].value=="0"||numbers[i].value=="1"||numbers[i].value=="2"||numbers[i].value=="3"||numbers[i].value=="4"||
           numbers[i].value=="5"||numbers[i].value=="6"||numbers[i].value=="7"||numbers[i].value=="8"||numbers[i].value=="9"||
           numbers[i].value==".")
            {
                text+=numbers[i].value;
                if(equation.includes("+") || equation.includes("-")||equation.includes("*")||equation.includes("/"))
                {
                    displayclear();
                    display(text);  
                }
                if(numbers[i].value==".")
                {
                    decimal.disabled=true;
                }
                if(numbers[i].value=="0")
                {
                    number0.disabled=true;
                }
            }
           
            if(numbers[i].value=="+"||numbers[i].value=="-"||numbers[i].value=="*"||numbers[i].value=="/")
            {
                if(text==""){
                    equation.push(numbers[i].value);
                }
                else{
                    equation.push(text);
                    decimal.disabled=false;
                    number0.disabled=false;
                    equation.push(numbers[i].value);
                }
               
                text="";
                
            }
            else if(numbers[i].value=="="){
                    equation.push(text);
                    for(let j=0;j<equation.length;j++){
                        if(equation.includes("*"))
                        {
                            k=equation.indexOf("*");
                            result= multiply(parseFloat(equation[k-1]),parseFloat(equation[k+1]));
                            equation.splice(k-1,3,result);
                        }
                        else if(equation.includes("/"))
                        {
                            k=equation.indexOf("/");
                            result= divide(parseFloat(equation[k-1]),parseFloat(equation[k+1]));
                            if(Number.isInteger(result)==false){
                                result=result.toFixed(10);
                            }
                            equation.splice(k-1,3,result);
                        }
                        else if(equation.includes("+")) 
                        {
                            k=equation.indexOf("+");
                            result= add(parseFloat(equation[k-1]),parseFloat(equation[k+1]));
                            equation.splice(k-1,3,result);
                        }
                        else if(equation.includes("-"))
                        {
                            k=equation.indexOf("-");
                            result= subtract(parseFloat(equation[k-1]),parseFloat(equation[k+1]));
                            equation.splice(k-1,3,result);
                        }
                    }
                
                displayclear(); 
                text="";  
                display(result); 
            }
    });   
}

const add= (fnumber,snumber) =>{
    return fnumber+snumber;
}
const subtract= (fnumber,snumber)=>{
    return fnumber-snumber;
}
const multiply=(fnumber,snumber)=>{
    return fnumber*snumber;
}
const divide=(fnumber,snumber)=>{
    return fnumber/snumber;
}


function backSpace(){
    screen.value = screen.value.slice(0, - 1);
    text=text.slice(0,-1);
}
backspace.addEventListener("click",()=>{
    backSpace();
});

function display(value){
    screen.value += value;
}

function displayclear(){
    screen.value =" ";
}

function clear(){
    screen.value =" ";
    equation=[];
    text="";
    decimal.disabled=false;
    number0.disabled=false;
}
clearr.addEventListener("click",()=>{
    clear();
});