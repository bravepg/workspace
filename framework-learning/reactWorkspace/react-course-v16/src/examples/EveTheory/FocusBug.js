/**
 * 我们知道: 原生的 DOM 事件中 focus 是不会冒泡的
 * 但是 react 中 是可以冒泡的, 是如何做到的呢
 * react 事件机制中会通过 事件捕获机制获取到 focus事件
 * 然后进行事件合成
 */
import React from 'react';
const phases = ["NONE", "CAPTURING_PHASE", "AT_TARGET", "BUBBLING_PHASE"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  logEvent(elm, type) {
    return e => {
      const log = `${phases[e.eventPhase]} on ${elm}`;
      this.setState(({ logs }) => ({ logs: [...logs, log] }));
    };
  };

  render() {
    return (
      <div>
        <h1>分别点击两个 input 查看效果</h1>
        <h2>React focus</h2>
        <div
          onFocus={this.logEvent("div", "focus")}
          onFocusCapture={this.logEvent("div", "focus")}
        >
          <input
            type="text"
            onFocus={this.logEvent("input", "focus")}
            onFocusCapture={this.logEvent("input", "focus")}
          />
        </div>
        {this.state.logs.map((log, index) => <p key={index}>{log}</p>)}
      </div>
    );
  }
}

// const logEvent = (elm, type, expect) => {
//   const container = document.querySelector("#container");
//   return e => {
//     const log = `${phases[e.eventPhase]} on ${elm}`;
//     const p = document.createElement("p");
//     p.innerHTML = log;
//     container.appendChild(p);
//   };
// };

// document
//   .querySelector("#wrapper")
//   .addEventListener("focus", logEvent("div", "focus"), true);
// document
//   .querySelector("#wrapper")
//   .addEventListener("focus", logEvent("div", "focus"), false);

// document
//   .querySelector("#domInput")
//   .addEventListener("focus", logEvent("input", "focus"), true);
// document
//   .querySelector("#domInput")
//   .addEventListener("focus", logEvent("input", "focus"), false);

export default App;
