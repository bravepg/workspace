import React from 'react';
import bindActionCreator from '../myRedux/bindActionCreators';
import propTypes from 'prop-types';

export default function connect(mapStateToprops, mapDispatchToProps) {
	return function(WrappedComponent) {
		return class ProxyComponent extends React.Component {
			static contextTypes = {
				store: propTypes.object,
			};

			constructor(props, context) {
				super(props);
				this.store = context.store
				this.state = mapStateToprops(this.store.getState());
			}

			componentWillMount() {
				this.store.subscribe(() => {
					this.setState(mapStateToprops(this.store.getState()));
				});
			}

			render() {
				let action = {};
				if (typeof mapDispatchToProps === 'function') {
					action = mapDispatchToProps(this.store.dispatch);
				} else if (typeof mapDispatchToProps === 'object') {
					action = bindActionCreator(mapDispatchToProps, this.store.dispatch)
				}

				return <WrappedComponent {...this.state} {...action} />
			}
		}
	}
}