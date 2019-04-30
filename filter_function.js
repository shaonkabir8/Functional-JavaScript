/********************************************
            Functional JavaScript
                class - 11
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Filter Method for Array 

*********************************************/

 var arr = [25, 50 , 70 , 90 , 0, 2 , 45 ,99 ,1 , 7, 76, 3, 32 , 39, 28];
// Best Array Sorting Method:
arr.sort(function(a,b){
    return a - b;
});
console.log(arr);


// For Even Numbers from Array:
var evenArry = [];
for (var i = 0; i<arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenArry.push(arr[i]);
    }
};
console.log("The Evem Numbers are: " + evenArry);

// Another way of Printing Even Numbers 
var evenArr= arr.filter(function(value) {
    return value % 2 == 0;
});
console.log("Even Numbers Are :" + evenArr);



// For Odd Numbers from Array:
var oddArry = [];
for (var i = 0; i<arr.length; i++) {
    if ( arr[i] % 2 == 1 ) {
        oddArry.push(arr[i]);
    }
};
console.log("The Odd Numbers are: " + oddArry);

// Another way of Printing Odd Numbers 
var oddArr = arr.filter(function(number){
    return number % 2 == 1;
});
console.log("The Odd Numbers are: " + oddArr);




                        /* Practice ==> */

var data = [25, 50 , 70 , 90 , 0, 2 , 45 ,99 ,1 , 7, 76, 3, 32 , 39, 28];
data.sort(function(a,b){
    return a - b;
})
console.log(data);

// For Even Number:
var dataContainerOne = [];
for (var i = 0; i<data.length; i++) {
    if ( data[i] % 2 == 0 ) {
        dataContainerOne.push(data[i]);
    }
};
var container = dataContainerOne;
console.log(container);



// For Odd Number:
var dataContainerTwo = [];
for (var i = 0; i<data.length; i++) {
    if (data[i] % 2 == 1 ) {
        dataContainerTwo.push(data[i]);
    }
};
var anotherContainer = dataContainerTwo;
console.log(anotherContainer);