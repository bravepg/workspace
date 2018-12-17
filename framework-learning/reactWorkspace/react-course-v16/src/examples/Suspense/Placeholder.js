import React from 'react';

export default class Placeholder extends React.Component {
    state = {
        isLoading: false
    };

    componentDidCatch(error) {
        if (this._mounted) {
            console.log(error)
            if (typeof error.then === 'function') {
                this.setState({ isLoading: true });
                error.then(() => {
                    if (this._mounted) {
                        this.setState({ isLoading: false })
                    }
                });
            }
        }
    }
    componentDidMount() {
        this._mounted = true;
    }
    componentWillUnmount() {
        console.log('unm')
        this._mounted = false;
    }


    render() {
        const { children } = this.props;
        const { isLoading } = this.state;

        return isLoading ? '加载数据中，请稍后...' : children;
    }
}