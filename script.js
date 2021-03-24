var audio1 = new Audio('sounds/crash.mp3');
var audio2 = new Audio('sounds/kick-bass.mp3');
var audio3 = new Audio('sounds/snare.mp3');
var audio4 = new Audio('sounds/tom-1.mp3');
var audio5 = new Audio('sounds/tom-2.mp3');
var audio6 = new Audio('sounds/tom-3.mp3');
var audio7 = new Audio('sounds/tom-4.mp3');

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var that = this.innerHTML;
        makesound(that);
        buttonAnimation(that);
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            audio4.play();
            break;
        case "a":
            audio5.play();
            break;
        case "s":
            audio6.play();
            break;
        case "d":
            audio7.play();
            break;
        case "j":
            audio2.play();
            break;
        case "k":
            audio3.play();
            break;
        case "l":
            audio1.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("opac");
    setTimeout(function () {
        activeKey.classList.remove("opac");
    }, 100);

}