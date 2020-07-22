blue = new Audio("sounds/blue.mp3");
green = new Audio("sounds/green.mp3");
red = new Audio("sounds/red.mp3");
wrong = new Audio("sounds/wrong.mp3");
yellow = new Audio("sounds/yellow.mp3");

var levelArray = [];
var levelNumber = 0;
var sequenceCounter = 0;
var i = 0; // loopThrouSequence-Index

alert("Each round a new color is added to the sequence. To finish the level, the complete sequence must be played each time. The game is finished as soon as a color is named incorrectly. Let's go!");

// --------- document eventListener ---------
$(document).keydown(function() {
  nextLevel();
  $(document).unbind("keydown");
});

// --------- button eventListeners ---------
$("#green").click(function() {

  if (levelArray[sequenceCounter] === 0) {
    green.play();
    animateButton("green");
    sequenceCounter += 1;

    if (sequenceCounter === levelArray.length) {
      nextLevel();
    }

  } else {
    wrong.play();
    animateButton("green");
    gameOver();
  }

});

$("#red").click(function() {
  if (levelArray[sequenceCounter] === 1) {
    red.play();
    animateButton("red");
    sequenceCounter += 1;

    if (sequenceCounter === levelArray.length) {
      nextLevel();
    }

  } else {
    wrong.play();
    animateButton("red");
    gameOver();
  }
});

$("#yellow").click(function() {
  if (levelArray[sequenceCounter] === 2) {
    yellow.play();
    animateButton("yellow");
    sequenceCounter += 1;

    if (sequenceCounter === levelArray.length) {
      nextLevel();
    }

  } else {
    wrong.play();
    animateButton("yellow");
    gameOver();
  }
});

$("#blue").click(function() {
  if (levelArray[sequenceCounter] === 3) {
    blue.play();
    animateButton("blue");
    sequenceCounter += 1;

    if (sequenceCounter === levelArray.length) {
      nextLevel();
    }

  } else {
    wrong.play();
    animateButton("blue");
    gameOver();
  }

});

// --------- functions ---------
function animateButton(color) {

  // add CSS class for button down
  $("#" + color).addClass("pressed");

  // remove CSS class for button down
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

  //reset loop-index and show actual sequence with loop
  // i = 0
  // loopThrouSequence();

  setTimeout(function(){
    animateActualSequence(nextButtonNumber);
  }, 1000);


  // update h1
  $("#level-title").text("Level " + levelNumber);

  // reset sequenceCounter
  sequenceCounter = 0;

}

function gameOver() {
  // add CSS class for button down
  $("body").addClass("game-over");

  // remove CSS class for button down
  setTimeout(function() {
    $("body").addClass("game-over");
  }, 50);

  // reset level
  levelNumber = 0;
  levelArray = [];
  sequenceCounter = 0;

  // update h1
  $("#level-title").text("Game Over, Press Any Key to Restart");

  // add keydown eventListener again to document
  $(document).bind("keydown", function() {
    $("body").removeClass("game-over");
    nextLevel();
    $(document).unbind("keydown");
  });
}

function animateActualSequence(buttonNumber) {

  switch (buttonNumber) {
    case 0:
      console.log("green button");
      green.play();
      animateButton("green");
      break;
    case 1:
      console.log("red button");
      red.play();
      animateButton("red");
      break;
    case 2:
      console.log("yellow button");
      yellow.play();
      animateButton("yellow");
      break;
    case 3:
      console.log("blue button");
      blue.play();
      animateButton("blue");
      break;
    default:
      console.log("something went wrong in animateActualSequence()");
      break;
  }
}

// function loopThrouSequence() {
//
//   setTimeout(function() {
//     animateActualSequence(levelArray[i]);
//     i++;
//     if (i < levelArray.length) {
//       loopThrouSequence();
//     }
//   }, 500)
// }
