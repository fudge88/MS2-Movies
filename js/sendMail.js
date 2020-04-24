// this send the mail to the Movie Muncher inbox function
function sendMail(form_size) {

//email js user code
    emailjs.init("user_nSvDfzE3Zj0etYWKO8d8D");
//email js email account type and template name
    emailjs.send("gmail", "moviemuncher", {
//the values linking html and js
        "from_name": form_size.name.value,
        "from_email": form_size.email.value,
        "enquiry_form": form_size.enquiry.value
    }) 
    
    //promise
    .then(
        //if successful print success on console.log
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById("open").click();
            form_size.name.value = "";
            form_size.email.value = "";
            form_size.enquiry.value = "";
        }
    );
    return false;
}