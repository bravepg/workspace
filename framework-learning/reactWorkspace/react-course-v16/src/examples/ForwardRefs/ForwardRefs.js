import React from "react";

/**
 * 注意第二个参数 ref 只有在调用 React.forwardRef 才会存在
 * 普通的不接受 ref 参数
 * 不只是 DOM components 可以使用， class component 也可以
 * 
 * 结合 context ref 看
 */

// class Button extends React.Component {
//     render() {
//         return (
//             /* 第三步，将 ref 绑定到真实 dom 上 */
//             <button ref={this.props.forwardedRef} className="FancyButton">
//                 {this.props.children}
//             </button>
//         )
//     }
// }
function Button(props) {
    return (
        <button ref={props.forwardedRef} className="FancyButton">
                {props.children}
        </button>
    )
}
// 第二步，利用 forwardRef 传递 ref
const FancyButton = React.forwardRef((props, ref) => {
    return (
        /* 第三步，将 ref 绑定到真实 dom 上 */
        // <button ref={ref} className="FancyButton">
        //     {props.children}
        // </button>
        <Button forwardedRef={ref}>{props.children}</Button>
    );
});

// ``ref``属性不能直接使用在 ``functional components``上
// function FancyButton() {
//     return <input />;
// }

class Demo extends React.Component {
    constructor(props) {
        super(props);
        // 第一步，创建 ref
        this.ref = React.createRef();
    }

    componentDidMount() {
        console.log('this.ref.current', this.ref.current)
    }

    render() {
        return (
            <FancyButton ref={this.ref}>Click me!</FancyButton>
        );
    }
}
export default Demo;

// function logProps(Component) {
//     class LogProps extends React.Component {
//         componentDidUpdate(prevProps) {
//             console.log('old props:', prevProps);
//             console.log('new props:', this.props);
//         }

//         render() {
//             const {forwardedRef, ...rest} = this.props;

//             // Assign the custom prop "forwardedRef" as a ref
//             return <Component ref={forwardedRef} {...rest} />;
//         }
//     }

//     return React.forwardRef((props, ref) => {
//         // 如果此处使用 ref={ref} 则是错误的, 由于 ref 不会自动传递
//         return <LogProps {...props} forwardedRef={ref} />;
//     });
// }

// class FancyButtonDemo extends React.Component {
//     state = {
//         count: 0
//     }

//     handleClick = () => {
//         let _state = this.state;
//         _state.count++;
//         this.setState(_state);
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>click me!</button>
//         );
//     }
// }

// export default logProps(FancyButtonDemo);