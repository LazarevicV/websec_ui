if (getToken()) {
    window.location.href = "app.html";
}

async function login() {

    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    });
    
    if (response.status === 429) {
        const data = await response.json();
        const totalSeconds = data.remainingSeconds || 0;
        const minutes = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        const timeStr = minutes > 0
            ? `${minutes} min ${secs} sec`
            : `${totalSeconds} sec`;
        error.innerText = `Account temporarily locked. Please try again in ${timeStr}.`;
        return;
    }

    if (!response.ok) {
        error.innerText = "Invalid credentials.";
        return;
    }

    const data = await response.json();
    setToken(data.accessToken);

    window.location.href = "app.html";
}