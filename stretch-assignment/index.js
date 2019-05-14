let blockRed = document.querySelector(".block--red");
let blockBlue = document.querySelector(".block--blue");
let blockGreen = document.querySelector(".block--green");
let blockPink = document.querySelector(".block--pink");
let blockGray = document.querySelector(".block--gray");
let blocks = document.querySelector(".blocks");

blocks.addEventListener("click", function() {
    this.style.display = "flex";
    this.style.width = "100%";
    this.style.height = "100%";
});
blockRed.addEventListener("click", function() {
    this.style.order = "-1";
});
blockBlue.addEventListener("click", function() {
    this.style.order = "-1";
});
blockGreen.addEventListener("click", function() {
    this.style.order = "-1";
});
blockPink.addEventListener("click", function() {
    this.style.order = "-1";
});
blockGray.addEventListener("click", function() {
    this.style.order = "-1";
});
