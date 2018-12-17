import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { store } from './configureStore';
import LoginApp from './routes/Login/container';

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginApp} />
          </div>
        </Router>
      </Provider>
    )
  }
}

const Home = () => (
  <div>Home</div>
)

export default App;
