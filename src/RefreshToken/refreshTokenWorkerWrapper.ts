
// const worker = new Worker(new URL('./tokenRefreshWorker', import.meta.url));

// export default worker;

const worker = new Worker(new URL('./tokenRefreshWorker', import.meta.url));

export default worker;
