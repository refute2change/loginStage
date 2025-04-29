function handleLogin(event) {
    const password = document.getElementById('password').value;
    if (password === "574.5875") {
        window.location.replace("https://stackoverflow.com")
        event.preventDefault();
        return;
    }
    alert("Incorrect password. Please try again.");
    event.preventDefault();
}

function uponOpen(event)
{
    window.location.replace("adjustments.html");
    event.preventDefault();
}