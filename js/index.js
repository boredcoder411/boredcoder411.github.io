var i = 0;
var txt = "Welcome to boredcoder411's website! To get started, type help";
var speed = 50;

var li;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function addli(text) {
  li = document.createElement('li')
  li.innerHTML = text;
  document.querySelector("ul").appendChild(li);
  cmd = "";
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
    switch (cmd) {
      case "github":
        addli(` > ${cmd}`);
        addli(`Redirected to my github!`);
        window.open("https://github.com/boredcoder411/", '_blank');
        break;
      case "langs":
        addli(` > ${cmd}`);
        addli("List of languages I know and how good I am at them:<br> Javascript (5/5)<br> Rust (4/5)<br> Batch (4/5)<br> Bash (5/5)<br> Python (3/5)<br> Java (3/5)<br> Scratch (5/5)<br> R (1/5)<br> PHP (3/5)<br> HTML (5/5)<br> CSS (4/5)<br> SQL (4/5)<br> zsh (5/5)<br> NIX (5/5)");
        break;
      case "help":
        addli(` > ${cmd}`);
        addli("Type help to get started.");
        break;
      case "clear":
        document.querySelector("ul").innerHTML = "";
        break;
      default:
        if (cmd == "") {
          addli(` > ${cmd}`);
        } else {
          addli(` > ${cmd}`);
          addli(` > Command "${cmd}" not recognized. Type help to get started.`);
        }
        break;
    }
  }
});