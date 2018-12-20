import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        // 像这种如果多个状态都依赖于该方法，最好像下面一样把他提取出来
        // this.state = {
        //     person: this.caculatePerson(),
        //     age: this.caculatePerson().age,
        // }
        const person = this.caculatePerson();
        this.state = {
            person,
            age: person.age,
        }
    }
    caculatePerson() {
        return {
            name: 'gao',
            age: 23,
        };
    }
    handleClick(e) {
        console.log(this)
        console.log(App.prototype)
        e.preventDefault();
        console.log('The link was clicked.');
    }
    
    render() {
        return (
            <a href="" onClick={this.handleClick.bind(this)}>
                Click me
            </a>
        );
    }
}

// functional component
// function App() {
    // function handleClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    // }
  
    // return (
    //     <a href="#" onClick={handleClick}>
    //         Click me
    //     </a>
    // );
// }

console.log(App.prototype)
export default App;