// click press
var numberOfbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", HandleClick);
}

function HandleClick() {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    addAnimation(buttoninnerhtml);
}

// key board botton press

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    addAnimation(event.key);

})

function makesound(key) {
    switch (key) {

        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(buttoninnerhtml);
            break;
    }

}

function addAnimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed")

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}