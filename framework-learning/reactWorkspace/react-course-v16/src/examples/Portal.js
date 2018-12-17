// https://zhuanlan.zhihu.com/p/29880992
/**
 * 用途: 将子组件展示在父组件之外的技术(传送门)
 * 
 * 通常情况下: element 会被挂载到最近的父节点上
 * 
 * 通过 createPortal 则可以将 element 挂载到任何合法的 dom 节点上
 * 
 * render() {
 *   return ReactDOM.createPortal(
 *     this.props.children,
 *     domNode
 *   );
 * }
 * 
 * 注意: 即使这些元素不在父节点的 DOM 中, 但是事件冒泡依然会冒泡到父组件中
 */

import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            // JSX, strings,
            this.props.children,
            // A DOM element
            this.el,
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    handleShow = () => {
        this.setState({ showModal: true });
    }
      
    handleHide = () => {
        this.setState({ showModal: false });
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div>
                    With a portal, we can render content into a different
                    part of the DOM, as if it were any other React child.
                    </div>
                    This is being rendered inside the #modal-container div.
                    <button onClick={this.handleHide}>Hide modal</button>
                </div>
            </Modal>
        ) : null;
        return (
            <div className="app">
              This div has overflow: hidden.
              <button onClick={this.handleShow}>Show modal</button>
              {modal}
            </div>
        );
    }
}

export default App;