/**
 * React.createElement(
 *   type,
 *   [props],
 *   [...children]
 * )
 * React.cloneElement(
 *   element,
 *   [props],
 *   [...children]
 * )
 * createElement 和 cloneElement 是非常类似的，区别就是 
 * createElement 的 type 可以是字符串或者组件
 * cloneElement 的 type 是元素
 * 
 * 组件: 它的数据结构是类或者函数,组件是由元素构成的,MyComponent 是组件
 * 元素: 它的数据结构是对象,通过调用 createElement函数 生成, <MyComponent />是元素
 */
import React from 'react';

function FancyBorder(props) {
    console.log(props.children);
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
            {React.cloneElement(props.children[0], {style: {color: 'red'}})}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog;