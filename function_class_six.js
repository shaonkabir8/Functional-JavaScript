/********************************************
            Functional JavaScript
                class - 6
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Call Back Function.

==> Leaning Things :
Learned new things about function.

*********************************************/

function helloFunction(name,print){
    print(name);
};

helloFunction('Shaon Kabir',function(name){
    console.log("Hi, How are you " + ' ' + name +' ?');
});

helloFunction('Shaon Kabir', function(name) {
    console.log('Hello Dear ' + name +', How are you?')
});

// Funny Logical Function
function logicalFun(name = "Anonymous", gender) {
    var output;
    if ( gender === 'male') {
       output = ("Welcome Mr. " + name);
    } else if ( gender === 'female') {
       output = ("Hi Ms. " + name);
    } else {
        output = ('No data found ! Try letter.');
    }
    return output;
}
var result = logicalFun('Karim','male');
console.log(result);

var y = logicalFun('Anonymous','female');
y;


// Another Function
function anotherHelloFunction (name,gender) {
   return logicalFun(name,gender);
};
var newFun = anotherHelloFunction('Rahima','female');
console.log(newFun);
