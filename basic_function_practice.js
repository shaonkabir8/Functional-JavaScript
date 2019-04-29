
// First Class Function:


// Basic Function: 

/* 
    NOT SOLVED | DON'T WORK AS EXPECTED;
*/

// function basicFunction (name = "Anonymous", gender = 'male') {

//     if (gender == "male") {
//        var output = ("Hello Mr." + name + ". How are you ?");
//     } else if (gender = "female") {
//         var output = ("Hello Mrs." + name + ". How are you ?");
//     } else {
//         var  output = ("Hello , How are you ?" + name);
//     };
//     return output;

// };

// var basicFunctionResult = basicFunction('Shaon Kabir');
// console.log(basicFunctionResult);


function newFunction(name) {
    var output = "Hello Mr. " + name + " How are you ?"
    return output;
}
var functionOutput = newFunction('Shaon');
console.log(functionOutput);


// 1. Function can be stored in a variable:

var functionContainer = newFunction;
console.log(typeof functionContainer)

// 2. Function can be stored in an Array:
var arrayName = [
    'Shaon',
    'Sohel',
    'Anuz',
    'Unknown',
    '',
    ,
]
arrayName.push(newFunction);
console.log(arrayName[6])

// 3. Function can be stored in an Object:

var mainObject = {
    name: 'Shaon Kabir',
    address: 'Bagnachara College Road',
    phone: 1548455255,
    ourFunction: newFunction
}
console.log(typeof mainObject.ourFunction);

// 4. Function can be created as needed:

var selfInvokingFunctionExample = 15 + (function() {return 5} () );
console.log(selfInvokingFunctionExample);

// 5. Function can be return within a Function as a function Parameter & Argument: 
