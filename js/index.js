$(document).ready(function() {

// declaring variables
var boxes = [];
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

// **** To get a random no. within 0-25 no. of boxes *****

function getRandNum (numberOfBoxes) {
  return Math.floor(Math.random()*numberOfBoxes.length);
};

// ******** makes the lighted box clickable ***************
function makeClickableBox (num) {
  var clickableBoxes = getRandomBoxes(num);

  for(var i = 0; i < clickableBoxes.length; i++) {
    $(clickableBoxes[i])
    .addClass('clickable1')
    .on('click', switchOff);
  };

// ************ adds 1 point per click fixed ********

function switchOff () {

  addScore();
  $(this).off('click', switchOff);
  $('#sound').html("<audio autoplay><source src='http://soundjay.com/button/button-7.mp3' type='audio/mpeg'>");

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
  timerid = setInterval(function() { // lights flickers
    makeClickableBox(5)
  }, 850);
};

//added eventlistener on start button and sound
$('#submit-button').click(startGame);
$('#sound').html("<audio autoplay><source src='http://soundjay.com/button/button-10.mp3' type='audio/mpeg'>");



// *************  Set Timer ********************

var counter = setInterval(timer, 800);
var gameOver = false;
var count = 20;
var restart = 0;


function timer() {
  if (count <= 0) {
    gameOver = true;
    $('#timer').html("Game Over");

    // shut lights off once timer is done counting
    clearInterval(timerid);
    return;

  }
  $("#timer").html((count<10?"0:0":"0:")+count--);
}

// ************  To restart game ****************

var restartButton = $('#restart')

restartButton.on('click', function(){
  location.reload();
});






});

