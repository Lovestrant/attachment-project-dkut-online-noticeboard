/*function attachfiles(event) {

	var demo = document.getElementById("demo");
	var button = document.getElementById("button");
	var inputfile = document.getElementById('files');

	button.addEventListener("click", function(){

	var newFile = document.createElement("p");
	newFile.innerHTML = inputfile.value;
	demo.src = URL.createObjectURL(event.target.files[0]);
	demo.appendChild(newFile);
	inputfile.value = "";

	var group = document.getElementById('demo');
})
}


function attachfiles(event) {
	var button = document.getElementById("button");

	button.addEventListener("click", function(){
	var image = document.getElementById('files').value;
	image.src = URL.createObjectURL(event.target.files[0]);
	var demo = document.getElementById("demo");
	var newFile = document.createElement("p");
	newFile.setAttribute("img", "");
	newFile.getAttribute("img", image).style.height = 'auto';
	newFile.appendChild(image);
	newFile.appendChild(demo);
	image.value = "";
	var group = document.getElementById('demo');
	})

}

*/

var loadFile = function(event) {
/**	var demo = document.getElementById("demo");
	demo.createElement("p");
	demo.setAttribute("img", "");
	demo.getAttribute("img").setAttribute("id", "output"); */
	
	var image = document.getElementById("output");
	image.src = URL.createObjectURL(event.target.files[0]);
	image.value = "";

};


function createtext(){

	var demo = document.getElementById("demo");
	var textbox = document.getElementById("textbox");
	var button = document.getElementById("button");
	//var display = document.getElementById("display");

	button.addEventListener("click", function()
	{ 
		
	var newMessage = document.createElement('div');
	newMessage.style.margin = '80px';
	newMessage.innerHTML = textbox.value;
	demo.appendChild(newMessage);
	textbox.value = "";
	var group = document.getElementById('demo');
	
})

 }

 function adminrole() {

 	createtext();
 	attachfiles();
 	
 }