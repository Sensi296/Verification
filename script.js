function verify() {
    if (window.chrome && window.chrome.webview) {
        window.chrome.webview.postMessage("verify");
    } else {
        alert("Verification page opened successfully!");
    }
}

function buyVip() {
    window.open("https://your-payment-link.com", "_blank");
}

function support() {
    window.open("https://discord.gg/yourserver", "_blank");
}
