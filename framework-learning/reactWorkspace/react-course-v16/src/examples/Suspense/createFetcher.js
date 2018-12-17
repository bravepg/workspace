/**
 * 该函数用于包装 Promise
 * 当第一次调用的时候，会返回 throw Promise
 */
var cached = {};
export const createFetcher = (promiseTask) => {
    let ref = cached;
    return () => {
        const task = promiseTask();
        task.then(res => {
            ref = res
        });
        if (ref === cached) {
            throw task
        }
        return ref
    }
}