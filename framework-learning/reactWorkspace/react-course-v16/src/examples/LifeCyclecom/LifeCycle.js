/**
 * 由于上一篇文章介绍了 reactV15 的生命周期表现
 * 本片只会介绍 16 的表现
 * 它移除了 componentWillMount、componentWillReceiveProps、componentWillUpdate
 * 
 * 挂载过程
 * getDerivedStateFromProps(类似componentWillMount、componentWillReceiveProps的功能)-> render -> componentDidMount
 * 所以无论挂载还是更新都会触发 getDerivedStateFromProps
 * 
 * 更新过程
 * getDerivedStateFromProps(类似componentWillMount、componentWillReceiveProps的功能) -> shouldComponentUpdate
 * -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
 * 
 * 卸载过程
 * componentWillUnmount
 * 
 * 卸载并且再次挂载过程
 * getDerivedStateFromProps -> render -> componentWillUnmount -> componentDidMount
 * 
 * componentWillMount 移除的原因:
 *  在 componentWillMount 进行请求的话
 *      在服务端渲染中, 获取的数据不会被使用
 *      在异步渲染模式中会被请求多次
 *  推荐把请求放在 componentDidMount 中
 * 
 * componentWillReceiveProps 移除的原因
 *      经常会被误用
 * 可以使用 componentDidUpdate 来替代
 * 
 * componentWillUpdate 移除的原因
 *      在异步渲染模式中会被调用多次
 */
import React from 'react';

class SubCounter extends React.Component {
    state = {
        number: 0
    };

    static getDerivedStateFromProps(props, state) {
        console.log('props', props)
        console.log('state', state)
        console.log('9、子组件将要接收到新属性');
        if (props.number !== state.number) {
            return {
                number: props.number
            }
        }
        return null;
    }

    componentDidMount() {
    	console.log('5、子组件挂载完成');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log(newProps, newState)
        console.log('10、子组件是否需要更新');
        return true;
    }

    getSnapshotBeforeUpdate() {
        // 一般DOM变化时使用，返回值作为componentDidUpdate的第三个参数
        console.log('11、子组件将要更新');
        return null
    }

    componentDidUpdate(preProps, preState) {
        console.log('preProps', preProps)
        console.log('preState', preState)
        console.log('13、子组件更新完成');
    }

    componentWillUnmount() {
        console.log('14、子组件将卸载');
    }

    render() {
    	console.log('12、子组件挂载中');
        return (
        	<p>
        		{ this.props.number }
        	</p>
        );
    }
}

class Counter extends React.Component {
	static defaultProps = {
		// 1、加载默认属性
		name: 'sls',
        age: 23
	};
	constructor(props) {
		super(props);
		// 2、加载默认状态
		this.state = {
			number: 0,
        };
        this.tag = '';
	}

	componentWillMount() {
		console.log('3、父组件挂载之前');
	}

	componentDidMount() {
    	console.log('5、父组件挂载完成');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('6、父组件是否需要更新');
        console.log('父组件newProps', newProps);
        console.log('父组件newState', newState);
    	if (newState.number > 5) return true;
        return false;
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    };

    render() {
        console.log('4、父组件挂载中');
        this.tag = this.state.number === 7 ? 'div' : 'span';
    	return (
            <div>
                <p>{ this.state.number }</p>
                <button onClick={this.handleClick}>+</button>
                { this.state.number < 10 ? (
                    <this.tag>
                        <SubCounter number={this.state.number}/>
                    </this.tag>
                ) : null }
            </div>
        );
    }
}
export default Counter;