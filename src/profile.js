$(document).ready(function() {
    // Check if user is logged in
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html'; // Redirect to login if not logged in
        return;
    }

    // Fetch user data
    const username = sessionStorage.getItem('currentUser');
    const email = localStorage.getItem('tempEmail'); // Assuming email is stored in localStorage during registration

    // Display user data
    $('#profileUsername').text(username);
    $('#profileEmail').text(email);

    // Logout functionality
    $('#logoutLink').click(function(e) {
        e.preventDefault();
        
        // Clear session storage
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('currentUser');

        // Redirect to login page
        window.location.href = 'login.html';
    });

    // Edit Profile button (placeholder functionality)
    $('#editProfileBtn').click(function() {
        alert('Edit profile functionality to be implemented.');
    });
});