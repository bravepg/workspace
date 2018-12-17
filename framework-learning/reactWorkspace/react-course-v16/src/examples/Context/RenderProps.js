/**
 * 记录鼠标在页面上的位置
 */
import React from 'react';

// class MouseTracker extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove = (event) => {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//                 <h1>Move the mouse around!</h1>
//                 <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//             </div>
//         );
//     }
// }

/**
 * ok, 那么现在问题来了，我们应该如何去复用这个组件呢
 * 我们目前可以轻而易举的做到
 */
// class Mouse extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove = (event) => {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//                 <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//             </div>
//         );
//     }
// }
// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <Mouse />
//             </div>
//         );
//     }
// }

/**
 * 现在，一个新的需求又来了
 * 我们需要渲染一个图像
 * 让它跟着我们的鼠标动起来
 */
// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//           <img src="../../logo.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//         );
//     }
// }
// class MouseWithCat extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove = (event) => {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//                 <Cat mouse={this.state} />
//             </div>
//         );
//     }
// }
// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <MouseWithCat />
//             </div>
//         );
//     }
// }

/**
 * 上述代码已经实现了图片跟着鼠标移动
 * 但是代码还远远没有达到重用的地步
 * 如果我们现在需要渲染另一张图片
 * 可能我们要创建 MouseWithDog
 * 现在我们引入 render–a render prop 的概念
 */
// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//           <img src="../../logo.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//         );
//     }
// }
// class Mouse extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove = (event) => {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//                 {this.props.render(this.state)}
//             </div>
//         );
//     }
// }
// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <Mouse render={mouse => (
//                     <Cat mouse={mouse} />
//                 )} />
//             </div>
//         );
//     }
// }

/**
 * 上述代码还有一个缺点就是
 * 因为 render 是一个箭头函数
 * 如果每次渲染 都会重新渲染 Cat
 * 我们使用的 PureComponent 优化就会失效
 */
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
          <img src="../../logo.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}
class MouseTracker extends React.Component {
    renderTheCat(mouse) {
        return <Cat mouse={mouse} />;
    }
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={this.renderTheCat} />
            </div>
        );
    }
}

export default MouseTracker;