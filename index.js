let cal = document.getElementById("div");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10"); // Zero button
const clear = document.getElementById("clear");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multi = document.getElementById("multi");
const division = document.getElementById("division");
const modules = document.getElementById("modules");
const ans = document.getElementById("ans");
const del = document.getElementById("del");
const decimal = document.getElementById("decimal");
const pow = document.getElementById("pow");
const root = document.getElementById("root");


let a = "";

function calculate(){
    cal.textContent = a === "" ? "0" : a;
}

function app(value){
    a += value;
    calculate();
}


btn1.onclick = () => app("1");
btn2.onclick = () => app("2");
btn3.onclick = () => app("3");
btn4.onclick = () => app("4");
btn5.onclick = () => app("5");
btn6.onclick = () => app("6");
btn7.onclick = () => app("7");
btn8.onclick = () => app("8");
btn9.onclick = () => app("9");
btn10.onclick = () => app("0");


plus.onclick = () => {app("+"); }
minus.onclick = () => app("-");
multi.onclick = () => app("*");
division.onclick = () => app("/");
modules.onclick = () => app("%");
decimal.onclick = () => app(".");
pow.onclick = () => app("^");
root.onclick = () => app("√");

del.onclick = backspace;

ans.onclick = () => equal() ;
clear.onclick = () => { 
    a = ""; 
    calculate(); 
};

function equal(){
    if (a === "") return;

    let o = "";

    if(a.includes("+")){
        o = "+" ;
    }
    else if(a.includes("-")){
        o = "-" ;
    }
    else if(a.includes("*")){
        o = "*" ;
    }
    else if(a.includes("/")){
        o = "/" ;
    }
    else if(a.includes("%")){
        o = "%" ;
    }
    else if(a.includes("^")){
        o = "^" ;
    }
    else if(a.includes("√")){
        o = "√" ;
    }
    else{
        return;
    }
    
    let part=a.split(o);
    let num1=parseFloat(part[0]);
    let num2=parseFloat(part[1]);
    let r=0;


    if(o==="+"){
        r=num1+num2;
    }
    else if(o==="-"){
        r=num1-num2;
    }
    else if(o==="*"){
        r=num1*num2;
    }
    else if(o==="/"){
        r=num1/num2;
    }
    else if(o==="%"){
        r=num1%num2;
    }
    else if(o==="^"){
        r=Math.pow(num1,num2);
    }
    else if(o==="√"){
        r=Math.sqrt(num2);
    }
    a=String(r);
    calculate();
}

function backspace() {
    a = a.slice(0, -1);
    calculate();
}




