var reset = true;
var studyTime = "10:00";
var breakTime = "5:00";
var timer;
var study = true;
var running = false;

$(document).ready(function (e) {
  function countDown() {
    var strTime = $(".time").text();
    var splitTime = strTime.split(":");
    var minutes = parseInt(splitTime[0]);
    var seconds = parseInt(splitTime[1]);
    var newTime;
    if (seconds <= 0) {
      if (minutes <= 0) {
        if (study) {
          study = false;
          newTime = breakTime;
          $(".clock").css("background-color", "#EAB551");
          $(".clock").css("color", "#666");
          $(".study-break").text("Break");
        } else {
          study = true;
          newTime = studyTime;
          $(".clock").css("background-color", "#5193EA");
          $(".clock").css("color", "#ccc");
          $(".study-break").text("Study");
        }
      } else {
        minutes -= 1;
        seconds = 59;
        newTime = minutes + ":" + seconds;
      }
    } else {
      seconds -= 1;
      newTime = minutes + ":";
      if (seconds < 10) newTime += "0";
      newTime += seconds;
    }

    $(".time").text(newTime);
  }

  $(".start").click(function () {
    if (reset) {
      reset = false;
      studyTime = $(".study-time").text();
      breakTime = $(".break-time").text();
      $(".time").text(studyTime);
    }
    if (running) {
      running = false;
      $(".start").html('<i class="fa fa-play" aria-hidden="true"></i>');
      clearInterval(timer);
    } else {
      running = true;
      $(".start").html('<i class="fa fa-pause" aria-hidden="true"></i>');
      timer = setInterval(countDown, 1000);
    }
  });

  $(".reset").click(function () {
    reset = true;
    study = true;
    running = false;
    studyTime = $(".study-time").text();
    $(".start").html('<i class="fa fa-play" aria-hidden="true"></i>');
    $(".time").text(studyTime);
    $(".clock").css("background-color", "#5193EA");
    $(".clock").css("color", "#ccc");
    $(".study-break").text("Study");
    clearInterval(timer);
  });

  $(".study-up").click(function () {
    strTime = $(".study-time").text();
    var splitTime = strTime.split(":");
    var minutes = parseInt(splitTime[0]);
    minutes++;
    var newTime = minutes + ":00";
    $(".study-time").text(newTime);
  });

  $(".study-down").click(function () {
    strTime = $(".study-time").text();
    var splitTime = strTime.split(":");
    var minutes = parseInt(splitTime[0]);
    if (minutes > 1) {
      minutes--;
    }
    var newTime = minutes + ":00";
    $(".study-time").text(newTime);
  });

  $(".break-up").click(function () {
    strTime = $(".break-time").text();
    var splitTime = strTime.split(":");
    var minutes = parseInt(splitTime[0]);
    minutes++;
    var newTime = minutes + ":00";
    $(".break-time").text(newTime);
  });

  $(".break-down").click(function () {
    strTime = $(".break-time").text();
    var splitTime = strTime.split(":");
    var minutes = parseInt(splitTime[0]);
    if (minutes > 1) {
      minutes--;
    }
    var newTime = minutes + ":00";
    $(".break-time").text(newTime);
  });
});
