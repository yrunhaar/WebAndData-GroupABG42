function signin(){
	var email = document.getElementById("myemail").value;
	var password = document.getElementById("mypassword").value;
	var signinboolean = false;

	if (signinboolean) {
		window.location.href = "Tracker.html";
	}
	else{
		alert("Email/Password combination doesn't exist.");
	}
}

function myFunction() {
    var pass = document.getElementById("mypassword");
    if (pass.type = "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function signup(){
	window.location.href = "SignUp.html";
}

function forgotpass(){
	
}