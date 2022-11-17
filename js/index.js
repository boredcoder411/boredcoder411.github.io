var i = 0;
var txt = "Welcome to boredcoder411's website! To get started, type help";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
})