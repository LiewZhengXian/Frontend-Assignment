$(document).ready(function() {
    $('#password').on('blur', function() {
        const password = $('#password').val();
        const passwordFeedback = $('#passwordFeedback');

        if (password.length < 8) {
            passwordFeedback.text("Password must be at least 8 characters long");
        } else {
            passwordFeedback.text("");
        }
    });

    $('#registerForm').on('submit', function(event) {
        event.preventDefault();

        const email = $('#email').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const captchaResponse = hcaptcha.getResponse();  // Get the captcha response

        const errorMessages = $('#errorMessages');
        errorMessages.addClass('d-none');
        errorMessages.html('');

        // Validate form inputs
        if (password !== confirmPassword) {
            errorMessages.removeClass('d-none');
            errorMessages.html("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            errorMessages.removeClass('d-none');
            errorMessages.html("Password must be at least 8 characters long");
            return;
        }

        if (!captchaResponse) {
            errorMessages.removeClass('d-none');
            errorMessages.html("Please complete the captcha");
            return;
        }

        const user = {
            email: email,
            username: username,
            password: password
        };

        // Store the user information in localStorage
        localStorage.setItem(username, JSON.stringify(user));

        // Confirmation and redirection
        alert("Registration successful! Please login.");
        window.location.href = "login.html";  // Redirect to the login page
    });
});
