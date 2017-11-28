var firstname;
var surname;
var birthday;
var gender;
var email1;
var email2;
var password1;
var password2;



function newaccount(){
	firstname = document.getElementById("firstname").value;
	surname = document.getElementById("surname").value;
	birthday = document.getElementById("birthday").value;
	email1 = document.getElementById("email1").value;
	email2 = document.getElementById("email2").value;
	password1 = document.getElementById("password1").value;
	password2 = document.getElementById("password2").value;
	var signupboolean = true
	
	var radios = document.getElementsByName('sex');
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			gender = radios[i];
			break;
		}
	}

	if (firstname.value == undefined || surname.value == undefined || gender.value == undefined || email1.value == undefined || email2.value == undefined || password1.value == undefined || password2.value == undefined) {
		alert("Please fill in everything");
		signupboolean = false;
	}else{
		if(email1 != email2){
		alert("The confirmed E-MAIL adress is not equal to your E-MAIL");
		signupboolean = false;
	/*	}else{
			if (true) {
				EMAIL NOT VALID OR USED
				signupboolean = false;
			}*/
		}

		if(password1 != password2){
		alert("The confirmed Password is not equal to Password");
		signupboolean = false;
		}else{
			if(password1.length < 6 || password1.length > 20){
				alert("Password must be 6-20 characters long")
				signupboolean = false;
			}
		}
	}

	if (signupboolean) {

	}
}