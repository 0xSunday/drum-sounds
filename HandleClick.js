function HandleClick() {
    if (this.InnerHTML == 'w') {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
}