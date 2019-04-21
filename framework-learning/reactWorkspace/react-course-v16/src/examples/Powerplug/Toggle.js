import React from 'react'

const isFn = prop => typeof prop === 'function'

// export function Toggle({ on, ...props }) {
//   return (
//     props.children(true)
//   )
// }

// class Value extends React.Component {
//   state = {
//     on: this.props.initial
//   }

//   return (

//   )

class Toogle extends React.Component {
  state = {
    on: this.props.initial,
  }

  setOn = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    return renderProps(this.props, {
      on: this.state.on,
      toggle: this.setOn
    })
  }
}

function renderProps({ children, render }, ...props) {
  const fn = isFn(children) ? children : render

  return fn ? fn(...props) : null
}

export default Toogle;