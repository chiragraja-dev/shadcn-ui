// UserActivityTracker.ts

let lastActivityTime = Date.now();

export function resetActivityTimer(): void {
    lastActivityTime = Date.now();
}

export function isUserInactive(): boolean {
    const currentTime = Date.now();
    const inactiveTime = currentTime - lastActivityTime;

    // Check if the user was active in the first 5 minutes or inactive for the last 10 minutes
    return inactiveTime > 100000
}
