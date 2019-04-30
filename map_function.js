/********************************************
            Functional JavaScript
                class - 12
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Map Function Manipulation. 

*********************************************/

var arr = [25, 50 , 70 , 90 , 0, 2 , 45 ,99 ,1 , 7, 76, 3, 32 , 39, 28];
console.log(arr);
// First System
var anotherArray = [];
for ( var i = 0; i<arr.length; i++){
    anotherArray.push( arr[i] + 5 );
};
console.log(anotherArray);

// JavaScript Build-in Function (map)
var anotherArray = arr.map(function(value){
    return value + 10;
});
console.log(anotherArray);

// Our Map Function ==>
function mapFun (arr,callback) {
    var mapArr = [];
    for (var i = 0; i<arr.length; i++){
        mapArr.push(callback(arr[i]));
    }
    return mapArr;
};
var newMapFun = mapFun(arr , function(value){
    return value + 20;
})
console.log(newMapFun);
