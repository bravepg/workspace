const myReact = require('./useState');

function Counter() {
  const [count, setCount] = myReact.useState(0);
  const [text, setText] = myReact.useState('foo');
  myReact.useEffect(() => {
    console.log('effect', count, text);
    return () => {
      console.log('卸载啦');
    }
  }, [count, text]);
  return {
    click: () => setCount(count + 1),
    type: txt => setText(txt),
    noop: () => setCount(count),
    render: () => console.log('render:', { count, text })
  }
}
let App
App = myReact.render(Counter)
// effect 0 foo
// render {count: 0, text: 'foo'}
App.click()
App = myReact.render(Counter)
// effect 1 foo
// render {count: 1, text: 'foo'}
App.type('bar')
App = myReact.render(Counter)
// effect 1 bar
// render {count: 1, text: 'bar'}
// App.noop()
// App = myReact.render(Counter)
// no effect run
// render {count: 1, text: 'bar'}
// App.click()
// App = myReact.render(Counter)