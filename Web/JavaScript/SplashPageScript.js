function signIn(form){

	if (form.EmailId.value == "123@123" && form.PasswordId.value == "passwd") {
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
function showPass(form){
	if (form.PasswordId.type == 'password'){
		form.PasswordId.setAttribute('type','text');
	}
	else{
		form.PasswordId.setAttribute('type','password');
	}
}

function signUp(){
	window.location.href = "SignUp.html";
}

function forgotPass(){
	window.location.href = "SignUp.html";
}