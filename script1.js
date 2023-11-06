document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // You can add authentication logic here
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace this with your actual authentication logic
    if (username === "your_username" && password === "your_password") {
        alert("Logged in successfully!");
        // Redirect the user or perform other actions here
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

document.getElementById("subscribe-button").addEventListener("click", function () {
    // You can add subscription handling logic here
    alert("Redirecting to subscription page...");
    // Replace this with your subscription handling logic
});