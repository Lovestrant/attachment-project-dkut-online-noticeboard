
function createtext(){

	var postsclass3 = document.getElementById("postsclass3");
	var textbox = document.getElementById("textbox");
	var button = document.getElementById("button3");
	//var display = document.getElementById("display");

	button.addEventListener("click", function()
	{ 
		
	var newMessage = document.createElement('div');
	newMessage.style.margin = '80px';
	newMessage.innerHTML = textbox.value;
	postsclass3.appendChild(newMessage);
	textbox.value = "";
	var group = document.getElementById('postsclass3');
	
});
}
