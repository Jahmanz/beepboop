
// var add = function("option value") {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };

$(document).ready(function () {
  $("form#formOne").submit(function (event) {
    event.preventDefault();

    var frontback = $("#frontback").val("front-end, back-end");
    var bigsmall = $("#bigsmall").val("big, small");
    var software = $("#software").val("Business, End-User");
    var newold = $("#newold").val("New, Old");
    var broad = $("#broad").val("Yes, No");

    if (frontback === "front-end")
      $("#courses").submit();
      $(".answerRuby").show("#Ruby");

    // } else if ((frontback === "front-end") && (bigsmall === "small") && software === "ENd-User") && (newold === "new") && (broad === "No")) {
    //   $("#clickable").click();
    //   $(".answerRuby").show("#Ruby");
    //
    //
    // } else if ((jobs === "Server Side Development") && (companies === "Enterprise (server-side)") && (experience === "PHP") && (interests === "Work on servers used by big companies") && (mood === "The name of the company/agency you work for")) {
    //   $("#clickable").click();
    //   $(".answer4").show("#php");
    //
    // } else if ((jobs === "Web Designer") && (companies === "Design Companies or start-ups (make gorgeous and interactive webpages/apps)") && (experience === "CSS") && (interests === "Freelance making websites/app") && (mood === "Liking the language you are working with")) {
    //   $("#clickable").click();
    //   $(".answer3").show("#ruby");
    //
    // } else {
    //   alert("You must pick all options to get your result!");
    // }
  });
});







// $(document).ready(function() {
//   $("#frontback").submit(function(event) {
//     $("#frontback").show("#CSS");
//       var frontbackInput = $("input#frontback")
//       // if (frontback === "frontend") {
//         $(#CSS).show()
//       }
//   });
// });

// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul#user").prepend("<li>Hello!</li>");
//     $("ul#webpage").prepend("<li>Why hello there!</li>");
//   });





// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     var age = parseInt($("input#age").val());
//     var gender = $("select#gender").val();
// //
//     if (age) {
//       var quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26) {
//         quote += 50;
//       }
//
//       $("#rate").empty().append(quote);
//       $("#quote").show();
//     } else {
//       alert('Please enter your age.');
//     }
//
//     event.preventDefault();
//   });
// });

// $(document).ready(function() {
//     $("form-control#frontback").submit(function() {
//       if (frontback === "frontend") {
//           $("#CSS").show();
//           $("#Csharp").hide();
//           $("#Java").hide();
//           $("#PHP").hide();
//           $("#Ruby").hide();
//
//   // if (frontback === "CSS") {
//   //   $('#CSS').show();
//   //   $("#Csharp").hide();
//   //   $("#Java").hide();
//   //   $("#PHP").hide();
//   //   $("#Ruby").hide();
//   //
//   // if (frontback === "CSS") {
//   //   $('#CSS').show();
//   //   $("#Csharp").hide();
//   //   $("#Java").hide();
//   //   $("#PHP").hide();
//   //   $("#Ruby").hide();
//   //
//   // if (frontback === "CSS") {
//   //   $('#CSS').show();
//   //   $("#Csharp").hide();
//   //   $("#Java").hide();
//   //   $("#PHP").hide();
//   //   $("#Ruby").hide();
//   //
//   // if (frontback === "CSS") {
//   //   $('#CSS').show();
//   //   $("#Csharp").hide();
//   //   $("#Java").hide();
//   //   $("#PHP").hide();
//   //   $("#Ruby").hide();
//   // }
//   // if (animal === "cats") {
//   //   $('#cats').show();
//   // }
//   // if (animal === "honeybadger") {
//   //   $('#honeybadger').show();
//   // }
//
// });
