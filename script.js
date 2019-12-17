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

do { var passwordLength = prompt("How long do you want your password to be?  Pick a number between 8-128 for password length.");
}
while (passwordLength < 8 || passwordLength > 128)

console.log(passwordLength);



 