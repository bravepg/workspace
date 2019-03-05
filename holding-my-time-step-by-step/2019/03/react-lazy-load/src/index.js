import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 使用 React.lazy 来代替之前的 react-loadable
// 但是要注意无法在服务端渲染使用
// 服务端渲染推荐使用 Loadable Components 
const Artists = lazy(() => import('./Artists'));

class App extends React.Component {
    render(){
        return(
            <div className="App">
                 <Suspense fallback={<h1>Still Loading…</h1>}>
                    <Artists />
                </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
