let noOfDrums = document.querySelectorAll(".drum").length;
for (let i = 0; i < noOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let audio = new Audio("sounds/crash.mp3") 
        audio.play();
    });
}
