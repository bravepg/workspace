import React from "react";
import PropTypes from 'prop-types';
/**
 * 基本上不再使用 update context 这种方式来更新状态
 * 因为如果 componentShouldUpdate 返回 false的话
 * 这种更新的方式是无效的
 */

/* 创建一个 Context 是基于生产者消费者模式 */

/**
 * 定义作为中转的类，为了证明在很深的层级中，子组件也可以直接获取 context 中的值
 */
class MiddleComponent extends React.Component {
    render () {
        return <ChildComponent />
    }
}

export default class ParentComponent extends React.Component {
    // 父组件是 Context 的生产者
    // 1. 声明 Context 对象属性
    static childContextTypes = {
        propA: PropTypes.string,
        methodA: PropTypes.func
    }

    // 2. 返回Context对象，方法名是约定好的

    getChildContext() {
        return {
            propA: 'propA',
            methodA: () => 'methodA'
        }
    }

    render () {
        return <MiddleComponent />
    }
}

class ChildComponent extends React.Component {
    // 子组件是消费者
    // 1. 声明需要使用的Context属性
    static contextTypes = {
        propA: PropTypes.string
    }

    // 可以直接获取 context
    constructor(props, context) {
        super(props);
        console.log('context', context)
    }

    render () {
        const {
            propA,
            methodA
        } = this.context;
        
        console.log(`context.propA = ${propA}`)  // context.propA = propA
        console.log(`context.methodA = ${methodA}`)  // 由于只声明了 propA，因此 context.methodA = undefined
        
        return <div>Hello</div>
      }
}