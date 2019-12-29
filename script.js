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


// generate password on click
document.getElementById("generate").addEventListener("click", function(){

    if(numbersChosen.checked == false && lowerCaseChosen.checked == false && upperCaseChosen.checked == false && specialCharactersChosen.checked == false){document.getElementById("display").innerHTML = "Must choose at least one option"};

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

    
// // setting password array
//     var password = []
// // setting legth of password variable
//     var lengthOfPassword = document.getElementById('slider').value


//     for (var i = 0; i < lengthOfPassword; i++) {
//     var randomNumber = Math.floor(Math.random() * choices.length);
//     password = password.concat(choices[randomNumber])
//     }   
//     document.getElementById("display").value = password.join('');


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

// Copy to clipboard

document.getElementById("copy").addEventListener("click", function () {
    if(document.getElementById('display').value === "" || document.getElementById('display').value === "Must choose at least one option"){
        document.getElementById("display").innerHTML = "Please generate a password";
    }
    else {
    var copyPassword = document.getElementById("display");
    copyPassword.select();
    copyPassword.setSelectionRange(0, 99999);
    document.execCommand("copy");
    }
});