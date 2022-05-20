function seterror(Id, error) {
  document.getElementById("Id");
  document.getElementsByClassName("error")[0].innerHTML = error;
}

function clearError() {
  errors = document.getElementsByClassName('error');
  for (let item of errors) {
    item.innerHTML = "";
  }

}

function validateform() {
  var returnval = true;
  clearError();

  var name = document.forms["myform"]["name"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }
  if (name.length > 25) {
    seterror("name", "*Length of name is long");
    returnval = false;
  }
  if (name.match("^[a-zA-Z]*$")) {

    returnval = true;
  }
  else {
    seterror("name", "*Name cannot be numeric or specific character");
    returnval = false;
  }

  var phone = document.forms["myform"]["phone"].value;
  if (phone.length > 10) {
    seterror("phone", "*Phone number cannot be more than 10 digits")
    console.log("bike");
    returnval=false;
  }
}

