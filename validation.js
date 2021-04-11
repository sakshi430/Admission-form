function ValidateSubjects() {
  var checkboxes = document.getElementsByName("sub");
  var numberOfCheckedItems = 0;

//find number of options checked
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked)
      numberOfCheckedItems++;
  }

//limit the checked options to 3

  if (numberOfCheckedItems > 3) {
    document.getElementById("submsg").innerHTML = "You can't select more than 3 subjects!";
    return false;
  } else {
    document.getElementById("submsg").innerHTML = "";
  }
  return true;
}


function validatefname() {
  var name = document.getElementById("fname").value;

//length of name should be more than 1

  if (name.length == 1) {
document.getElementById("fnamemsg").style.color="Red";
    document.getElementById("fnamemsg").innerHTML = "Student's name is invalid";
  } else {
   document.getElementById("fnamemsg").style.color="Green";
 document.getElementById("fnamemsg").innerHTML = "Valid";
  }
}


function validatemobile() {
  var num = document.getElementById("mobile").value;

/*mobile number string should be integer string and length should be 10*/

  if ((isNaN(num)) || (num.length != 10)) {
document.getElementById("mobmsg").style.color="Red";
    document.getElementById("mobmsg").innerHTML = "Student's mobile number is invalid";
  } else {
   document.getElementById("mobmsg").style.color="Green";
  document.getElementById("mobmsg").innerHTML = "Valid";
  }

}

function validateall() {

//check every entry

  var firstname = document.getElementById("fname").value;
  if (name.length == 1) {
    alert("Student's first name is invalid");
  }
  var lastname = document.getElementById("lname").value;
  var sage = document.getElementById("age").value;
  var num = document.getElementById("mobile").value;
  var email= document.getElementById("email").value;
  var num = document.getElementById("mobile").value;

  if ((isNaN(num)) || (num.length != 10)) {
    alert("Student's mobile number is invalid");
  } 
  document.getElementById('donepic').style.visibility="visible";
  document.getElementById("info").innerHTML = "<h2>Submitted Form</h2>Student's name: " + firstname + " " + lastname + "<br/>" + "Age: " + sage+"<br\>"+"Email id: "+email+"<br\>"+"Mobile number: "+num;
}
