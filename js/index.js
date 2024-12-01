var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var sumBtn = document.getElementById("sumBtn");
var wrongData = document.getElementById("wrongData");

var signUpArray = JSON.parse(localStorage.getItem("user"));


function isLoginEmpty() {
  if (signinEmail.value == "" || signinPassword.value == "") {
    return false;
  } else {
    return true;
  }
}

sumBtn.addEventListener("click", function () {
  login();
  // console.log("mohamed");
});

function login() {
  if (isLoginEmpty == false) {
    wrongData.innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
    return false;
  }

  var password = signinPassword.value;
  var email = signinEmail.value;

  for (var i = 0; i < signUpArray.length; i++) {
    if (
      signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
      signUpArray[i].password.toLowerCase() == password.toLowerCase()
    ) {
      localStorage.setItem("sessionUsername", signUpArray[i].name);
      window.location = "./welcome page.html";
    } else {
      wrongData.innerHTML =
        '<span class="p-2 text-danger">incorrect email or password</span>';
    }
  }
}
