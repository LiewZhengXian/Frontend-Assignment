// Function to get a specific cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const username = getCookie('username');
const email = getCookie('email');
const userDetailsDiv = document.getElementById('userDetails');

if (username) {
    document.getElementById('welcomeMessage').innerHTML = `Hello <strong>${username}</strong>, Welcome back!`;
    userDetailsDiv.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email ? email : 'Not available'}</p>
    `;
    document.getElementById('logoutButton').classList.remove('hidden');
} else {
    document.getElementById('welcomeMessage').innerHTML = `Hello, Please <a href='login.html'>Login</a> First!`;
    userDetailsDiv.innerHTML = ''; // Clear user details if not logged in
}

document.getElementById('logoutButton').addEventListener('click', function() {
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = 'login.html';
});
