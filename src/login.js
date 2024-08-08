document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessages = document.getElementById("errorMessages");

    const user = localStorage.getItem(username);

    if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
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

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Clear the 'rememberedUser' cookie
deleteCookie('rememberedUser');
