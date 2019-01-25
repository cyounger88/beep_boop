$(document).ready(function() {
    $("form#input-form").submit(function(event) {
      event.preventDefault();
      var userNumber = parseInt($("input#inputNumber").val());
      var output = robotTalk(userNumber);

      $(".userNumber").text(output)

      var robotTalk = function() {
        if (!output) {
          $(".not").text("not");
        } else {
          $(".not").text("")
        }
        $("#output").show();
    
      }

    });
  });
  

