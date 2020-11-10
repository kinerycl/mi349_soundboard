var button1 = document.getElementById("sound1");
var button2 = document.getElementById("sound2");
var button3 = document.getElementById("sound3");

button1.addEventListener('click', function () {
  var x = document.getElementById("audio1"); 
  x.play();
})

button1.addEventListener('mouseenter', function () {
  var x = document.getElementById("audio1"); 
  x.play();
})

button2.addEventListener('click', function () {
  var x = document.getElementById("audio2"); 
  x.play();
})

button2.addEventListener('mouseenter', function () {
  var x = document.getElementById("audio2"); 
  x.play();
})

button3.addEventListener('click', function () {
  var x = document.getElementById("audio3"); 
  x.play();
})

button3.addEventListener('mouseenter', function () {
  var x = document.getElementById("audio3"); 
  x.play();
})