$(document).ready(function() {


setInterval(function(){
  $("zero").style.backgroundColor = getColor();
});

//bind clicks to buttons...
$("#zero").addEventListener('click', function() {
    $("zero").style.backgroundColor = getColor();
}, false);


function getColor(){
  var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
  return hue;
}

});




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

