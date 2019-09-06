document.getElementById("validateForm")
	.addEventListener("mouseup", function(event){
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		event.preventDefault()
		// alert("validate")
		// name validtion
		if(document.myForm.name.value == "") {
            document.getElementById("errorMessage").innerHTML = "Please provide your name!";
            document.myForm.name.focus();
            return false;
        }
        if(document.myForm.name.value.length < 4){
        	document.getElementById("errorMessage").innerHTML = "Name should be 4 or more characters long!";
        	document.myForm.name.focus();
            return false;
        }
        // email validtion
        if(document.myForm.email.value == "") {
            document.getElementById("errorMessage").innerHTML = "Please provide your Email!";
            document.myForm.email.focus();
            return false;
        }
        if(!document.myForm.email.value.match(mailformat)) {
        	document.getElementById("errorMessage").innerHTML = "Invalid mail format";
            document.myForm.email.focus();
            return false;
        }
        // title validation
        if(document.myForm.title.value == "") {
            document.getElementById("errorMessage").innerHTML = "Please enter a title!";
            document.myForm.title.focus();
            return false;
        }
        // subject validation
        if (document.myForm.subject == "") {
        	document.getElementById("errorMessage").innerHTML = "Please enter a subject!";
        	document.myForm.subject.focus();
        	return false;
        }
        if(document.myForm.subject.value.length < 20) {
        	document.getElementById("errorMessage").innerHTML = "Subject should be 20 or more characters long!";
        	document.myForm.subject.focus();
            return false;
        }
        /*-----------------------------------------------*/
        else{
        	// document.myForm
        	document.myForm.submit.disabled = false;
        	return true;
        }
});
function checking(argument) {

}