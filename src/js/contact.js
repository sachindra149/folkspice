console.log("Contact Us Page");

function onSubmit(token) {
    // document.getElementById("contact_form").submit();
    grecaptcha.execute();
    response = grecaptcha.getResponse();
    console.log(response.length);
    if (response.length === 0) {
        document.getElementById("submit").style.pointerEvents = "none";
    } else {
        validateForm();
    }
}
// document.getElementById("submit").addEventListener("submit", function () {
//     grecaptcha.execute();
// });

function validateForm() {
    console.log("Inside");
    return false;
    var regExOption =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var x = document.forms["contact_form"]["firstname"].value;
    if (x == null || x == "Name") {
        document.getElementById("name").style.background = "#f77065";
        document.getElementById("name").style.border = "1px solid #c51c0e";
        document.getElementById("name").style.color = "#ffffff";
        return false;
    } else {
        document.getElementById("name").style.background = "#ffffff";
        document.getElementById("name").style.border = "1px solid #D9D9D9";
        document.getElementById("name").style.color = "#8A8C8B";
    }

    var x = document.forms["contact_form"]["email"].value;
    if (x == null || x == "Email" || !regExOption.test(x)) {
        document.getElementById("email").style.background = "#f77065";
        document.getElementById("email").style.border = "1px solid #c51c0e";
        document.getElementById("email").style.color = "#ffffff";
        return false;
    } else {
        document.getElementById("email").style.background = "#ffffff";
        document.getElementById("email").style.border = "1px solid #D9D9D9";
        document.getElementById("email").style.color = "#8A8C8B";
    }

    var x = document.forms["contact_form"]["contact"].value;
    //var regContactNumber = /^\d+$/;
    //console.log("!regContactNumber.test(z): ", !regContactNumber.test(x));
    if (x == null || x == "Contact Number") {
        document.getElementById("contact").style.background = "#f77065";
        document.getElementById("contact").style.border = "1px solid #c51c0e";
        document.getElementById("contact").style.color = "#ffffff";
        return false;
    } else {
        document.getElementById("contact").style.background = "#ffffff";
        document.getElementById("contact").style.border = "1px solid #D9D9D9";
        document.getElementById("contact").style.color = "#8A8C8B";
    }

    var x = document.forms["contact_form"]["query"].value;
    if (x == null || x == "Message") {
        document.getElementById("query").style.background = "#f77065";
        document.getElementById("query").style.border = "1px solid #c51c0e";
        document.getElementById("query").style.color = "#ffffff";
        return false;
    } else {
        document.getElementById("query").style.background = "#ffffff";
        document.getElementById("query").style.border = "1px solid #D9D9D9";
        document.getElementById("query").style.color = "#8A8C8B";
    }
}

function isNumber(input, event) {
    console.log(input);
    var keyCode = input.which ? input.which : input.keyCode;
    console.log(keyCode);
    if (parseInt(keyCode) >= 48 && parseInt(keyCode) <= 57) {
        return true;
    }
    return false;
}
