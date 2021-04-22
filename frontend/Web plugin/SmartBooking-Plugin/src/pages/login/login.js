import UserController from './UserController.js';

document.getElementById("send-button").addEventListener("click", sendLoginRequest);

async function sendLoginRequest(){
	var username = document.getElementById("usr_email").value;
	var password = document.getElementById("password").value;
	if (!(username === "" || password === "")) {
		var msg = await UserController.login(username, password);
		if (msg.succes){
            showAlert(msg.message, () => window.location.href = "/src/pages/popup.html");
			
		}
		else {
            showAlert(msg.message);
		}
	}
	else if (username === ""){
		showAlert("Please complete your username!");
	}
	else {
		showAlert("Please complete your password!");
	}
}