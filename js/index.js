$(document).ready(function() {

var boxes = [];
var container = $("#container");

function makeBoxes (numOfBoxes) {
  for (var i = 0; i < numOfBoxes; i++) {
    boxes.push(i);

    var box = $('<div></div>');
    box.addClass('btn-responsive');

    container.after(box);
  }
}

console.log(boxes);
makeBoxes(25);
console.log(boxes);












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

