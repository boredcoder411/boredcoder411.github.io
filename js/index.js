var i = 0;
var txt = "Welcome to boredcoder411's website! To get started, type help";
var speed = 50;

var li = document.createElement('li');

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
document.getElementById("cmdline").focus();

var cmd = "";

var input = document.getElementById("cmdline");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    cmd = document.getElementById("cmdline").value;
    document.getElementById("cmdline").value = "";
    li.innerHTML = ` > ${cmd}<br>`;
    document.getElementsByTagName("ul").appendChild(li);
  }
});