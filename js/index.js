$(document).ready(function() {

var boxes = [];
var container = $("#container");

// make boxes depending on the (numOfBoxes).
//Accepts only number.
function makeBoxes (numOfBoxes) {
  for (var i = 0; i < numOfBoxes; i++) {
    boxes.push(i);

    var box = $('<div class="btn-responsive"><div class="active"></div></div>');

    container.after(box);
  }
}

// get random boxes depending on the parameter (num)
// accepts only numbers.
function getRandomBoxes (num) {
  var allBoxes = $('.active');
  var randomBoxes = [];

  for(var i = 0; i < num; i++) {
    randNum = getRandNum(allBoxes);

    randomBoxes.push(allBoxes[randNum]);
  }

  return randomBoxes;
}

// to get a random no. withinn 0-total no. of boxes
//  accepts only array
function getRandNum (numberOfBoxes) {
  return Math.floor(Math.random()*numberOfBoxes.length);
};

function makeClickableBox (num) {
  var clickableBoxes = getRandomBoxes(num);

  for(var i = 0; i < clickableBoxes.length; i++) {
    $(clickableBoxes[i]).addClass('clickable1');
  };
   // setTimeout(function (){
   //  console.log('timeout');
   //  removeClickable();
   // }, 450);
}

//to switchoff light box
function removeClickable () {
  var box1 = $('.clickable1');
  box1.removeClass('clickable1');
}

makeBoxes(25);
// setInterval(function(){
//   makeClickableBox(10)
// }, 500)
makeClickableBox(10);


});

