$(document).ready(function() {

// declaring variables
var boxes = [];

// targetting element
var startPage = $('#start-page');
var container = $("#container");

// set up boxes (numOfBoxes) in divs.
//Accepts only number.
function makeBoxes (numOfBoxes) {
  for (var i = 0; i < numOfBoxes; i++) {
    boxes.push(i);
    // ******  added div boxes to HTML *******
    var box = $('<div class="inactive"><div class="active"></div></div>');

    container.append(box);
  }
};

// activate random boxes depending on the parameter (num)
// accepts only num
function getRandomBoxes (num) {
  var allBoxes = $('.active');
  var randomBoxes = [];

  for(var i = 0; i < num; i++) {
    randNum = getRandNum(allBoxes);
    randomBoxes.push(allBoxes[randNum]);
  }
  return randomBoxes;
}

// to get a random no. within 0-25 no. of boxes
//  accepts only array
function getRandNum (numberOfBoxes) {
  return Math.floor(Math.random()*numberOfBoxes.length);
};

// ********
function makeClickableBox (num) {
  var clickableBoxes = getRandomBoxes(num);

  for(var i = 0; i < clickableBoxes.length; i++) {
    $(clickableBoxes[i])
      .addClass('clickable1')
      .on('click', switchOff);
  };

// ************ add 1 point per click fixed ********

  function switchOff () {

    addScore();
    $(this).off('click', switchOff);
  }


  setTimeout(function(){
    console.log('timeout');
    for (var i = 0; i < clickableBoxes.length; i++) {
       $(clickableBoxes[i]).off('click', switchOff);
    }
    removeAllClickable();
  }, 800);
};

//************* Switch off light box *************
function removeAllClickable () {
  var box1 = $('.clickable1');
  box1.removeClass('clickable1');
  console.log(box1);
}


// ***************  Scoring  *******************
var playerScore = 0;

function addScore () {
  playerScore = playerScore + 1; // instead of i++ i use playerScore.
  console.log(playerScore);
  $('#player-score').html(playerScore);
}

// ****************************************
// created cover page layer for start game
// ****************************************
var startGame = function() {
  console.log('Game Started');
  startPage.addClass('hide');

  makeBoxes(25);
  setInterval(function(){
    makeClickableBox(4)
  }, 1000);
};

//added eventlistener on start button
$('#submit-button').click(startGame);


});

// *******************************************

// Timer added
var counter = setInterval(timer, 1000);
var gameOver = false;
var count = 20;


function timer() {
  if (count <= 0) {
    gameOver = true;
  $('#timer').html("Game Over");
    return;

  }
  $("#timer").html((count<10?"0:0":"0:")+count--);
}

// ********* if statement **********
// create another function ex: gameover




