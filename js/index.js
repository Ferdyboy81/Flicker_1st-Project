$(document).ready(function() {

var boxes = [];
var container = $("#container");

// make boxes depending on the (numOfBoxes).
//Accepts only number.
function makeBoxes (numOfBoxes) {
  for (var i = 0; i < numOfBoxes; i++) {
    boxes.push(i);

    var box = $('<div></div>');
    box.addClass('btn-responsive');

    container.after(box);
  }
}

// function getBoxes () {
//   var allBoxes = $('.btn-responsive');
//   return allBoxes;
// };

// get random boxes depending on the parameter (num)
// accepts only numbers.
function getRandomBoxes (num) {
  var allBoxes = $('.btn-responsive');
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
    // clickableBoxes[i].addClass('clickable');
    console.log(clickableBoxes);
  }

}






makeBoxes(25);
makeClickableBox(10);












// var hit = 0;
// var gameOver = false;




// setInterval(function(){
//   $("zero").style.backgroundColor = getColor();
// });s

// //bind clicks to buttons...
// $("#zero").addEventListener('click', function() {
//     $("zero").style.backgroundColor = getColor();
// }, false);


// function getColor(){
//   var hue = 'rgb('
//             + (Math.floor(Math.random() * 256)) + ','
//             + (Math.floor(Math.random() * 256)) + ','
//             + (Math.floor(Math.random() * 256)) + ')';
//   return hue;
// }

// });




// flashing text
// $("#flashingtext").fadeTo('slow, 0.5').fadeTo('slow', 1.0)






// play random colors
var test = function() {
  var randNum = Math.floor(Math.random()*20)
  console.log($(".btn-responsive")[randNum])
}

function test2() {
  var randNum = Math.floor(Math.random()*20)
  console.log($(".btn-responsive")[randNum])
}

});

