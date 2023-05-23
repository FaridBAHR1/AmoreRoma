//get User Input - Controller
function getValue(){
    //get user string from document
    let userString = document.getElementById("userString").value;
    
    //check for Palindrome
    let returnObj = checkForPalindrome(userString);

    //display message
    displaymessage(returnObj);
}

//check for Palindrome - Model
function checkForPalindrome(userString){
    //convert to lowercase
    userString = userString.toLowerCase();
    
    //remove spaces & special characters
    let regex = /[^a-z0-9]/gi; //rejects everything except alphanumerical characters
    userString = userString.replace(regex, "");

    //decrementing loop
    let revString = []

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if (revString == userString) {
        
    }

    //display message
    ;
}

//display message - View
function getValue(){
    //get user string from document
    ;
    //check for Palindrome
    ;
    //display message
    ;
}

