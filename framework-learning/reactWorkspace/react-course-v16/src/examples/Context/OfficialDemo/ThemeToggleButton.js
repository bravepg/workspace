import React from 'react';
import { ThemeContext } from './ThemeContext';

/**
 * 创建消费者
 * 这是一个纯函数的写法
 * 如果我们想在生命周期中获取 Context 相关信息
 * 我们可以对代码进行改造
 */
// function ThemeTogglerButton() {
//     return (
//         <ThemeContext.Consumer>
//             {({ theme, toggleTheme }) => (
//                 <Button toggleTheme={toggleTheme}
//                     background={theme.background} />
//             )}
//         </ThemeContext.Consumer>
//     );
// }

/**
 * 生命周期中访问 context
 */
// class Button extends React.Component {
//     componentDidMount() {
//         // ThemeContext value is this.props.theme
//         console.log('this.props.theme', this.props);
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//         console.log('prevProps.theme', prevProps);
//         // Previous ThemeContext value is prevProps.theme
//         // New ThemeContext value is this.props.theme
//     }
//     render() {
//         const {toggleTheme, background} = this.props;
//         return (
//             <button
//                 onClick={toggleTheme}
//                 style={{backgroundColor: background}}>
//                 Toggle me
//             </button>
//         );
//     }
// }

/**
 * 高阶组件访问
 */
export function withTheme(Component) {
    return function ThemedComponent(props) {
        console.log(props);
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    <Component {...props} toggleTheme={toggleTheme}
                        background={theme.background} />
                )}
            </ThemeContext.Consumer>
        );
    }
}

function Button({background, toggleTheme, ...rest}) {
    return <button style={{backgroundColor: background}} onClick={toggleTheme} {...rest}>Toggle me</button>;
}

export default () => {
    return withTheme(Button)({ name: 'gao' });
};

// export default withTheme(Button);