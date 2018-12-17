import React from 'react';

class A extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data : ['one', 'two'],
        // };
        this.state = {
            mutate: false,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => this.tick(),
            1000
        );
    }

    tick() {
        // this.setState({ data: ['new', 'one', 'two'] });
        this.setState({
            mutate: true,
        });
    }

    render() {
        return (
            <div className="App" onClick={() => console.log(1)}>
                <ul>
                { this.state.mutate &&
                <li>New</li>
                }
                <li>One</li>
                <li>Two</li>
            </ul>
            </div>
        );
    }
}

// console.log(React.createClass)
console.log(React.createElement(A, null));
console.log(<A/>);
console.log(<A><div>这是A组件</div><div>这是B组件</div></A>);
console.log(<A><div><b>这是A组件</b></div></A>);
console.log(new A());

export default A;