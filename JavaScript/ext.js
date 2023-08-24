console.log("Hello Here!")

function greet(name){
    console.log(name + "is great person!")
}
let nme = "Ankit";
let name1 = "Rattan";

greet(name1);
greet(nme);

// Using return statements:
function sum(a,b,c){
    let d = a+b+c;
    return d;
}

// In above return type functions -> we can not use printing(console.log) statements value.(it will not work here).  

let value = sum(1,2,3);
console.log(value);