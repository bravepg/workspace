import React from 'react';

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    clickHandler = () => {
        console.log('togglage测试组件');
    }

    componentDidMount() {

    }
    render() {
        return (
            <button onClick={this.clickHandler}>togglage测试组件</button>
        )
    }
}

// console.log(React.createClass)
console.log(React.createElement(A, null));
console.log(<A/>);
console.log(<A><div>这是A组件</div><div>这是B组件</div></A>);
console.log(<A><div><b>这是A组件</b></div></A>);
console.log(new A());

export default A;