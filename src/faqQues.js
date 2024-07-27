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

