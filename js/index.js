// Your code goes here
// NAV BAR with stopPropagation and preventDefault
let nav = document.getElementsByClassName("nav-link");

document.querySelector("nav").addEventListener("dblclick", bgToRed)
nav[0].addEventListener("click", function(event) {
    this.style.color = "green";
    event.preventDefault();
});
nav[1].addEventListener("dblclick", function(event) {
    event.stopPropagation();
    this.style.color = "blue";
});
nav[1].addEventListener("click", function(event) {
    event.preventDefault();
});
nav[2].addEventListener("mouseout", function(event) {
    this.style.color = "white";
    event.preventDefault();
});
nav[2].addEventListener("click", function(event) {
    event.preventDefault();
});
nav[3].addEventListener("mouseenter", colorToYellow);
nav[3].addEventListener("click", function(event) {
    event.preventDefault();
});

function colorToYellow() {
    this.style.color = "yellow";
}
function bgToRed() {
    this.style.backgroundColor = "red";
}

// Copyright
document.querySelector('footer').addEventListener('click', bgToRed);

