function validateForm() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let message = document.getElementById("message");

    // Simple validation to check if fields are filled
    if (firstname === "" || lastname === "" || email === "" || contact === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
        return false;
    }

    // Check if email is valid using regex
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerText = "Please enter a valid email address!";
        return false;
    }

    message.style.color = "green";
    message.innerText = "Registration complete!";
    return false; // Prevent form submission for demonstration purposes
}
