function onSubmit(token) {
    // document.getElementById("contact_form").submit();
    grecaptcha.execute();
    response = grecaptcha.getResponse();
    console.log(response.length);
    if (response.length === 0) {
        document.getElementById("submit").style.pointerEvents = "none";
    } else {
        document.getElementById("submit").style.pointerEvents = "";
        validateForm();
    }
}
// document.getElementById("submit").addEventListener("submit", function () {
//     grecaptcha.execute();
// });

function validateForm() {
    console.log("Inside Form");
    var regExOption =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var firstname = document.forms["contact_form"]["firstname"].value;
    if (firstname == null || firstname == "") {
        document.getElementById("firstname").style.border = "1px solid #c51c0e";
        document.getElementById("firstname").style.color = "#c51c0e";
        return false;
    } else {
        document.getElementById("name").style.border = "1px solid #07ab1e";
        document.getElementById("name").style.color = "#07ab1e";
    }
    // var lastname = document.forms["contact_form"]["lastname"].value;
    // if (lastname == null || lastname == "") {
    //     document.getElementById("lastname").style.border = "1px solid #c51c0e";
    //     document.getElementById("lastname").style.color = "#c51c0e";
    // } else {
    //     document.getElementById("lastname").style.border = "1px solid #07ab1e";
    //     document.getElementById("lastname").style.color = "#07ab1e";
    // }
    var mail = document.forms["contact_form"]["email"].value;
    if (mail == null || !regExOption.test(mail)) {
        document.getElementById("email").style.border = "1px solid #c51c0e";
        document.getElementById("email").style.color = "#c51c0e";
        return false;
    } else {
        document.getElementById("email").style.border = "1px solid #07ab1e";
        document.getElementById("email").style.color = "#07ab1e";
    }

    var contact_number = document.forms["contact_form"]["contact"].value;
    //var regContactNumber = /^\d+$/;
    //console.log("!regContactNumber.test(z): ", !regContactNumber.test(contact_number));
    if (contact_number == null || contact_number.length < 10) {
        document.getElementById("contact").style.border = "1px solid #c51c0e";
        document.getElementById("contact").style.color = "#c51c0e";
        return false;
    } else {
        document.getElementById("contact").style.border = "1px solid #07ab1e";
        document.getElementById("contact").style.color = "#07ab1e";
    }

    var message = document.forms["contact_form"]["query"].value;
    if (message == null || message.length < 10) {
        document.getElementById("query").style.border = "1px solid #c51c0e";
        document.getElementById("query").style.color = "#c51c0e";
        return false;
    } else {
        document.getElementById("query").style.border = "1px solid #07ab1e";
        document.getElementById("query").style.color = "#07ab1e";
    }
    return true;
}
