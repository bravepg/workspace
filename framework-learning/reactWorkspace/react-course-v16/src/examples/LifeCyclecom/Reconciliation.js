/**
 * 调和过程也叫做 diff 过程
 * 每当调用 setState 或者接收到新的 props 时会进行该过程
 * 注意: 即使 setState 没有改变 state 也会调用 render 函数进行调和过程
 *      当然, 一旦 shouldComponentUpdate 返回 false 就不再调用 render 函数
 * 
 * 
 * 调和过程
 * 1. 从根节点开始, 如果发现 type 不同则直接 unmount 整棵树 再重新 mount
 *      该过程 componentWillMount、render、componentWillUnmount、componentDidMount
 * 2. 如果发现节点相同便不会再卸载, 而是进行更新
 *      该过程 componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
 * 3. 然后会子节点更新, 该过程与 key 相关
 * 4. 如果直接 unmount 子节点 则只会调用 componentWillUnmount
 * 5. 如果直接调用 setState 不会进入 componentWillReceiveProps 生命周期
 *      该过程 shoudlComponentUpdate、componentWillUpdate、render、componentDidUpdate
 */
import React from 'react';


class Counter extends React.Component {
    state = {
        num: 0,
    };
    componentWillMount() {
        console.log('willMount');
        // 如果组件卸载了再调用这个会造成 Warning: Can't call setState (or forceUpdate) on an unmounted component
        // setTimeout(() => {
        //     this.setState({
        //         num: 2
        //     })
        // }, 5000)
    } 
    
    componentWillReceiveProps(nextProps, nextState) {
        console.log('child nextProps', nextProps);
        console.log('child nextState', nextState);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        // 在 componentWillUpdate 会造成无限循环
        // this.setState({
        //     num: 3
        // })
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('didMount');
    }

    componentWillUnmount() {
        console.log('willUnmount');
    }

    handleClick = () => {
        this.setState({
            num: this.state.num + 1
        });
    }

    render() {
        console.log('re-render');
        return (
            <div onClick={this.handleClick}>{this.props.num}</div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.tag = '';
    }
    // componentWillMount() {
    //     // 在 componentWillMount 进行 setState 不会 re-render
    //     this.setState({
    //         num: 2
    //     })
    // }
    componentDidMount() {
        this.setState({
            num: 2
        })
    }
    handleClick = () => {
        this.setState({
            num: this.state.num + 1
        });
    }
    // 如果返回 true, 不会再进行 render
    // shouldComponentUpdate() {
    //     return false;
    // }

    render() {
        this.tag = this.state.num === 1 ? 'div' : 'span';
        return (
            // 如果节点相同 不会卸载 该例子符合上述观点2 
            // <React.Fragment>
            //     <button onClick={this.handleClick}>点击</button>
            //     <Counter num={this.state.num} />
            // </React.Fragment>


            <React.Fragment>
                <button onClick={this.handleClick}>点击</button>
                {this.state.num < 4 && (
                    <this.tag>
                        <Counter num={this.state.num} />
                    </this.tag>
                )}
            </React.Fragment>
        );
    }
}

export default App;