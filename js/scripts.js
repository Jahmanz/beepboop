
var beepBoop = function(number) {

  var stringNumber = number.toString();

  if (stringNumber.includes("0")) {
    return true;
  } else if (stringNumber.includes("1")){
    return false;

  } else {
    return alert("I'm sorry I can't do that Dave").hide()
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
      $(".beep").append(" beep");
    } if (result === true) {
      $(".boop").append(" boop");
    }

    $("#result").show();
  });
});
