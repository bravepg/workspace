import React from 'react';
import ReactRte from './ReactRte';

export default class Demo extends React.Component {
  state = {
    html: '',
  }

  render() {
    return (
      <>
        <ReactRte onChange={(val) => this.setState({ html: val })} />
        <span dangerouslySetInnerHTML={{ __html: this.state.html }}></span>    
      </>
    )
  }
}