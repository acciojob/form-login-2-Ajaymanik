let submitB =document.getElementById('submit');
submitB.addEventListener("click",function (event) {
	event.preventDefault();
	let firstName = document.getElementById('First Name').value;
	let lastName = document.getElementById('Last Name').value;
	let phone = document.getElementById('Phone Number').value;
	let email  = document.getElementById('Email ID').value;

	let message = "First Name:"+firstName +" "+
		            "Last Name:"+ lastName + " "+
		            "Phone Number:" + phone +" "+
		             "Email ID:"+ email ;
alert(message);
});