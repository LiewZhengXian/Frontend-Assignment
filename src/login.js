document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
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
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (username === '') {
            addError('Username is required.');
            return false;
        }

        if (password === '') {
            addError('Password is required.');
            return false;
        }

        return true;
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

        // Here you would send the data to your server for authentication
        // For this example, we'll just show a success message
        alert('Login successful!');
        
        form.reset();
    }
});