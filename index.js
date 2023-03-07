function makeSound(key) {
  switch (key) {
    case "w":
      var wAudio = new Audio("/sounds/tom-1.mp3");
      wAudio.play();
      break;
    case "a":
      var aAudio = new Audio("/sounds/tom-2.mp3");
      aAudio.play();
      break;
    case "s":
      var sAudio = new Audio("/sounds/tom-3.mp3");
      sAudio.play();
      break;
    case "d":
      var dAudio = new Audio("/sounds/tom-4.mp3");
      dAudio.play();
      break;
    case "j":
      var jAudio = new Audio("/sounds/snare.mp3");
      jAudio.play();
      break;
    case "k":
      var kAudio = new Audio("/sounds/kick-bass.mp3");
      kAudio.play();
      break;
    case "l":
      var lAudio = new Audio("/sounds/crash.mp3");
      lAudio.play();
      break;

    default:
      break;
  }
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
