"use strict";

const numberOfSounds = document.querySelectorAll(".sounds").length;

for (let i = 0; i < numberOfSounds; i++) {
  document
    .querySelectorAll(".sounds")
    [i].addEventListener("click", function () {
      let buttonSound = this.innerText;
      audioPlay(buttonSound);
    });
}

document.addEventListener("keydown", function (e) {
  audioPlay(e.key);
});

function audioPlay(key) {
  switch (key) {
    case "W":
      let bee = new Audio("../sound/bee-flying.wav");
      bee.play();
      break;
    case "D":
      let bird = new Audio("../sound/bird-chirp.wav");
      bird.play();
      break;
    case "T":
      let cow = new Audio("../sound/cow.wav");
      cow.play();
      break;
    case "G":
      let cricket = new Audio("../sound/cricket.wav");
      cricket.play();
      break;
    case "J":
      let dog = new Audio("../sound/dog-barking.wav");
      dog.play();
      break;
    case "I":
      let kitty = new Audio("../sound/kitty-meow.wav");
      kitty.play();
      break;
    case "K":
      let rooster = new Audio("../sound/rooster.wav");
      rooster.play();
      break;
    case "U":
      let sheep = new Audio("../sound/sheep.wav");
      sheep.play();
      break;
    case "R":
      let thunderstorm = new Audio("../sound/thunderstorm.wav");
      thunderstorm.play();
      break;
    default:
      console.log(key);
  }
}

function togglePlay() {}
