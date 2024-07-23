document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const googleSignInBtn = document.getElementById('googleSignIn');
    const facebookSignInBtn = document.getElementById('facebookSignIn');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submission prevented');
        clearErrors();
        if (validateForm()) {
            submitForm();
        }
    });

    googleSignInBtn.addEventListener('click', function() {
        console.log('Google sign-in clicked');
        // Implement Google sign-in logic
    });

    facebookSignInBtn.addEventListener('click', function() {
        console.log('Facebook sign-in clicked');
        // Implement Facebook sign-in logic
    });

    function validateForm() {
        const email = document.getElementById('email').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;

        console.log(`Email: ${email}, Username: ${username}, Password: ${password}, Confirm Password: ${confirmPassword}, Agree Terms: ${agreeTerms}`);

        if (email === '') {
            addError('Email address is required.');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            addError('Please enter a valid email address.');
            return false;
        }

        if (username === '') {
            addError('Username is required.');
            return false;
        } else if (username.length < 3) {
            addError('Username must be at least 3 characters long.');
            return false;
        }

        if (password === '') {
            addError('Password is required.');
            return false;
        } else if (password.length < 8) {
            addError('Password must be at least 8 characters long.');
            return false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
            addError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return false;
        }

        if (confirmPassword === '') {
            addError('Please confirm your password.');
            return false;
        } else if (password !== confirmPassword) {
            addError('Passwords do not match.');
            return false;
        }

        if (!agreeTerms) {
            addError('You must agree to the terms of service and privacy policy.');
            return false;
        }

        const captchaResponse = hcaptcha.getResponse();
        if (captchaResponse.length === 0) {
            addError('Please complete the captcha.');
            return false;
        }

        return true;
    }

    function addError(message) {
        console.log(`Error: ${message}`);
        errorMessages.classList.remove('d-none');
        const errorElement = document.createElement('p');
        errorElement.textContent = message;
        errorMessages.appendChild(errorElement);
    }

    function clearErrors() {
        errorMessages.innerHTML = '';
        errorMessages.classList.add('d-none');
    }

    function submitForm() {
        const formData = new FormData(form);
        console.log('Form submitted with the following data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Here you would send the data to your server
        // For this example, we'll just show a success message
        alert('Registration successful!');
        
        form.reset();
        hcaptcha.reset();
    }
});
