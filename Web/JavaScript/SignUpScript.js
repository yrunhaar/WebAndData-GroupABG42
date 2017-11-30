var firstname;
var surname;
var birthday;
var gender;
var email1;
var email2;
var password1;
var password2;
var signupboolean;
var radios;

function newaccount(form){

	firstname = document.getElementById('firstname').value;
	//alert(".....");
	
	surname = document.getElementById('surname').value;
	birthday = document.getElementById('birthday').value;
	email1 = document.getElementById('email1').value;
	email2 = document.getElementById('email2').value;
	password1 = document.getElementById('password1').value;
	password2 = document.getElementById('password2').value;
	signupboolean = true;
	//alert(".....");
	radios = form.Gender.value;
	console.log(firstname);
	console.log(surname);
	console.log(birthday);
	console.log(email1);
	console.log(email2);
	console.log(password1);
	console.log(password2);
	console.log(radios);
	console.log(signupboolean);
	//alert(".....");
	if (firstname == "" || surname == "" || birthday == "" || email1 == "" || email2 == "" || password1 == "" || password2 == "") {
		alert("Please fill in everything");
		signupboolean = false;
	}
	//alert(".....");
	else{
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
		}
			/*else{
				if(password1.length < 6 || password1.length > 20){
					alert("Password must be 6-20 characters long")
					signupboolean = false;
				}
			}*/
	}

	if (signupboolean) {
		alert("you did it!!")
	}
}