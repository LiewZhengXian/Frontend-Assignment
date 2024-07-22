// membership.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const googleSignInBtn = document.getElementById('googleSignIn');
    const facebookSignInBtn = document.getElementById('facebookSignIn');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
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
        let isValid = true;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        const hCaptchaResponse = hcaptcha.getResponse();

        if (!/\S+@\S+\.\S+/.test(email)) {
            addError('Please enter a valid email address.');
            isValid = false;
        }

        if (username.length < 3) {
            addError('Username must be at least 3 characters long.');
            isValid = false;
        }

        if (password.length < 8) {
            addError('Password must be at least 8 characters long.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            addError('Passwords do not match.');
            isValid = false;
        }

        if (!agreeTerms) {
            addError('You must agree to the terms of service and privacy policy.');
            isValid = false;
        }

        if (hCaptchaResponse.length === 0) {
            addError('Please complete the hCaptcha.');
            isValid = false;
        }

        return isValid;
    }

    function addError(message) {
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