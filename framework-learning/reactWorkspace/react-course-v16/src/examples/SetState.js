import React from 'react';
import ReactDom from 'react-dom';
/**
 * 在没有定时器或者原生事件情况下：
 * 1. setState 如果传入的直接是对象，则setState会发生合并
 * 2. setState 如果传入的是函数，则setState不会发生合并，要注意如果多个函数后面突然出现了一个传入的直接是对象，之前的效果会全部丢失
 *      this.setState(increment);
        this.setState(increment);
        this.setState({count: this.state.count + 1});
        this.setState(increment);
        结果只会增加 2 而不是增加 4 
 * 3. setState 如果拥有第二个参数 callback，则会在事务流关闭才会执行
 * 
 * 在存在定时器或者原生事件的情况下：
 * 4. 无论是情况1还是情况2，setState 都不会进行合并
 * 5. 如果存在原生事件，所拥有的效果跟 setTimeout 比较类似
 * 6. 如果同时拥有定时器和回调函数的话，由于不同的 setState 是不同的事务流，因此结果会不同
 */

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             num: 0
//         };
//     }

//     componentDidMount() {

//         // 情况1: 直接调用对象
//         // this.setState({ num: this.state.num + 1 }, () => {
//         //     console.log('callback', this.state.num); // 1
//         // });
//         // this.setState({ num: this.state.num + 2 });
//         // console.log('normal', this.state.num); // 0

//         // 情况2: 调用的是方法
//         // this.setState((preState,props) => ({
//         //     num: preState.num + 1
//         // }), () => {
//         //     console.log('callback', this.state.num); // 2
//         // })
        
//         // this.setState((preState,props) => ({
//         //     num: preState.num + 1
//         // }))
//         // console.log('normal', this.state.num); //  0

//         // 情况4: 存在定时器的话，从 debug 的情况来看，会新开一个事物流
//         setTimeout(() => {
//             this.setState({ num: this.state.num + 1 });
//             this.setState({ num: this.state.num + 1 });
//             console.log("setTimeout", this.state.num);
//         }, 0);
//     }

//     render() {
//         return (
//             <div className="App">
//                 <div className="App-header">
//                     <h1> "Welcom to React" </h1>
//                 </div>
//             </div>
//         );
//     }
// }

class AppEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    componentDidMount() {
        // 情况5: 手动绑定mousedown事件，跟 setTimeout 比较类似
        ReactDom.findDOMNode(this).addEventListener(
          "mousedown",
          this.onClick.bind(this)
        );
        // 延时调用onclick事件
        setTimeout(this.onClick.bind(this), 1000);
    }
    onClick(event) {
        if (event) {
            console.log(event.type);
        } else {
            console.log("timeout");
        }
        console.log("prev state: ", this.state.counter);
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log("first next state:", this.state.counter);
        });
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log("second next state:", this.state.counter);
        });
        console.log("next state: ", this.state.counter);
    }
    render() {
        return (
            <div onClick={this.onClick.bind(this)}>点我</div>
        )
    }
}

export default AppEvent;

// export default App;