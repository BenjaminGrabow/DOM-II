let blockRed = document.querySelector(".block--red");
let blockBlue = document.querySelector(".block--blue");
let blockGreen = document.querySelector(".block--green");
let blockPink = document.querySelector(".block--pink");
let blockGray = document.querySelector(".block--gray");
let blocks = document.querySelector(".blocks");

// block goes to the top if clicked
blocks.addEventListener("click", function() {
    this.style.display = "flex";
    this.style.width = "100%";
    this.style.height = "100%";
});
blockRed.addEventListener("click", function() {
    blockBlue.style.order = "0";
    blockGreen.style.order = "0";
    blockPink.style.order = "0";
    blockGray.style.order = "0";
    this.style.order = "-1";
});
blockBlue.addEventListener("click", function() {
    blockRed.style.order = "0";
    blockGreen.style.order = "0";
    blockPink.style.order = "0";
    blockGray.style.order = "0";
    this.style.order = "-1";
});
blockGreen.addEventListener("click", function() {
    blockRed.style.order = "0";
    blockBlue.style.order = "0";
    blockPink.style.order = "0";
    blockGray.style.order = "0";
    this.style.order = "-1";
});
blockPink.addEventListener("click", function() {
    blockRed.style.order = "0";
    blockBlue.style.order = "0";
    blockGreen.style.order = "0";
    blockGray.style.order = "0"; 
    this.style.order = "-1";
});
blockGray.addEventListener("click", function() {
    blockRed.style.order = "0";
    blockBlue.style.order = "0";
    blockGreen.style.order = "0";
    blockPink.style.order = "0";
    this.style.order = "-1";
});

// block goes to the right if mouse is clicked down
blockRed.addEventListener("mousedown", function() {
    TweenMax.to(".block--red", 3, {x:600, ease: Bounce.easeOut});
});
blockBlue.addEventListener("mousedown", function() {
    TweenMax.to(".block--blue", 3, {x:600, ease: Bounce.easeOut});
});
blockGreen.addEventListener("mousedown", function() {
    TweenMax.to(".block--green", 3, {x:600, ease: Bounce.easeOut});
});
blockPink.addEventListener("mousedown", function() {
    TweenMax.to(".block--pink", 3, {x:600, ease: Bounce.easeOut});
});
blockGray.addEventListener("mousedown", function() {
    TweenMax.to(".block--gray", 3, {x:600, ease: Bounce.easeOut});
});