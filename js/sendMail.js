
function sendMail(form_size) {
    

    emailjs.init("user_nSvDfzE3Zj0etYWKO8d8D");
    emailjs.send("gmail", "moviemuncher", {
  
        "from_name": form_size.name.value,
        "from_email": form_size.email.value,
        "enquiry_form": form_size.enquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            form_size.name.value = "";
            form_size.email.value = "";
            form_size.enquiry.value = "";
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}