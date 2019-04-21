import React from 'react';

function withMouse(Component) {
  return class MouseApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      }
    }
    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      })
    }
    render() {
      return <Component {...this.props} handleMouseMove={this.handleMouseMove} mouse={this.state}/>
    }
  }
}

function App(props) {
  return (
    <div style={{ height: '500px' }} onMouseMove={props.handleMouseMove}>
      鼠标现在的位置是 {props.mouse.x}, {props.mouse.y}
    </div>
  )
}



export default withMouse(App);

// HOC 的劣势
// 1. 一旦存在多个组件，无法确定 props 来自哪里
// 2. HOC 加深了组件的层级
// 3. 再执行 withMouse(App) 时就发生了一次构建，我觉得这样做是没有什么问题的，
// 这是Dan讨论的内容 https://github.com/krasimir/react-in-patterns/issues/12

// class MouseApp extends React.Component {

//   state = { x: 0, y: 0 }

//   handleMouseMove = (event) => {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     })
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//         {this.props.render(this.state)}
//       </div>
//     )
//   }
// }

// const App = () => (
//   <div style={{ height: '100%' }}>
//     <MouseApp render={({ x, y }) => (
//       <h1>The mouse position is ({x}, {y})</h1>
//     )}/>
//   </div>
// )

// export default App;
