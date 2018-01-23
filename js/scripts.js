
var beepBoop = function(number) {
  if (number === 0){
    return true;
  }
  if (number === 1){
    return false;
  } else {
    return alert("Im Sorry I can't do that dave")
  }
};

// user interface logic
$(document).ready(function() {
  $("form#beepboopForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var result = beepBoop(number);

    // $(".year").text(number);

    if (!result) {                 // same as writing if (result === false)
      $(".beep").text("beep");
    } if (result === true) {
      $(".boop").text("boop");
    }

    $("#result").show();
  });
});
