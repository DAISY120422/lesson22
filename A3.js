function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");

    let message = "";
    if (email === "") {
        message = "Enter an Email.";
        msgbox.style.color = "red";
    }
    else if (pass === "") {
        message = "Enter a Password.";
        msgbox.style.color = "red";
    }
    else if (age === "") {
        message = "Enter an Age.";
        msgbox.style.color = "red";
    }
    else {
        message = "Login Successful";
        msgbox.style.color = "green";
    }
    msgbox.innerText = message;
}