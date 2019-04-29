/********************************************
            Functional JavaScript
                class - 2
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : First Class Function

        // 1. Function can be stored in a variable:
        // 2. Function can be stored in an Array:
        // 3. Function can be stored in an Object:
        // 4. Function can be created as needed:
        // 5. Function can be return within a Function as a function Parameter & Argument: 

*********************************************/

        // Function can be stored in a variable:

var functionContainer = welcome;
console.log(typeof functionContainer);

// Variable Can be changed anyway:
var anotherFunctionContainer = functionContainer;
console.log(anotherFunctionContainer)


        // Function can be stored in an Array:

var arrayName = [
    'Shaon',
    'Sohel',
    'Anuz',
    'Unknown',
    welcome,
]
console.log(arrayName[4]) // This is a pre defined Function
// we can pass this function as an array:
arrayName.push(functionContainer);
console.log(arrayName);


        // Function can be stored in a object:

var newObject = {
    Name : 'Shaon Kabir',
    Address : 'Baganchara College Road',
    Phone_Number  : 1254895202245,
    welcomeFunction: welcome,
    //we can create function within an object
    print: function () {
        console.log("Hello Bangladesh")
    }
}
console.log(newObject)




        // We can create Function as needed:
var number = 10 + ( function() {return 20}) (); // Self Invoking Function:
number;




        // Return a Function within a function:

function welcome (name) {
    var output = "Hello Mr. " + name + '.';
    return output;
};
console.log(welcome("Shaon Kabir"));

// Another Function:

function anotherFunction (name,intro) {
   return intro(name);
}
var result = anotherFunction('Shaon',welcome);
console.log(result);




// Basic of Functional JavaScript:: Extra Practice

// Greetings Function:

function greetingsFunction(name = "Anonymous") {
    return ("Hello " + name + ", How are you ?")
}
console.log(greetingsFunction("Karim") );
console.log(greetingsFunction("Rahim") );
console.log(greetingsFunction() );

// Calculator: Calculate plus of 3 Numbers:

function calculator(a,b,c) {
    var plus = a + b+c;
    return plus;
}
var result = calculator(10,12,20 );
console.log(result)
