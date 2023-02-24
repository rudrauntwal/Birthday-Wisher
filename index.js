var birth = prompt("Happy Birthday Dear... please Enter Your Name");
// var birth = "Rudresh";

birth = birth.toUpperCase();

var j = 1;

var interval = setInterval(function () {
  if (j === birth.length + 1) {
    j = 1;
  }
  $("." + j)
    .fadeOut(timerOut)
    .fadeIn(timerIn);
  j++;
}, 300);

setTimeout(function () {
  clearInterval(interval);
  clearInterval(headingInterval);
}, 15000);

var i = 1;
var first = setInterval(function () {
  if (i === birth.length) {
    clearInterval(first);
  }
  $(".container-fluid").append(
    '<h1 class="' + i + ' letter-decoration">' + birth.charAt(i - 1) + "</h1>"
  );
  i++;
}, 100);

var headingInterval = setInterval(function () {
  $("h2").fadeIn(200).fadeOut(200);
}, 100);

var hitMe = $(".btn");
hitMe.on("click", function () {
  hitMe.hide();
  hitMe.after(
    ' <audio class="sound" controls autoplay loop><source src="../music/birthdaySong.mp3" /></audio>'
  );
});

$(".btn").on("mouseenter mouseleave", function () {
  $(".btn").toggleClass("btn-shadow");
});

function blinker() {
  $(".btn").fadeIn(1000);
  $(".btn").fadeOut(1000);
}
intervalHandler = setInterval(blinker, 1000);

$(".btn").mouseover(function () {
  clearInterval(intervalHandler);
  intervalHandler = undefined;
  $(".btn").fadeIn(1000);
});

var timerIn = 300;
var timerOut = 500;
