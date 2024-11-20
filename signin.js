function validateEmails() {
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;

    if (email1 === email2) {
        alert('Thank you!');
        button.homepage= "Button is enabled!";

    } else {
        alert('The emails do not match. Please try again.');
        button.signin = true;
    }

}

