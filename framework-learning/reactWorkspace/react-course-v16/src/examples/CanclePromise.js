import React from 'react';

// const promise = new Promise((resolve, reject) => {
//     // const data = fetch('https://api.github.com/')
//     // resolve(1)   // 对应操作 1
//     reject(1)   // 对应操作 2
// });

// reject 和 catch 的区别
// 操作 1
// promise
//     .then(v => {
//         throw new Error('1')
//     }, v => console.log(v))         // reject 无法捕获当前 then 抛出的错误，catch 是全局的
//     .catch(v => console.error(v))
// 操作 1
// promise
//     .then(v => console.log(v), v => console.info(v))  // 一旦 reject 捕获到错误，就不会再传递到 catch
//     .catch(v => console.error(v))

/**
 * 在我们谈到可以取消的 fecth 之前，我们要明白 fecth 是不可以被终止的
 * 因此我们想到可以把 fecth 进行包装
 * 
 * 那么如何包装呢？想法就是在异步操作返回之前，返回可以理解的错误，那么就可以不用在进行操作了
 */

// const cancelPromise = (promise) => {
//     let _hasCanceled = false;

//     const wrappedPromise = new Promise((resolve, reject) => {
//         promise.then(v => {
//             _hasCanceled ? reject({hasCancel: true}) : resolve(v)
//         })
//         promise.catch(e => {
//             _hasCanceled ? reject({hasCancel: true}) : reject(e)
//         }) 
//     });
//     return {
//         promise: wrappedPromise,
//         cancel() {
//             _hasCanceled = true
//         }
//     }
// }

/**
 * 上述代码已经可以解决了问题，我们也知道在 Promise 中有个 race 方法，可以提前返回
 */
const EventEmitter = {
    listeners: [],
    subscribe(fn) {
        EventEmitter.listeners.push(fn)
    },
    dispatch() {
        EventEmitter.listeners.forEach(fn => fn())
    }
};
const cancelPromise2 = function(realPromise) {
    const _promise = new Promise((reject, resolve) => {
        EventEmitter.subscribe(() => reject({hasCancel: true}));
    });
    return Promise.race([_promise, realPromise]);
};

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.cancelPromise = null;
        this.cancelPromise2 = null;
    }
    componentDidMount() {
        // this.cancelPromise = cancelPromise(new Promise((resolve, reject) => {
        //     resolve('1')
        // }));
        // this.cancelPromise
        //     .promise
        //     .then(v => console.log(v))
        //     .catch(e => console.log(e))
        this.cancelPromise2 = cancelPromise2(new Promise((resolve, reject) => {
            fetch('https://api.github.com/')
        }))
        this.cancelPromise2
            .then(v => console.log(v))
            .catch(e => console.log(e))
    }
    componentWillUnmount() {
        // this.cancelPromise.cancel();
        EventEmitter.dispatch();
    }
    render() {
        return (
            <div className="Dialog-title">
                子组件
            </div>
        )
    }
}

class WelcomeDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    componentDidMount() {
        this.setState({
            num: 0
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="Dialog-title">
                    可取消的请求
                </h1>
                { !!this.state.num && <Demo /> }
            </React.Fragment>
        )
    }
}

export default WelcomeDialog;