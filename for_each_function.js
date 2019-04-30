/********************************************
            Functional JavaScript
                class - 10
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Foreach Function 

==> Leaning Things : For each Function Creation and Manipulation ==>

*********************************************/

var arr = [25, 50 , 70 , 90 , 0, 2 , 45 ,99 ,1 , 7, 76, 3, 32 , 39, 28];
var sortedArray = arr.sort(function(a,b) {
    return a - b;
});

arr.forEach(function(element,index,sortedArray){
    console.log("Element is = " + element + " & Index = " + index + " & Our Sorted Arr = " + sortedArray);
})



// Pure For each function : Created ==>
console.log(arr);

function sortMethod(arr,callback){
    for (var i = 0; i<arr.length; i++) {
        callback(arr[i],i,sortedArray);
    }
};
sortMethod(arr,function(element,index,sortedArray){
    console.log("Element is = " + element + " . Index is =" + index + " . Sorted Array = " + sortedArray)
})


// Practice 
console.log(arr);

function loop(arr,create){
    for (var i = 0; i<arr.length; i++) {
        create( i , arr[i]) ;
    }
};

loop(arr,function(index,element){
    console.log(" index is : " + index + " ==> For " + element );
});

























