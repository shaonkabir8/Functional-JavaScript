/********************************************
            Functional JavaScript
                class - 5
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Higher Order Function.

==> Leaning Things :


*********************************************/

// To Travers an array we've to go through higher order function.
var newArray = [
    'Shaon',
    'Sohel',
    5,
    4,
    8,
    1,
    0,
    2,
    'Bangladesh'
];
// For array Travers we can create function inline.
newArray.forEach(function(a) {
    console.log(a);
});

        // Another Way of Array Travers ==>

// Function is passed as an argument for array travers 
function arrayTraversFunction(arrayTravers) {
    console.log(arrayTravers);
};
var anotherArray = newArray.slice(); // Copy the array to apply another method.
anotherArray.forEach(arrayTraversFunction);

/* All The Process go through Higher Order Function */


// Funny Function:
function caller () {
    return function(name) {
        return "Caller Calling You " +  name;
    };
};

var x = caller();
var y = x('shaon');
y;
z = x('Bangladesh');
z;