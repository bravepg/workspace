/**
 * 关于 react 性能优化
 */

import React from 'react';

class ListOfWords extends React.Component {
    shouldComponentUpdate(nextProps) {
        // 由于 this.props 和 nextProps 的 words 都是对父组件的 state 的引用，因此值是一致的
        // 这样的比较永远是无效的
        console.log('this.props', this.props);
        console.log('nextProps', nextProps);
        return this.props.words !== nextProps.words;
    }
    // PureComponent 是对 props 和 state 在 shouldComponentUpdate 进行的浅比较
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar'],
            data: {
                num: 1
            }
        };
    }

    handleClick = () => {
        // 采用这种方式，传入 ListOfWords 组件的值永远是引用
        // 因此子组件 shouldComponentUpdate 永远返回 true
        // const words = this.state.words;
        // words.push('marklar');
        // const data = this.state.data;
        // data.num++;
        // this.setState({ words: words, data: data });

        // 解决方式1: 改变 state
        this.setState(state => ({
            words: state.words.concat(['marklar']),
            data: {
                num: state.data.num++
            }
        }));

        // 解决方式2: 使用不可变的数据结构
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <ListOfWords words={this.state.words} data={this.state.data} />
            </div>
        )
    }
}

export default WordAdder;