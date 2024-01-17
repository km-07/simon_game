let level = 1;
let levelInput = [];
let userOutput = [];
let elementCheck = 0;
// let gameOn = false;

$(document).keypress(function () {
  $("h1").text("Level " + level);
  $("body").removeClass("red");
  // gameOn = true;
  playLevel();
});

function playLevel() {
  let randomNumber = Math.floor(Math.random() * 4);
  levelInput.push(randomNumber);
  switch (randomNumber) {
    case 0:
      gameEffects("green");
      break;
    case 1:
      gameEffects("red");
      break;
    case 2:
      gameEffects("yellow");
      break;
    case 3:
      gameEffects("blue");
      break;
    default:
      console.log("Check your game.js for errors and mistakes.");
      break;
  }
}

function gameEffects(color) {
  $("." + color).addClass("pressed");
  setTimeout(function () {
    $("." + color).removeClass("pressed");
  }, 100);
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}

// if (gameOn === true) {
  $(".btn").click(function (event) {
    gameEffects(event.target.id);
    switch (event.target.id) {
      case "green":
        userOutput.push(0);
        break;
      case "red":
        userOutput.push(1);
        break;
      case "yellow":
        userOutput.push(2);
        break;
      case "blue":
        userOutput.push(3);
        break;
      default:
        console.log("Check there is some mistake. Unexpected Behaviour.");
        break;
    }
    if (levelInput.length === userOutput.length) {
      checkAnswer(userOutput, levelInput);
    } else {
      console.log(userOutput);
      console.log(levelInput);

      if (userOutput[elementCheck] != levelInput[elementCheck]) {
        checkAnswer(userOutput, levelInput);
      }

      elementCheck++;
    }
  });
// }

function checkAnswer(array1, array2) {
  console.log(array1);
  console.log(array2);
  if (array1.toString() === array2.toString()) {
    level++;
    userOutput = [];
    elementCheck = 0;
    $("h1").text("Level " + level);
    setTimeout(function () {
      playLevel();
    }, 700);
  } else {
    $("h1").text("Game Over. Press any key to restart.");
    $("body").addClass("red");
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    level = 1;
    userOutput = [];
    levelInput = [];
    elementCheck = 0;
    // gameOn = false;
  }
}


//Whenever I include the commented code. It completely stops recognizing the button clicks.