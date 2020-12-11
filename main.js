/*function adminlogin(){

var admin = prompt('Enter the admin password','kemboi')
	if(admin != null){
	document.getElementById('post').style.visibility("visible");
	//hidepostdiv();

}*/
/*
function postvisibility() {
	var a = false;


	if (a) {
		document.getElementById("post").style.visibility("visible");
		a=false;
	}else {
		document.getElementById("post").style.visibility("hidden");
		a=true;
	}
}
*/

function attachfiles() {

	var demo = document.getElementById("demo");
	var button = document.getElementById("button");
	var inputfile = document.getElementById('files');

	button.addEventListener("click", function(){

	var newFile = document.createElement("p");
	newFile.innerHTML = inputfile.value;
	demo.appendChild(newFile);
	inputfile.value = "";
	//newFile.src = URL.createObjectURL(this.files[0]);
	//newFile.style.display = "block";

	var group = document.getElementById('demo');
})
}

/*
document.querySelector('input[type = "files"]').addEventListener("change", function() {
			var inputfile = document.getElementById("files");
			inputfile.src = URL.createObjectURL(this.files[0]);

			inputfile.onload = imgLoaded;
		});
	});*/
	/*

	files.addEventListener("change", function(e) {

  //let newImg = new Image(width, height);

  // Equivalent to above -> 
  let newImg = document.createElement("img");

  newImg.src = e.target.files[0];
  newImg.src = URL.createObjectURL(e.target.files[0]);

  newImg.appendChild(newImg);
});
	

	*/





//admin post button functions


function createtext(){

 	var demo = document.getElementById("demo");
	var textbox = document.getElementById("textbox");
	var button = document.getElementById("button");
	//var display = document.getElementById("display");

	button.addEventListener("click", function()
	{ 
		
	var newMessage = document.createElement("p");
	newMessage.style.zindex = '-1';
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