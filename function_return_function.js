/********************************************
            Functional JavaScript
                class - 7
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Return Function from another Function.

==> Leaning Things :

*********************************************/


function host(greetings = "Hello, ") {
    console.log( greetings + "I'm host function");
    return function () {
        console.log( greetings + "i'm Clild Function");
    }
};

var mainHost = host();
mainHost();


// Greetings Function:

function greetings(name = 'Anonymous'){
    return function(name) {
        console.log("Good Evening, " + name);
    };
};

var mornign = greetings()("Shaon Kabir");
var evening = greetings()('Rahim');
