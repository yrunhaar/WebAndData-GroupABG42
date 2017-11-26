var firstname;
var surname;
var gender;
var email1;
var email2;
var password1;
var password2;

function setgendermale(){
	gender = "male";
}

function setgenderfemale(){
	gender = "female";
}

function signup(){
	firstname = document.getElementById("firstname").value;
	surname = document.getElementById("surname").value;
	email1 = document.getElementById("email1").value;
	email2 = document.getElementById("email2").value;
	password1 = document.getElementById("password1").value;
	password2 = document.getElementById("password2").value;

	if (firstname = null || surname = null || gender = null || email1 = null || email2 = null || password1 = null || password2 = null) {
		alert("Please fill in everything");
	}

	if(email1 != email2){
		alert("The confirmed E-MAIL adress is not equal to your E-MAIL");
	}

	if(password1 != password2){
		alert("The confirmed Password is not equal to Password");
	}
}