import React from 'react';
import { ThemeContext, themes } from './ThemeContext';
import ThemeTogglerButton from './ThemeToggleButton';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                  state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            }));
        }
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        return (
            /* 生产者 */
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

export default App;