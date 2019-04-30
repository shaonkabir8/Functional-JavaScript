/*
                Basic JavaScript Course : 

*/

// usd to taka convert Calculation
var usd = 80;                                                                                                                                                                                   
var usd_to_taka = 100; 
var taka = usd * usd_to_taka;
console.log(taka); 


// // Product Cost Calculation 
var pigeon_feed = 35;
var feed_needed = 50;
var total_taka = pigeon_feed * feed_needed;
console.log(total_taka);


/*
                JavaScript Conditional Logic :

*/

// Weekend Calendar :

var day = 'Friday';
if (day == 'Saturday') {
    console.log('You have to work Today');
} else if (day == 'Sunday') {
    console.log('You have to work Today');
} else if (day == 'Monday') {
    console.log('You have to work Today');
} else if (day == 'Thuesday') {
    console.log('You have to work Today');
} else if (day == 'Thursday') {
    console.log('You have to work Today');
}  else if (day == 'Friday') {
    console.log('Congrats ! Relax . You need not to work today Buddy.Spend your time as your wish');
} else {
    console.log('Do What Ever you like');
}


// Routine Checker for Night Working 

var time = 10.30;
if (10.30 == time) {
    console.log("Dont't Stop coding . Write Code untill 11 PM and follow next steps");
} else if (11 == time) {
    console.log("Dont't Stop coding . Write Code untill 12 PM and follow next steps");
} else if (12 == time) {
    console.log("Dont't Stop coding . Write Code untill 1 AM and follow next steps");
} else if (1 == time) {
    console.log("Dont't Stop coding . Write Code untill 2 Am and follow next steps");
} else if (2 == time) {
    console.log("Relax Buddy . Isn't it enought ?? It's Late night . Go To Sleep");
} else {
    console.log("Go to sleep taking medicine. you don't have any specific routine today");
}


// Conditional Logic Concept form the book of Pyhon 3 of Maaten Vai 

// Even or Odd Number :

var number = 15; // if i change the number , output will be changed.
if (0 === number%2) {
    console.log('This is Even Number');
} else {
    console.log('this is Odd Number');
}

// Positive or Negative ?? 

var number = 10;
if (0 <= number ) {
    console.log("This Number is Positive");
} else {
    console.log("This Number is Negative");
}



// Gate Pass / Ticket Permission :

var name = "unknownOne";
if ("Shaon" == name) {
    console.log("Welcome ! You're allowed.")
} else if ("Joti" == name) {
    console.log("Welcome ! You're allowed.")
} else if ("Joti" == name) {
    console.log("Welcome ! You're allowed.")
} else if ("unknownOne" == name) {
    console.log("Welcome ! You're allowed.")
} else if ("unknownTwo" == name) {
    console.log("Welcome ! You're allowed.")
} else {
    console.log("Sorry !! You're not allowed . Contact with associated section soon")
}


// Mathematics Value Calculation

var valueOfX = 1000;
if (3.1415 == valueOfX) {
    console.log("This is The Value of Pi");
} else if ( 100 == valueOfX) {
    console.log("This is a value of X");
} else if ( 200 == valueOfX) {
    console.log("This is a value of Y");
} else if ( 300 == valueOfX) {
    console.log("This is a value of Z");
} else {
    console.log("No Match ! Try Again. or fill the form for showing it here next time")
}


// True - False :

if (3>5){
    console.log("3 is bigger than 5");
} else {
    console.log("No ! 3 isn't bigger than 5")
}



// iligable for vote or not : 

var age = 30;

if (18<=age) {
    console.log("Congraculations ! You're allowed for giving Vote. Your age is :",age)
} else {
    console.log("Sorry ! You're not allowed for vote. Your age is less than", age)
}



// Finding bigger number from these numbers:

var a = 10;
var b = 5;
var c = 20;
if (a > b && a > c) { 
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}



// Vowel - Consonant :

var word = "z";
if (word == "a" || word == "e" || word == "i" || word == "o" || word == "u"){
    console.log(word , "is Vowel");
} else {
    console.log(word ,"is Consonant");
}

// GPA Grading Counter:

var number = 69;
if(number >=33 && number <= 39) {
    console.log("Your Result is 'D' Grade'. Practice More to upgrade GPA");
} else if (number >=40 && number <= 49) {
    console.log("Your Result is 'C' Grade'. You can do your best. Just read and practice");
} else if (number >=50 && number <= 59) {
    console.log("Your Result is 'B' Grade'. Give Conserntration for learing ");
} else if (number >=60 && number <= 69) {
    console.log("Your Result is 'A-' Grade'. Practice More & more to learn");
} else if (number >=70 && number <= 79) {
    console.log("Your Result is 'A' Grade'. Keep Trying your best");
} else if (number >=80 && number <= 100) {
    console.log("Congratulations !! Your Result is 'A+' Grade'.");
} else {
    console.log("Your Result is 'Fail' . Read and Practice to pass & Learn.")
}



/*
            JavaScript Loop :

// Statements :

# for 
# do .... while 
# while 

// Loop Control Statements:
# break
# continue

*/


// Print 1 to 100 using for loop:

for (i = 1; i <= 100; i++) {
    console.log(i);
}


// Print Even Number:
for (i=0; i<=40; i=i+2) {
    console.log(i , "is a Even Number")
}

// Print Odd Number :
for (i=1; i<=40; i = i+2) {
    console.log(i , "is a Odd Number");
}

// Print Positive Number :
for (i = 2; i<=20; i = i+2) {
    console.log(i);
}


// Print Negative Number :
for (i = 1; i < 20; i = i + 2) {
    console.log(i);
}

// Print Number of Difference of 4 :
for (i=4; i < 40; i = i + 4) {
    console.log(i);
}

// Print Numbers of Dable :

for (i=1; i<30; i=i+i) {
    console.log(i);
}




/* 

            JavaScript Array : In JavaScript Array is an object.

*/

// Basic Array

// to see array length
// console.log(subjects.length);

// to see to index number:
// console.log(subjects.indexOf('math'))

// To Sort Array by Accending / Alphabetacially:
// console.log(subjects.sort() );

// Remove first objects from array and returns it
// console.log(subjects.shift() );


// Result Sheet of a School for an Examination :
var student = ['Shaon' , 'Unknown' , 'Sozol' , 'Sohel' , 'Masud' , 'Anuz'];
var subjects =  ['bangla' , 'english','math','chemistry','biology','ict','physics','programming','Arabic'];

// // Marks according to Roll Number :
//             // Total Student number is 14
var math = [56,69,73,82,10,15,15,20,15,40,10,35,42,95];
var englishMarks = [10, 20, 30, 50, 80, 94,10,35,42,56,69,73,82,95];
var num = [10,35,42,56,69,73,82,95,10, 20, 30, 50, 80, 94];


var number = num[1];
console.log("Result of Mathematics Model Examination - 2019")
if(number >=33 && number <= 39) {
    console.log("Your Number is :", number +" "+"and"+" "+ "Your Result is 'D' Grade'. Practice More to upgrade GPA");
} else if (number >=40 && number <= 49) {
    console.log("Your Number is :", number +" "+"and"+" "+ "Your Result is 'C' Grade'. You can do your best. Just read and practice");
} else if (number >=50 && number <= 59) {
    console.log("Your Number is :", number +" "+"and"+" "+ "Your Result is 'B' Grade'. Give Conserntration for learing ");
} else if (number >=60 && number <= 69) {
    console.log("Your Number is :", number +" "+"and"+" "+ "Your Result is 'A-' Grade'. Practice More & more to learn");
} else if (number >=70 && number <= 79) {
    console.log("Your Number is :", number +" "+"and"+" "+ "Your Result is 'A' Grade'. Keep Trying your best");
} else if (number >=80 && number <= 100) {
    console.log("Congratulations !! Your Result is 'A+' Grade'.");
} else {
    console.log("Your Number is :", number +" "+"and"+" "+ "Your Result is 'Fail' . Read and Practice to pass & Learn.")
}


 console.log("Total Marks of Mathematics Examination - 2019");
 console.log(student[0] , ":" , math[0]);
 console.log(student[1] , ":" , math[1]);
 console.log(student[2] , ":" , math[2]);
 console.log(student[3] , ":" , math[3]);
 console.log(student[4] , ":" , math[4]);
 console.log(student[5] , ":" , math[5]);

 console.log("Total Marks of English Examination - 2019");

 console.log(student[0] , ":" , englishMarks[0]);
 console.log(student[1] , ":" , englishMarks[1]);
 console.log(student[2] , ":" , englishMarks[2]);
 console.log(student[3] , ":" , englishMarks[3]);
 console.log(student[4] , ":" , englishMarks[4]);
 console.log(student[5] , ":" , englishMarks[5]);


/*
        Learn with Hasin Hayder : Class :6.2


                        Topic: Array Manipulation

 # arrayName.length ==> to see  total items number

 # arrayName.shift(); ==> Delete First Element from array and returns it if it'll be stored in a variable: example: var element = arrayName.shift(); 

 # arrayName.unshift() ==> Add an Element First

 # arrayName.push() ==> Add an Element Last
 
 # arrayName.pop() ==> Delete Last Element from array and returns it if it'll be stored in a variable: example: var element = arrayName.pop();

*/

var students = ['shaon','sozol','rahim','karim','sohel','anuz','masud','jamal','kamal']

console.log("Total Students number :" , students.length);


students.push('Rahim', 'Rohomot ali', 'Hazrat Gazi') // Add new Items last

students.unshift('Mr.x' , 'Mrs.y', 'Mr.z') //  Add new items first

console.log(students);

var firstElement = students.shift (); // Delete and Return First Element
console.log(firstElement);

var lastElement = students.pop(); // Delete and Return last element
console.log(lastElement);


console.log(students);



 
                            // JavaScript Object

// Basic JavaScript Object :

/*
    Learning Things:

    # Object Declearation
    # Dot Notation & Brackets Notesion
*/


var shaon = {
    fullName: 'Shaon Kabir',
    age : 22,
    address: 'Banganchara College Road , sharsha , Jessore.',
    mobileNumber: 0755555555,
    job:'Joniour Front End Web Develper and Responsive web designer'

}
console.log(shaon.job); // Dot Notation
console.log(shaon['address']); //  Brackets Notation


shaon.zipCode = 7433 // For Addeding a new item to objects.

shaon.mobileNumber = 01555555; // For Changing an exiting item's value.

// console.log(shaon) // To see full Details

for(item in shaon) { // Only Properties will be seen not value :
    console.log(item);
}



                            // JavaScript Function

// Basic JavaScript Function :

    function customFunction() {
        //Statements
    }
    customFunction(); // If any custom function will be created , then it's mandotory to call . 

// Function Expression Declearation:
    var customFunction = function () {
        //Statements
    }
    customFunction(); // If any custom function will be created , then it's mandotory to call . 


// // Parameters and Arguments in Function:

function customFunction ( Parameters ) {
    // Statements using Parameters
    // returen the result
}
//customFunction( Arguments );

// N.B: Paramentrs number & Arguments number should be same else function won't give correct output.


// Example of Parameters and Arguments

function mathematicsFunction (a,b) {
    var plus = a + b;
    return plus;
}
mathematicsFunction();

console.log( mathematicsFunction(10,20) );
console.log( mathematicsFunction(20,20) );



// // Passing String as parameter and arguments :

function mySelf(name , skills) {
    console.log("i'm" + " " + name + "I'm skilled in html - css and learning " + skills );
}
mySelf('Shaon Kabir.', 'JavaScript');
