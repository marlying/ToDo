import React from 'react';
import Button from './Button';
import Input from './Input';
import PubSub from 'pubsub-js';
import styled from 'styled-components';

import RaisedButton from 'material-ui/RaisedButton';

const Container = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	width: 400px;
`;

class AddTask extends React.Component {

	constructor() {
		super();
		this.state = {
			'value': '',
		}

		this._handleChange = this._handleChange.bind(this);
		this._handleAdd = this._handleAdd.bind(this);
	}

	_handleChange(value) {
		this.setState({'value': value});
	}

	_handleAdd() { //to avisando para o app
		PubSub.publish("ADD_TASK", this.state.value);
		this.setState({'value': ""});
	}

	

	render(){
		const style = {
			margin: 12,
		  };
		  
		return(
			<Container>
				<Input mudou={this._handleChange} value={this.state.value}/>
				<RaisedButton label="Adicionar" secondary onClick={this._handleAdd} style={style} />
				{/* <Button label="Adicionar" bgColor="#b2757d" onClick={this._handleAdd}/> */}
			</Container>
		);
	}
}

export default AddTask;