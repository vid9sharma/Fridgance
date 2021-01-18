$(document).ready(function() {
    // the handler for the click event of the submit button
	$("#contactForm").submit(function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email);
			 
			// validate the first name entry
			var firstName = $("#fName").val().trim();
			if (firstName == "") {
				$("#fName").next().text("This field is required.");
				isValid = false;
			} else {
				$("#fName").next().text("");
			}
			$("#fName").val(firstName);
						
			// validate the last name entry
			var lastName = $("#lName").val().trim();
			if (lastName == "") {
				$("#lName").next().text("This field is required.");
				isValid = false;
			} else {
				$("#lName").next().text("");
			}
			$("#lName").val(lastName);
				
			// validate the phone number with a regular expression
			var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
			var phone = $("#phone").val().trim();
			if (phone == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else if ( !phonePattern.test(phone) ) {
				$("#phone").next().text("Use 999-999-9999 format.");
				isValid = false;
			} else {
				$("#phone").next().text("");
			}
            $("#phone").val(phone);
            
            // validate the question entry
			var questions = $("#questions").val().trim();
			if (questions == "") {
				$("#questions").next().text("This field is required.");
				isValid = false;
			} else {
				$("#questions").next().text("");
			}
			$("#questions").val(questions);
						
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submit
});