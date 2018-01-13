

$(document).ready(function () {
  $("form#formTracker").submit(function (event) {
    event.preventDefault();

    if (frontback === "front-end")
      $("#courses").submit();
      $(".answerCSS").show("#CSS");
  });
});
