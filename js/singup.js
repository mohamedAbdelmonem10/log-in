var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var exist = document.getElementById("exist");
var btnSingUP = document.getElementById("btnSingUP");


var signUpArray = [];

if (localStorage.getItem("user") !==null) {
    // retrieve from localStorage
    signUpArray = JSON.parse(localStorage.getItem("user"));
}


function addUser() {
  var user = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };

  signUpArray.push(user);
  localStorage.setItem("user", JSON.stringify(signUpArray));
  clear();
}

// clear from
function clear(){
    signupName.value = null;
    signupEmail.value = null;
    signupPassword.value = null;
}

function isEmpty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

btnSingUP.addEventListener("click", function () {
    signUp();

    
});


function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger">All inputs is required</span>'
        return false
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger">email already exists</span>'
    } else {
        addUser();
        document.getElementById('exist').innerHTML = '<span class="text-success">Success</span>'
    }
};

