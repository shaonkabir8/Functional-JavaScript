//Basic JavaScript Function ==>

function welcomeFunction(name = "Anonymous"){
    return console.log("Hello," + name);
};
welcomeFunction('Shaon');
var welcome = welcomeFunction();


// Calculation 
function plus (a,b){
    return a + b;
}
function minus (a,b) {
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divition (a,b) {
    return a / b ;
}
// Another Way: Closure Function ==>
function calculator (a,b) {
    return plus(a,b,c);
}
var result = calculator(10,15);
console.log(result);



//  Other Way: Call back Function ==>
function calculatorMain (b,c , plusFunction){
    return plusFunction=  b + c ;
}
var calculatorFun = calculatorMain(20,25,function(b,c){
    return b + c ;
})
console.log(calculatorFun);

// USD To Taka Converter:

var usdCurrency = 80;
var taka = 10000;
var usd = taka / usdCurrency;
usd;





// Basic Calculator:
