//I - get User Input - Controller
function getValue(){

    //3a - hide alert message
    document.getElementById("alert").classList.add("invisible");

    //1 - get user string from document
    let userString = document.getElementById("userString").value;
    
    //2 - check for Palindrome
    let returnObj = checkForPalindrome(userString);

    //3b - display message
    displaymessage(returnObj);
}

//II - check for Palindrome - Model
function checkForPalindrome(userString){
    //2a - convert to lowercase
    userString = userString.toLowerCase();
    
    //2b - remove spaces & special characters
    let regex = /[^a-z0-9]/gi; //rejects everything except alphanumerical characters
    userString = userString.replace(regex, "");

    //2c - decrementing loop
    let revString = []; //array
    let returnObj = {}; //object - dynamic --> not typesafe

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        returnObj.msg = "Congratulations, it's a Palindrome."
    }
    else{
        returnObj.msg = "Please, enter a Palindrome."
    }

    //3 - display message
    returnObj.reversed = revString;
    return returnObj;
}

//III - display message - View
function getValue(){
    //1 - get user string from document
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

    //check for Palindrome
    ;
    //display message
    ;
}

