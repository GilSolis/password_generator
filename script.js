// Setting the variables
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var numbersChosen = document.getElementById("numbers");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lowerCaseChosen = document.getElementById("lowerCase");
var upperCase = lowerCase.map(function(lower){ return lower.toUpperCase() });
var upperCaseChosen = document.getElementById("upperCase");
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var specialCharactersChosen = document.getElementById("specialChars");
// var passwordSize = document.getElementById("slider").value;
// var password = [];
// console.log(upperCase);

console.log(specialCharactersChosen.checked);

// generate password
document.getElementById("generate").addEventListener("click", function() {

    if(numbersChosen.checked == false && lowerCaseChosen.checked == false && upperCaseChosen.checked == false && specialCharactersChosen.checked == false ){document.getElementById("display").innerHTML = "Must choose at least one option"};

// setting choice array
    var choices = [];


// adding choice to array
    if(numbersChosen.checked === true){
    choices = choices.concat(numbers);    
    }
    if(lowerCaseChosen.checked === true){
    choices = choices.concat(lowerCase);
    }
    if(upperCaseChosen.checked === true){
    choices = choices.concat(upperCase);    
    }
    if(specialCharactersChosen.checked === true){
    choices = choices.concat(specialCharacters);    
    }
console.log(choices.length)
// setting password array

var password = [];


// console.log(choices);

});
// create array of characters based on users choice

// create loop based on # of character requirement put that index into a new password variable.

// output new password to screen.

// var passwordLength = prompt("How long do you want your password to be?  Pick a number between 8-128 for password length.")
                
// if (passwordLength >= 8 && passwordLength <= 128) {

//     alert("Thanks, password will be " + passwordLength);
    
// }
// Elseif (passwordLength < 8 || passwordLength > 128) {
//     var correctPasswordLength = prompt("Pick a number between 8-128."); 
// }

// do { let passwordLength = prompt("How long do you want your password to be?  Pick a number between 8-128 for password length.");
// }
// while (passwordLength < 8 || passwordLength > 128)

// console.log(passwordLength);



document.getElementById("length").innerHTML = "Length: 60"

// let passwordSize = document.getElementById("slider")

document.getElementById("slider").oninput = function(){
    if (document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 8";

    }


}