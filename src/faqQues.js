$(document).ready(function() {
    $('#health-form').on('submit', function(event) {
        let isValid = true;
        $('#health-form input[required]').each(function() {
            if (!this.value || (this.type === 'radio' && !$('input[name=' + this.name + ']:checked').length)) {
                isValid = false;
                return false; // Break out of the loop
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all required information before submitting.');
        } else {
            event.preventDefault(); // Prevent actual form submission for demo purposes
            alert('Submission complete');
        }
    });
});


document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform form validation here if necessary

    // Show the modal after successful submission
    var submissionModal = new bootstrap.Modal(document.getElementById('submissionModal'), {
        keyboard: false
    });
    submissionModal.show();
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#health-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Assuming form validation passed
        const isValid = form.checkValidity();
        if (isValid) {
            // Show the modal
            const submissionModal = new bootstrap.Modal(document.getElementById('submissionModal'));
            submissionModal.show();

            // Delay for 3 seconds then refresh the page
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Prefill the form if session storage contains data
    if (sessionStorage.getItem("email")) {
        document.getElementById("email").value = sessionStorage.getItem("email");
    }
    if (sessionStorage.getItem("phone")) {
        document.getElementById("phone").value = sessionStorage.getItem("phone");
    }
    if (sessionStorage.getItem("name")) {
        document.getElementById("name").value = sessionStorage.getItem("name");
    }
    if (sessionStorage.getItem("dob")) {
        document.getElementById("dob").value = sessionStorage.getItem("dob");
    }
    if (sessionStorage.getItem("todays-date")) {
        document.getElementById("todays-date").value = sessionStorage.getItem("todays-date");
    }
    if (sessionStorage.getItem("signature")) {
        document.getElementById("signature").value = sessionStorage.getItem("signature");
    }

    // Store data in session storage on input change
    document.getElementById("email").addEventListener("input", function() {
        sessionStorage.setItem("email", this.value);
    });
    document.getElementById("phone").addEventListener("input", function() {
        sessionStorage.setItem("phone", this.value);
    });
    document.getElementById("name").addEventListener("input", function() {
        sessionStorage.setItem("name", this.value);
    });
    document.getElementById("dob").addEventListener("input", function() {
        sessionStorage.setItem("dob", this.value);
    });
    document.getElementById("todays-date").addEventListener("input", function() {
        sessionStorage.setItem("todays-date", this.value);
    });
    document.getElementById("signature").addEventListener("input", function() {
        sessionStorage.setItem("signature", this.value);
    });

    // Store radio button choices
    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.addEventListener("change", function() {
            sessionStorage.setItem(this.name, this.value);
        });

        // Prefill radio buttons
        if (sessionStorage.getItem(radio.name) === radio.value) {
            radio.checked = true;
        }
    });

    // Clear session storage on form submit
    document.getElementById("health-form").addEventListener("submit", function() {
        sessionStorage.clear();
    });
});

