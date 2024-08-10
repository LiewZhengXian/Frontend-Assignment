document.getElementById("password").addEventListener("blur", function () {
    const password = document.getElementById("password").value;
    const passwordFeedback = document.getElementById("passwordFeedback");

    if (password.length < 8) {
        passwordFeedback.textContent = "Password must be at least 8 characters long";
    } else {
        passwordFeedback.textContent = "";
    }
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const captchaResponse = hcaptcha.getResponse();

    const errorMessages = document.getElementById("errorMessages");
    errorMessages.classList.add("d-none");
    errorMessages.innerHTML = "";

    if (password !== confirmPassword) {
        errorMessages.classList.remove("d-none");
        errorMessages.innerHTML = "Passwords do not match";
        return;
    }

    if (password.length < 8) {
        errorMessages.classList.remove("d-none");
        errorMessages.innerHTML = "Password must be at least 8 characters long";
        return;
    }

    if (!captchaResponse) {
        errorMessages.classList.remove("d-none");
        errorMessages.innerHTML = "Please complete the captcha";
        return;
    }

    const user = {
        email: email,
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});
