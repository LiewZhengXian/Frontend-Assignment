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

border-title {
    border: 2px solid #000; /* Adjust the border color and width as needed */
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white background */
    display: inline-block;
    margin-bottom: 20px; /* Adjust the margin as needed */
}

