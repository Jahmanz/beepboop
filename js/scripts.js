
var beepBoop = function(number) {

  var stringNumber = number.toString();

  if (stringNumber.includes("0")) {
    return false;
  } else if (stringNumber.includes("1")){
    return true;

  } else {
    return alert("I'm sorry I can't do that puny human").hide()
  }
};


$(document).ready(function() {
  $("form#beepboopForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var result = beepBoop(number);



    if (!result) {
      $(".beep").append(" beep");
    } if (result === true) {
      $(".boop").append(" boop");
    }

    $("#result").show();
  });
});
