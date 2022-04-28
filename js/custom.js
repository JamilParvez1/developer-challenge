$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});


// VALIDATION FUNCTIONS:

function ValidateEmail(inputText) {

  var mailformat = /^[a-zA-Z0-9][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-][a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.myform.email_val.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    //window.history.back();
    preventDefault();
    document.myform.email_val.focus();
    return false;
  }
}


function ValidatePhone(inputText) {
  
  var phoneformat = /^\+?[0-9][0-9]{9,15}$/;
  //var phoneNo = /^\d{10}$/;
  var invalid1 = 1234567890;
  var invalid2 = 0987654321;
  var invalid3 = 9876543210;
  var invalid4 = 0123456789;
  var invalid5 = 0101010101;
  var invalid6 = 1010101010;
  var invalid7 = 000;
  var invalid8 = 111;
  var invalid9 = 222;


  if (inputText.value == invalid1 || inputText.value == invalid2 || inputText.value == invalid3 || inputText.value == invalid4 || inputText.value == invalid5 || inputText.value == invalid6 || inputText.value == invalid7 || inputText.value == invalid8 || inputText.value == invalid9) {
    {
      alert("You have entered an invalid phone pattern!");
      //window.history.back();
      document.myform.phone_val.focus();
      preventDefault();
      return false;
    }
  } else if (inputText.value.match(phoneformat)) {
    alert("Valid phone!");
    document.myform.phone_val.focus();
    return true;
  } else {
    alert("You have entered an invalid phone!");
    //window.history.back();
   document.myform.phone_val.focus();
   preventDefault();
    return false;
  }
}