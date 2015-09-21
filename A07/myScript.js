/**
 * Created by michellelei on 9/20/15.
 */

function getClasses(elem) {
  var classname = elem.className.split(" ");
  var arraynames = new Array();
  for (var i = 0; i < classname.length; i++) {
    arraynames[i] = "\""+classname[i]+"\"";
  }
  return arraynames;
}

function addClass(elem, className) {
  if (elem.hasAttribute("class")) {
    elem.className += " "+className;
  }
  else {
    // if does not exist.. set it
    elem.setAttribute("class",className);

  }
}

function validateForm()
{
  // these booleans are for checking if there are errors
  // initially FALSE because there are NO ERRORS.. yet

  var myBoolean = false;
  var userBoolean = false;
  var emailBoolean = false;
  var passBoolean = false;
  var confirmBoolean = false;
  var userName = document.forms["myForm"]["username"].value;
  var userEmail = document.forms["myForm"]["email"].value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  var userPassword = document.forms["myForm"]["password"].value;
  var confirmPassword = document.forms["myForm"]["confirm"].value;

  /*
    IF STATEMENTS TO CHECK FOR ANY ERRORS IN FORMS
   */

  // check for username error
  if (userName==null || userName== "") {
    document.forms["myForm"]["name"].style.background = "red";
    myBoolean = true;
    userBoolean = true; //set true to indicate error if values are null
  }

   // checks to see if email if valid so it must be in the form of *@*.*
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
      document.forms["myForm"]["email"].style.background = "red";
      myBoolean = true;
      emailBoolean = true; // indicate error!
    }

      // if password is empty
      if (userPassword==null || userPassword=="") {
       document.forms["myForm"]["password"].style.background = "red";
       myBoolean = true;
        passBoolean = true;
  }

      // if confirm password does not match or is null or is left blank
      if (userPassword !== confirmPassword || confirmPassword==null || confirmPassword==" ") {
        document.forms["myForm"]["confirm"].style.background = "red";
        myBoolean = true;
        confirmBoolean = true;
      }

  /*
    IF STATEMENTS TO CREATE ERROR MESSAGES IN FORM
   */

  if (myBoolean) {
    // create a DIV element to hold ALL child text nodes
    var div=document.createElement("div");
    div.setAttribute("id","div1");
    var heading=document.createElement("h3");
    var node=document.createTextNode("There is an error is some of your inputs. Please see the red highlights.");
    heading.appendChild(node);
    div.appendChild(heading);

    //Print error for user name
    if (userBoolean) {
      var para=document.createElement("p");
      var node=document.createTextNode("User name was left blank.");
      para.appendChild(node);
      div.appendChild(para);
    }
    //Print error for email
    if (emailBoolean) {
      var para=document.createElement("p");
      var node=document.createTextNode("Not a valid email or email was left blank.");
      para.appendChild(node);
      div.appendChild(para);
    }
    //Print error for password
    if (passBoolean) {
      var para=document.createElement("p");
      var node=document.createTextNode("Password left blank.");
      para.appendChild(node);
      div.appendChild(para);
    }
    //Print error for confirm
    if (confirmBoolean) {
      var para=document.createElement("p");
      var node=document.createTextNode("Passwords do not match or left blank");
      para.appendChild(node);
      div.appendChild(para);
    }

    var element=document.getElementsByTagName("form")[0];
    element.parentNode.insertBefore(div,element);
    return false;
  }
}
