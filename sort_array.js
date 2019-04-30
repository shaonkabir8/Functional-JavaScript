/********************************************
            Functional JavaScript
                class - 9
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Sort Array.

==> Leaning Things : Array Manipulation ==>
sort()
*********************************************/

var arr = [25, 50 , 70 , 90 , 0, 2 , 45 ,99 ,1 , 7, 76, 3, 32 , 39, 28];

arr.sort(); // It won't give the correct output else a function won't pass through it.
arr;


// Main way of Arry Sorting.
arr.sort(function(a,b){
    return a - b ;
});
arr;



var newArray = [
    {name: 'Shaon Kabir', age : 22},
    {name: 'Rahim', age : 18},
    {name: 'Bosir Ahmed', age : 20},
    {name: 'Rohomot Ali', age : 29},
    {name: 'Abdul Mea', age : 35},
    {name: 'Concreate', age : 12},
    {name: 'Twincle Cats', age : 10}
];

// Sorting acording to age:

newArray.sort(function(a,b) {
    return a.age - b.age;
});
console.log(newArray);
console.log("Another Expriment for Sorting according to Name Alphabet")
// For Expriment: Shorting according to Alphabet (Name)
var anotherArr = newArray.slice(0);
anotherArr;

anotherArr.sort(function(a,b){
    if (a.name > b.name) {
        return 1;
    } else if ( a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});

console.log(anotherArr);
