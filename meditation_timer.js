
var tone = new Audio("bong.mp3");

var meditation = function(){

  var chosenTime;
  var seconds = 0;
  var rawTime = document.getElementById("chosenTime").value;
  seconds = rawTime * 60;

  var preTimer = window.setTimeout(function(){
    tone.play();
    countDown();
    }, 10000);

  var countDown = function(){
    var eachSecond = setInterval(function(){
        seconds -= 1;
        console.log(seconds);
        if (seconds <=0){
          clearInterval(eachSecond);
          tone.play();
        };
    }, 1000);
  };
};

$("#startButton").click(function(){
  meditation();
});
