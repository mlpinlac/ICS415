/**
 * Created by michellelei on 9/14/15.
 */

function clickFunction()
{
  document.getElementById("onclickevent").innerHTML = "CLICKED !!";
}

var count = 1;
function setColor(btn, color) {
  var property = document.getElementById(btn);
  if (count == 0) {
    property.style.backgroundColor = "#FFFFFF"
    count = 1;
  }
  else {
    property.style.backgroundColor = "#7FFF00"
    count = 0;
  }
}

function changeColor()
{
  document.getElementById("onclickevent").style.color = "blue";
}


function bigImg(x) {
  var mousecount= 0;
  if (mousecount = 0)
  {
    x.style.height = "32px";
    x.style.width = "32px";
    mousecount++;
  }
  else
  {
    x.style.height = "64px";
    x.style.width = "64px";
    mousecount--;
  }


}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}
