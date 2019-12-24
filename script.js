// prompt user for 8-128 characters
//     verify # of characters is between 8-128 else prompt again.

// prompt user if they want special characters

// prompt user if they want numeric characters

// prompt user if they want lower case characters

// prompt user they want upper case characters
//     verify at least one set of characters was chosen else prompt again

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

// let numbers = ['0','1','2','3','4','5','6','7','8','9'];
// let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let upperCase = lowerCase.map(function(x){ return x.toUpperCase() })
// let specialCharacters = []
 

document.getElementById("length").innerHTML = "Length: 60";

// let passwordSize = document.getElementById("slider")

document.getElementById("slider").oninput = function(){
    if (document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "Length: 1";

    }


}