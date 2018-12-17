import React from 'react';
import ReactDOM from 'react-dom';

// 测试异步相关
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             eventType: '',
//         };
//     }
//     handleClick(event) {
//         // event.persist();  持久化事件
//         // 不要在异步的过程中使用事件对象
//         // 事件对象在 React 中是被复用的，事件回调被执行以后，事件对象的所有属性会被重置为 null
//         console.log(event); // => nullified object.
//         console.log(event.type); // => "click"
//         const eventType = event.type; // => "click"
//         setTimeout(function() {
//             console.log(event.type); // => null
//             console.log(eventType); // => "click"
//         }, 0);
        
//         // Won't work. this.state.clickEvent will only contain null values.
//         this.setState({ clickEvent: event });
        
//         // You can still export event properties.
//         this.setState({ eventType: event.type });
//     }
    
//     render() {
//         return (
//             <div href="" style={{cursor: 'pointer'}} onClick={this.handleClick.bind(this)}>
//                 Click me
//             </div>
//         );
//     }
// }

// 测试冒泡相关
class App extends React.Component {
    componentDidMount() {
        const $parent = ReactDOM.findDOMNode(this);
        const $child = $parent.querySelector('.child');
        $parent.addEventListener('click', this.onParentDOMClick, false);
        $child.addEventListener('click', this.onChildDOMClick, false);
    }

    onParentDOMClick = evt => {
        // evt.stopPropagation(); // child dom event parent dom event
        console.log('parent dom event');
    }

    onChildDOMClick = evt => {
        // evt.stopPropagation(); // child dom event
        console.log('child dom event');
    }    

    onParentClick = evt => {
        // evt.stopPropagation();   // child dom event parent dom event child react event parent react event
        console.log('parent react event');
    }

    onChildClick = evt => {
        // evt.stopPropagation();  // child dom event parent dom event child react event
        console.log('child react event');
    }
    render() {
        return (
            <div onClick={this.onParentClick}>
                <div className="child" onClick={this.onChildClick}>
                    Demo
                </div>
            </div>
        )
    }
}
export default App;