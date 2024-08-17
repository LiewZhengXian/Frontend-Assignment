document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessages = document.getElementById("errorMessages");

    const user = localStorage.getItem(username);

    if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            // Set cookies with expiration date
            const date = new Date();
            // Set cookie to expire in 7 days
            date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000)); 
            const expires = "; expires=" + date.toUTCString();

            document.cookie = `username=${username}${expires}; path=/;`;
            document.cookie = `email=${parsedUser.email}${expires}; path=/;`;
            document.cookie = `isLoggedIn=true${expires}; path=/;`;
            
            // Optionally set a session cookie (could be useful)
            sessionStorage.setItem("currentUser", JSON.stringify(parsedUser));

            window.location.href = "profile.html";
        } else {
            errorMessages.classList.remove("d-none");
            errorMessages.textContent = "Incorrect username or password";
        }
    } else {
        errorMessages.classList.remove("d-none");
        errorMessages.textContent = "Incorrect username or password";
    }
});
