import React from 'react';
import { createStore } from '../../myRedux';
import { Provider, connect } from  '../../myReactRedux';

// const initialState = {
//   theme: "dark",
//   color: "blue"
// };
//
// const GlobalStoreContext = React.createContext({
//   ...initialState
// });
//
// class GlobalStoreContextProvider extends React.Component {
//   // initialState
//   state = {
//     ...initialState
//   };
//
//   // reducer
  // handleContextChange = action => {
  //   switch (action.type) {
  //     case "UPDATE_THEME":
  //       return this.setState({
  //         theme: action.theme
  //       });
  //     case "UPDATE_COLOR":
  //       return this.setState({
  //         color: action.color
  //       });
  //     case "UPDATE_THEME_THEN_COLOR":
  //       return new Promise(resolve => {
  //         resolve(action.theme);
  //       })
  //         .then(theme => {
  //           this.setState({
  //             theme
  //           });
  //           return action.color;
  //         })
  //         .then(color => {
  //           this.setState({
  //             color
  //           });
  //         });
  //     default:
  //       return;
  //   }
  // };

//   render() {
//     return (
//       <GlobalStoreContext.Provider
//         value={{
//           dispatch: this.handleContextChange,
//           theme: this.state.theme,
//           color: this.state.color
//         }}
//       >
//         {this.props.children}
//       </GlobalStoreContext.Provider>
//     );
//   }
// }
//
// const SubComponent = props => (
//   <div>
//     {/* action */}
//     <button
//       onClick={() =>
//         props.dispatch({
//           type: "UPDATE_THEME",
//           theme: "light"
//         })
//       }
//     >
//       change theme
//     </button>
//     <div>{props.theme}</div>
//     {/* action */}
//     <button
//       onClick={() =>
//         props.dispatch({
//           type: "UPDATE_COLOR",
//           color: "red"
//         })
//       }
//     >
//       change color
//     </button>
//     <div>{props.color}</div>
//     {/* action */}
//     <button
//       onClick={() =>
//         props.dispatch({
//           type: "UPDATE_THEME_THEN_COLOR",
//           theme: "monokai",
//           color: "purple"
//         })
//       }
//     >
//       change theme then color
//     </button>
//   </div>
// );
//
// class App extends React.Component {
//   render() {
//     return (
//       <GlobalStoreContextProvider>
//         <GlobalStoreContext.Consumer>
//           {context => (
//             <SubComponent
//               theme={context.theme}
//               color={context.color}
//               dispatch={context.dispatch}
//             />
//           )}
//         </GlobalStoreContext.Consumer>
//       </GlobalStoreContextProvider>
//     );
//   }
// }
//
// export default App;


const ThemeContext = React.createContext('light');
class ThemeProvider extends React.Component {
  state = {
    theme: 'light'
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}


const LanguageContext = React.createContext('en');
class LanguageProvider extends React.Component {
  state = {
    language: "en"
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

const initialState = {
  todos: []
};

const todos = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: state.todos.concat([action.text])
      };

    default:
      return state;
  }
};

function AppProviders({ children }) {
  const store = createStore(initialState, todos);
  return (
    <Provider store={store}>
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </Provider>
  )
}

function ThemeAndLanguageConsumer({ children }) {
  return (
    <LanguageContext.Consumer>
      {language => (
        <ThemeContext.Consumer>
          {theme => children({ language, theme })}
        </ThemeContext.Consumer>
      )}
    </LanguageContext.Consumer>
  )
}

const TodoList = props => (
  <div>
    <div>
      {props.theme} and {props.language}
    </div>
    {props.todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
    <button onClick={props.handleClick}>add todo</button>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = {
  handleClick: () => ({
    type: 'ADD_TODO',
    text: 'Awesome'
  })
}

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoList
);

class App extends React.Component {
  render() {
    return (
      <AppProviders>
        <ThemeAndLanguageConsumer>
          {({ theme, language }) => (
            <ToDoListContainer theme={theme} language={language} />
          )}
        </ThemeAndLanguageConsumer>
      </AppProviders>
    );
  }
}

export default App;
