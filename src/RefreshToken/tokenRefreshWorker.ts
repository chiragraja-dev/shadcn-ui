/* eslint-disable no-restricted-globals */
let refreshToken: string;

(self as any).addEventListener('message', (event: MessageEvent) => {
    if (event.data === 'start') {
        // Assume you have a function to get a new refresh token
        console.log("event.data", event.data)
        refreshToken = getNewRefreshToken();

        // Set up a timer to refresh the token every 10 seconds
        setInterval(() => {
            refreshToken = getNewRefreshToken();
        }, 3000);
    }
    // 14 * 60 * 1000
});

function getNewRefreshToken(): string {
    // Implement your logic to get a new refresh token from the server
    // Example: Make an API call to refresh the token
    // return fetch('/api/refreshToken').then((response) => response.json());
    console.log("hello");
    return 'newRefreshToken'; // Replace with your actual logic
}

// Add an empty export statement to make it a module
export { };
