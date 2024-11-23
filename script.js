const API_URL = "https://api.pump.fun/tokens/count"; // Replace with the actual endpoint.

async function updateCounter() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        document.getElementById("tokenCounter").innerText = data.totalTokens; // Adjust key based on the API response.
    } catch (error) {
        console.error("Error fetching token count:", error);
    }
}

// Update the counter every 10 seconds
setInterval(updateCounter, 10000);

// Initial load
updateCounter();
