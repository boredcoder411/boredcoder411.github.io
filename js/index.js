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
  window.scrollTo(0, document.body.scrollHeight);
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
      case "projects":
        addli(` > ${cmd}`);
        addli('My projects:<br><a href="https://replit.com/@boredcoder411/crabsay" target="_blank">Crabsay, a copy of cowsay made with rust (hence the crab)</a><br><a href="https://flightsim.boredcoder411.repl.co" target="_blank">An incomplete flight simulator made with threejs</a><br><a href="https://" target="_blank">A live text-based chat room</a>');
        break;
      case "socials":
        addli(` > ${cmd}`);
        addli(`My socials:<br><a href="https://replit.com/@boredcoder411" target="_blank">replit.com</a><br><a href="https://github.com/boredcoder411" target="_blank">github.com</a><br><a href="https://app.hackthebox.com/profile/534937" target="_blank">hackthebox</a><br>Discord: boredcoder#0589`);
        break;
      case "langs":
        addli(` > ${cmd}`);
        addli("List of languages I know and how good I am at them:<br> Javascript (5/5)<br> Rust (4/5)<br> Batch (4/5)<br> Bash (5/5)<br> Python (3/5)<br> Java (3/5)<br> Scratch (5/5)<br> R (1/5)<br> PHP (3/5)<br> HTML (5/5)<br> CSS (4/5)<br> SQL (4/5)<br> zsh (5/5)<br> NIX (5/5)");
        break;
      case "help":
        addli(` > ${cmd}`);
        addli("A list of commands are:<br>socials: displays my socials<br>langs: lists the languages I know and how good I am at them out of 5<br>clear: clears the screen<br>projects: displays my past and current projects<br>help: displays this menu");
        break;
      case "clear":
        document.querySelector("ul").innerHTML = "";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        break;
      default:
        if (cmd == "") {
          addli(` > ${cmd}`);
        } else {
          addli(` > ${cmd}`);
          addli(` > Command "${cmd}" not recognized. Type help to get started.`);
        }
        break;
      cmd = "";
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
});