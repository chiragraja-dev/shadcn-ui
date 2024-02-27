/// <reference lib="webworker" />

let refreshToken: string;
let isLoggedIn = true; // Assume the user is initially logged in

// eslint-disable-next-line no-restricted-globals
addEventListener('message', (event: MessageEvent) => {
    if (event.data === 'start') {
        refreshAndSchedule();
    } else if (event.data === 'logout') {
        handleLogout();
    } else if (event.data && event.data.type === 'lastActivityTime') {
        const lastActivityTime = event.data.value;
        if (shouldLogout(lastActivityTime)) {
            handleLogout();
        }
    }
});

function refreshAndSchedule(): void {
    refreshToken = getNewRefreshToken();

    setInterval(() => {
        refreshToken = getNewRefreshToken();
    }, 10000); // Refresh every 10 minutes

    setInterval(() => {
        // Ask the main thread for the last activity time
        // eslint-disable-next-line no-restricted-globals
        postMessage({ type: 'getLastActivityTime' });
    }, 10000); // Check for inactivity every 5 minutes
}

function handleLogout(): void {
    // Perform logout logic
    console.log('User logged out');
    isLoggedIn = false;
}

function shouldLogout(lastActivityTime: number): boolean {
    // Check if the user is inactive for the last 15 minutes
    return isLoggedIn && isUserInactive(lastActivityTime);
}

function isUserInactive(lastActivityTime: number): boolean {
    const currentTime = Date.now();
    const inactiveTime = currentTime - lastActivityTime;
    console.log(inactiveTime)
    // Check if the user was active in the first 5 minutes or inactive for the last 10 minutes
    return inactiveTime > 600000 || (inactiveTime > 300000 && inactiveTime <= 600000);
}

function getNewRefreshToken(): string {
    // Implement your logic to get a new refresh token from the server
    // Example: Make an API call to refresh the token
    console.log("Refreshing token...");
    return 'newRefreshToken'; // Replace with your actual logic
}

export { };
