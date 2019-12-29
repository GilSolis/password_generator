// Setting the variables
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var numbersChosen = document.getElementById("numbers");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lowerCaseChosen = document.getElementById("lowerCase");
var upperCase = lowerCase.map(function(lower){ return lower.toUpperCase() });
var upperCaseChosen = document.getElementById("upperCase");
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var specialCharactersChosen = document.getElementById("specialChars");

// generate password
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
   
// setting password array
    var password = [];
// setting legth of password variable
    var lengthOfPassword = document.getElementById('slider').value;

    for (var i = 0; i < lengthOfPassword; i++) {
    var randomNumber = Math.floor(Math.random() * choices.length);
    password = password.concat(choices[randomNumber])
    } 
    
    //displays the password
    document.getElementById("display").value = password.join('')
 
});

//displays initial value of 60
document.getElementById("length").innerHTML = "Length: 60"

//displays slider value as it is moved

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
    //checks to see if password has been generated, alerts user to generate password if not
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