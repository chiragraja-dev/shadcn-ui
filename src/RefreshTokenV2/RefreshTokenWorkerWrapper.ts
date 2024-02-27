// RefreshTokenWorkerWrapper.ts

const worker = new Worker(new URL('./tokenRefreshWorker', import.meta.url));

worker.postMessage('start');

const refreshTokenWorkerWrapper = {
    postMessage: (message: string) => {
        worker.postMessage(message);
    },
    terminate: () => {
        worker.terminate();
    },
};

export default refreshTokenWorkerWrapper;
