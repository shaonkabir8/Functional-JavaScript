// This will be opened in Browser ==>

var name = prompt('Enter Your Name: ');
var age = prompt("Enter Your Age: ");

if (age >= 18 && age <= 30) {
    document.write("Welcome " + name + " . Your age is " + age);
} else if (age < 18 && age >= 10) {
    document.write("Sorry !! Your age is " + age);
} else {
    document.write("No Data Found");
}
