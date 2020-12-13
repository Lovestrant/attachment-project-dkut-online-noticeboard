
function upload() {
    var image = document.getElementById('files').files[0];
    var post = document.getElementById('textbox').value;
   var imageName = image.name;

    //path where image/files will be stored

    var imageRef = firebase.storage().ref('images/'+imageName);
    //upload image/files to selected storageref
    var uploadTask = imageRef.put(image);
    //getting the state of image upload

    uploadTask.on('state_changed', function(snapshot) {
        //task progress

        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('upload is '+ progress +' done');
        


    }, function(error){
        //handling error
        console.log(error.message);
    }, function(){
        //handling success
       
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadUrl){
        //get  url and upload to the database
        firebase.database().ref('attachmentproject/').push().set({
            text: post,
            imageUrl: downloadUrl
        }, function(error){
            if(error){
                alert('error while uploading');
            }else
            alert('Successfully uploaded');
            //now reset your form

            document.getElementById('post-form').reset();

            getdata();
             }
             );
        });

    });
}

window.onload = function() {
    this.getdata();
}


function getdata() {
    firebase.database().ref('attachmentproject/').once('value').then(function(snapshot) {
        //getting posts div

        var postsdiv = document.getElementById('postsclass');
        //remove all remaining data in that div
        postsdiv.innerHTML = "";
        //getting data from firebase
        var data = snapshot.val();
        console.log(data);
        //displaying data to the  post div

        
        for(let[key,value] of Object.entries(data)){
            postsdiv.innerHTML = "<div class = 'col-sm-4 mt-2 mb-1'>" + 
            "<div calss = 'card'>"+
            "<img src = '"+value.imageUrl+"' style = 'height: 200px; width: 200px;'>"+
            "<div class = 'card-body'<p class = 'card-text'>"+value.text+"</p>"+
            "<button class = 'btn btn-danger' id = '"+key+"' onclick = 'delete_post(this.id)'>Delete</button>"+
            "</div></div></div>"+postsdiv.innerHTML;
        
        }
    }
    );
}
      
        
        

function delete_post(key){
firebase.database().ref('attachmentproject/'+key).remove();
getdata();

}


 
function update() { 
  let element = document.getElementById("myprogressBar");    
  var width = 1; 
  var identity = setInterval(scene, 10); 
  function scene() { 
    if (width >= 100) { 
      clearInterval(identity);
    } else { 
      width++;  
      element.style.width = width + '%';  
    } 
  } 
} 

