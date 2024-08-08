$(document).ready(function() {
    // Function to get a cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Function to delete a cookie
    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    // Check if user is logged in
    if (!getCookie('username')) {
        window.location.href = 'login.html'; // Redirect to login if not logged in
        return;
    }

    // Fetch user data
    const username = getCookie('username');
    const email = localStorage.getItem('tempEmail'); // Assuming email is stored in localStorage during registration

    // Display user data
    $('#profileUsername').text(username);
    $('#profileEmail').text(email);

    // Logout functionality
    $('#logoutLink').click(function(e) {
        e.preventDefault();
        
        // Clear cookies
        deleteCookie('username');
        deleteCookie('isLoggedIn');

        // Redirect to login page
        window.location.href = 'login.html';
    });

    // Edit Profile button (placeholder functionality)
    $('#editProfileBtn').click(function() {
        alert('Edit profile functionality to be implemented.');
    });
});
