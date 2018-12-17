import React from 'react';

class App extends React.Component {
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