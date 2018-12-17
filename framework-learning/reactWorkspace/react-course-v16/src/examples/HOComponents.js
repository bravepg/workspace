/**
 * 所谓高阶组件就是: 一个函数接受一个组件为参数然后返回另一个组件
 * 
 * 注意事项
 * 1. 不要改变原始组件，要使用组合
 * function logProps(InputComponent) {
 *   InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
 *     console.log('Current props: ', this.props);
 *     console.log('Next props: ', nextProps);
 *   }
 *   return InputComponent;
 * }
 * 上述代码改变了原始组件, 存在这样几个问题:  InputComponent 和增强的 component 不能很好的分离
 * functional components 不存在这样的生命周期, 定义也是无效的
 * componentWillReceiveProps 可能会被另外一个高阶组件重写
 * 
 * 应该这样使用
 * function logProps(WrappedComponent) {
 *   return class extends React.Component {
 *     componentWillReceiveProps(nextProps) {
 *       console.log('Current props: ', this.props);
 *       console.log('Next props: ', nextProps);
 *     }
 *     render() {
 *       return <WrappedComponent {...this.props} />;
 *     }
 *   }
 * }
 * 
 * 2. 传递不相关的 props
 * 3. Refs 不会被传递
 * 4. 不要在 render 中使用高阶组件，因为每次渲染会生成新的组件 都会进行 unmount/mount 操作，导致丢失状态
 * 5. 需要手动拷贝静态方法
 */
import React from 'react';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    render() {
        return (
            <input value={this.state.input} onChange={this.handleChange} />
        );
    }
}

function logProps(WrappedComponent) {
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

// 正确定义 EnhanceInputComponent 的地方
const EnhanceInputComponent= logProps(InputComponent);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    
    render() {
        // 如果 EnhanceInputComponent 在该处定义
        // 因为每次渲染会生成新的组件 都会进行 unmount/mount 操作，导致丢失状态
        // 上面一个输入框是丢失状态
        // const EnhanceInputComponent= logProps(InputComponent);
        return(
            <div>
                <EnhanceInputComponent />
                <input value={this.state.input} onChange={this.handleChange} />
            </div>
        )
    }
}

export default App;