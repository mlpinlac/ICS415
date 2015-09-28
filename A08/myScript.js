/**
 * Created by michellelei on 9/26/15.
 */

$(document).ready(function () {

  // initially hidden
  $('dd').hide();

  //on click, show or hide the answers
  $("dt").click(function() {
    $(this).next().slideToggle();

    //Check if symbol is + or - and change it
    if ($(this).children(".symbol").text() == " + ") {
      $(this).children(".symbol").text(" - ");
    }
    else {
      $(this).children(".symbol").text(" + ");
    }
  });
});

$(document).ready(function(){
  $("#load").click(function(event) {
    $('#loadcontent').load('partone.html');
    var x = document.links.length;
    document.getElementById("demo").innerHTML = x;
  });
});

