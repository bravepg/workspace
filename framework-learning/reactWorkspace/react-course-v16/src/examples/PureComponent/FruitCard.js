import React from 'react';

// 这里当然推荐使用无状态组件，仅为了演示 PureComponent
export default class FruitCard extends React.PureComponent {
    render() {
        const { title } = this.props;
        console.log(`渲染 => Rendered FruitCard: ${title}.`)
        return (
            <div>{title}</div>
        )
    }
}