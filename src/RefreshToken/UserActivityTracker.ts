// UserActivityTracker.ts

let lastActivityTime = Date.now();

export function resetActivityTimer(): void {
    lastActivityTime = Date.now();
}

export function isUserInactive(): boolean {
    const currentTime = Date.now();
    const inactiveTime = currentTime - lastActivityTime;
    return inactiveTime > 10 * 60 * 1000; // 10 minutes of inactivity
}
