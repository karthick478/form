function formValidation() {

	var fullname = document.getElementById('fullname');
	var username = document.getElementById('username');
	var email = document.getElementById('email');
	var state = document.getElementById('state');
	var address = document.getElementById('address');
	var zip = document.getElementById('zip');
	var message = document.getElementById('message');


	if(fullname.value.length == 0){
		document.getElementById('headError').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
		fullname.focus();
		return false;
	}

	if(fullname == "")
		{
			alert('Wrong asdbajbfkj');
		}
}
