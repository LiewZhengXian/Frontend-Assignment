document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessages = document.getElementById("errorMessages");

    const user = localStorage.getItem(username);

    if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            // Set cookies
            document.cookie = `username=${username}; path=/;`;
            document.cookie = `email=${parsedUser.email}; path=/;`;
            document.cookie = `isLoggedIn=true; path=/;`;
            
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
