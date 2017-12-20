import React from 'react';
import PropTypes from 'prop-types';

class ChildrenComponent extends React.Component {
	
	static propTypes = {
		'funcao': PropTypes.func,
	}

	_handleClick() {
		this.props.funcao("oi pai!");
	}

	render() {
		return(
	 		<div onClick={this._handleClick.bind(this)}> SOU O FILHO </div>
	 	);
	}
}

export default ChildrenComponent;