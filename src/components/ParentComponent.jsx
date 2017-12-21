import React from 'react';
import ChildrenComponent from './ChildrenComponent';

class ParentComponent extends React.Component {
	
	_handleChildren(msg) {
		console.log("Eu pai recebi a mensagem: " + msg);
	}

	render() {
		return(
	 		<div> <ChildrenComponent funcao={this._handleChildren}/> </div>
	 	);
	}
}

export default ParentComponent;