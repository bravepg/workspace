import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: [{
                name: 'a'
              }, {
                name: 'b'
              }, {
                name: 'c'
            }]
        };
    }
    
    render () {
        return (
            <div>
                <ul> 
                    {this.state.sort.map((item, index) => {
                        // 反模式
                        // return <li key={index}>{item.name} <input type="text"/></li>
                        return <li key={item.name}>{item.name} <input type="text"/></li>
                    })} 
                </ul>
                <button onClick={this.handleReverse.bind(this)}>reverse</button>
            </div>
        )
    }

    handleReverse() {
        this.setState({sort: this.state.sort.filter(item => item.name !== 'b')});
    }
}

export default App;