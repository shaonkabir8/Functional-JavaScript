/********************************************
            Functional JavaScript
                class - 13
    All Credit goes to HM Nayem (Twincle Cats)
        Topic : Reduce Function Manipulation. 

*********************************************/

var arr = [25, 50 , 70 , 90 , 0, 2 , 45 ,99 ,1 , 7, 76, 3, 32 , 39, 28];
console.log(arr);

var container = arr.reduce(function(a,b){
    return a + b ;
});
console.log(container);

