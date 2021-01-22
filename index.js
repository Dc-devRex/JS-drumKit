// Detecting button press on screen

var numberOfDrumButtons = document.querySelectorAll(".drum").length; // Finds the length of the elements with the class name of .drum

for (var i = 0; i < numberOfDrumButtons; i++) {  // counts/iterates through all of the elements with the class .drum

    document.querySelectorAll(".drum")[i].addEventListener("click", function()  {    // At each count of the .drum elements, an event listener is added. This gets every button ready for a click.
       
        var buttonInnerHTML = this.innerHTML;  // Creates a new variable that stores, a reference to the innerHTML found within each button object using (this)
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting keyboard press

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {

    switch (key) {  //  variable is used here in switch case (makes it easier to read by adding variable here.)
        case 'w': 
            let tom1 = new Audio('sounds/crash.mp3'); // creates a new HTML audio element, which looks for the file location to see if it exists
            tom1.play(); // If and when the audio file is found, is will play it in this 'w' object
        break;

        case 'a':
            let tom2 = new Audio('sounds/kick-bass.mp3');
            tom2.play();
        break;

        case 's':
            let tom3 = new Audio('sounds/snare.mp3');
            tom3.play();
        break;

        case 'd':
            let tom4 = new Audio('sounds/tom-1.mp3');
            tom4.play();
        break;

        case 'j':
            let tom5 = new Audio('sounds/tom-2.mp3');
            tom5.play();
        break;

        case 'k':
            let tom6 = new Audio('sounds/tom-3.mp3');
            tom6.play();
        break;

        case 'l':
            let tom7 = new Audio('sounds/tom-4.mp3');
            tom7.play();
        break;
            
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
