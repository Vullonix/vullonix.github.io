// Creates a "myImage" variable and sets it to the index.html img tag, I think.
let myImage = document.querySelector('img');

// Creates a funtion that reacts when 'myImage' is clicked on.
myImage.onclick = function() {
    // Creates "mySrc" varriable and sets it to src.
    let mySrc = myImage.getAttribute('src');

    // Checks if 'myImage' is equal to image one, if it is then it is changed to image two, if not it is changed to image one.
    if(mySrc === 'images/image-1.jpg') {
        myImage.setAttribute('src', 'images/image-2.JPG');
    } else {
        myImage.setAttribute('src', 'images/image-1.jpg');
    }
 }

 function dontpokeme() {
    alert("Hey!!! Don't poke me,,,");
}

// Checks for clicks anywhere withn the html body, which is the whole page. If click is detected, runs funtion to show an alert telling user not to poke. Don't poke your websites!!!
/*
    commented out from annoyance.
document.querySelector('html').onclick =  function dontpokeme() {
    alert("Hey!!! Don't poke me,,,");
}
// ^ Also defines dontpokeme(); function, so if it was called it would alert the user. As it is only called when a click is detected, it won't run automatically.
*/

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

// Creates a function to set a username
function setUserName() {
    // Asks user to input data, then assigns that data to myName variable.
    let myName = prompt('Please Enter Your Username');

    // Stores the data from the prompt using the Web storage API, assigns the data from myName to the data item of 'name'.
    localStorage.setItem('name', myName);

    // Sets text content of myHeading to 'Mason is cool, ' plus the data entered for myName.
    myHeading.textContent = 'Mason is cool, ' + myName;
}

// Starts an 'if ... else' statment to set name and/or change the heading to a personal message. The if statment uses an negotion opperator which checks to see if the user does not have a name set. If there is no data, the if runs, if ther is data, else runs.
if(!localStorage.getItem('name')) {
   // Calls on a previously defined function in which it asks the user to input their name.
    setUserName();
} else {
    // Assigns inputed data to storedName.
    let storedName = localStorage.getItem('name');

    // Sets myHeading to 'Mason is cool, ' + the data for storedName.
    myHeading.textContent = 'Mason is cool, ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}
