/********************************************
            Functional JavaScript
                class - 8
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Closure.

==> Leaning Things : Postmortem of Closure ==>
#  if any data comes from a global scope except comming from local function scope , then it's called       Closure.


N:B ==> A Scope can be created one and only if a Function will be created else Scope won't be created.


==> My Opinions:
I've used Closure many times before learning this BuzzWord...... Ha ha ha !!! happyCoding!!

*********************************************/

var myName = "Shaon Kabir";

function welcomeFunction() {
    console.log("Hello mr. " + myName);
}

welcomeFunction();

// Another Example of Closure:

// Greetings Function:
function greetings(name = 'Anonymous'){
    return function(name) {
        console.log("Good Evening, " + name);
    };
};

var mornign = greetings()("Shaon Kabir");
var evening = greetings()('Rahim');

// Another Example:

var newArray = [4,5,2,1,8,9,6,3,4,7];

/* For Practice: Just Fun */

// var x = (newArray.length);
// x;

// var y = newArray.push('Bangladesh');
// newArray;

// var newArraySting = newArray.toString();
// console.log(typeof newArraySting);

// mainString = newArraySting.split("");
// console.log(mainString);
// console.log(mainString.length);

function arrayFun () {
    return newArray;
}
var z = arrayFun();
console.log(z);


// Object Example :
var object = {
    firstName : 'Shaon',
    lastName : 'Kabir',
    address : 'Baganchara College Road, Sharsha , Jessore',
    fullName : function() {
       var output = (this.firstName + " " +  this.lastName);
        return output;
    }
};
// Here ==> firstName and lastName came outside of this function Scope.
console.log( object.fullName() );


