/**
 * Created by michellelei on 9/16/15.
 */

function goBack()
{
  window.history.back();
}

function displayData()
{
  var username = document.getElementById("username").value;
  var addr = document.getElementById("address").value;
  var phonenum = document.getElementById("phone").value;

  document.writeln("Username: " + username);
  document.writeln("Address: " + addr);
  document.writeln("Phone number: " + phonenum);
  localStorage.setItem("username", username);

  return true;

}
