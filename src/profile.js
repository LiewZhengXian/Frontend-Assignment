const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
const userDetailsDiv = document.getElementById('userDetails');

if (currentUser) {
    document.getElementById('welcomeMessage').innerHTML = `Hello <strong>${currentUser.username}</strong>, Welcome back!`;
    userDetailsDiv.innerHTML = `
        <p><strong>Username:</strong> ${currentUser.username}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
    `;
    document.getElementById('logoutButton').classList.remove('hidden');
} else {
    document.getElementById('welcomeMessage').innerHTML = `Hello, Please <a href='login.html'>Login</a> First!`;
    userDetailsDiv.innerHTML = ''; // Clear user details if not logged in
}

document.getElementById('logoutButton').addEventListener('click', function() {
    sessionStorage.removeItem('currentUser');
    document.cookie = 'rememberedUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = 'login.html';
});
