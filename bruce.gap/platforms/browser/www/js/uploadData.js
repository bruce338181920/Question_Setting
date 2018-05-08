
//add upload
function startDataUpload() {
	alert ("start data upload");

	var question = document.getElementById("question").value;
	var answera = document.getElementById("answera").value;
	var answerb = document.getElementById("answerb").value;
	var answerc = document.getElementById("answerc").value;
	var answerd = document.getElementById("answerd").value;

	alert(question + " "+ answera + " "+answerb);
	
	var postString = "question="+question +"&answera="+answera+"&answerb="+answerb +"&answerc="+answerc+"&answerd="+answerd;
		
		// now get the select box values
	var Answerbox = document.getElementById("Answerbox").value;
	postString = postString + "&Answerbox="+Answerbox;

	// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;



// now get the radio button values
//	if (document.getElementById("morning").checked) {
 		// postString=postString+"&lecturetime=morning";
//	}
	//if (document.getElementById("afternoon").checked) {
 		// postString=postString+"&lecturetime=afternoon";
	//}

	
	processData(postString);

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30297/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}