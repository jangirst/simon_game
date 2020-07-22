blue = new Audio("sounds/blue.mp3");
green = new Audio("sounds/green.mp3");
red = new Audio("sounds/red.mp3");
wrong = new Audio("sounds/wrong.mp3");
yellow = new Audio("sounds/yellow.mp3");

var levelArray = [];
var levelNumber = 0;
var i = 0; // loopThrouSequence-Index

// --------- document eventListener ---------
$(document).keydown(function() {
  nextLevel();
  $(document).unbind("keydown");
});

$(document).click(function() {
  nextLevel();
});

// --------- button eventListeners ---------
$("#blue").click(function() {
  blue.play();
  pressButton("blue");
});

$("#green").click(function() {
  green.play();
  pressButton("green");
});

$("#red").click(function() {
  red.play();
  pressButton("red");
});

$("#yellow").click(function() {
  yellow.play();
  pressButton("yellow");
});


// --------- functions ---------
function pressButton(color) {
  $("#" + color).addClass("pressed");

  setTimeout(function() {
    $("#" + color).removeClass("pressed");
  }, 100);
}

function nextLevel() {
  // increase level
  levelNumber += 1;

  // add a button number to levelArray
  var nextButtonNumber = Math.floor(Math.random() * Math.floor(4));

  // add new buttonNumber to sequence
  levelArray.push(nextButtonNumber);

  i = 0
  loopThrouSequence();

  $("#level-title").text("Level " + levelNumber);

  if (levelNumber === 10) {
    gameOver();
    $(document).bind("keydown", function() {
      $("#level-title").text("Level 1");
      $(document).unbind("keydown");
    });
  }
}

function gameOver() {
  // reset level
  levelNumber = 0;

  // update h1
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function animateActualSequence(buttonNumber) {

  // just for testing
  console.log(buttonNumber);

  switch (buttonNumber) {
    case 0:
      green.play();
      pressButton("green");
      break;
    case 1:
      red.play();
      pressButton("red");
      break;
    case 2:
      yellow.play();
      pressButton("yellow");
      break;
    case 3:
      blue.play();
      pressButton("blue");
      break;
    default:
      console.log("something went wrong in animateActualSequence()");
      break;
  }
}

function loopThrouSequence() {
  setTimeout(function() {
    animateActualSequence(levelArray[i]);
    i++;
    if (i < levelArray.length) {
      loopThrouSequence();
    }
  }, 500)
}
