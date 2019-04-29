/********************************************
            Functional JavaScript
                class - 3
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Inner Function.

*********************************************/

function outerFunction() {

    function innerFunction() {
        console.log("Hello , I'm from Inner Function");
    };
    console.log("Hi, I'm from Outer Function");
    innerFunction();
}
 
var fun = outerFunction();
console.log(fun);

// Global and Local Scope Example:

function calculation(a,b) {

    function plus () {
        return a + b;
    };
    function minus () {
        return a - b;
    };
    function multiply() {
        return a * b;
    };
    function divition() {
        return a / b;
    };

    return plus() + minus() + multiply() + divition();
};
console.log( calculation(10,10) );

// Another Inner Funciton Example:

function innerFunctionExample(n) {
    function base() {
        var squre = n * n ;
        return squre;
    }
    base ();
    return  ("Main Number is "+ n +" and it's Squre is : " , base ());
}

var result = innerFunctionExample(10);
console.log(result);