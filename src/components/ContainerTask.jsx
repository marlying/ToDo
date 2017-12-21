import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import CheckIcon from './CheckIcon';
import Button from './Button';
import PubSub from 'pubsub-js';
import styled from 'styled-components';

const ContainerContent = styled.div`
	display: flex;
	align-items: center;
`;

const ContainerMargin = styled.div`
	margin-left: ${(props) => props.left ? props.left : '0'};
	margin-right: ${(props) => props.right ? props.right : '0'};
	margin-bottom: ${(props) => props.bottom ? props.bottom : '0'};
	margin-top: ${(props) => props.top ? props.top : '0'};
	display: inline-block;
`;

const Container = styled.div`
	box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.1);
	background-color: #FFFFFF;
	padding: 1em;
	padding-top: 0.25em;
	display: inline-block;
	width: 400px;
	box-sizing: border-box;
`;

class ContainerTask extends React.Component {

	static propTypes = {
		'id': PropTypes.number.isRequired,
		'text': PropTypes.string.isRequired,
		'complete': PropTypes.bool.isRequired,
	}

	constructor() {
		super();
		this._handleDelete = this._handleDelete.bind(this);
		this._handleConclude = this._handleConclude.bind(this);
	}

	_handleDelete(event) {
		PubSub.publish("DELETE_TASK", this.props.id);
	}

	_handleConclude() {
		PubSub.publish("CONCLUDE_TASK", this.props.id);
	}

	render() {
		let check;
		if(this.props.complete)
			check = <ContainerMargin left="1em"> <CheckIcon width="24px" fill="green"/> </ContainerMargin>;

		let button_complete;
		if(!this.props.complete)
			button_complete = (
				<ContainerMargin left="1em"> <Button label="Concluir" bgColor="#71bc60" onClick={this._handleConclude}/> </ContainerMargin>
			)

		return(
			<Container>
				<ContainerContent>
					<Text label={this.props.text}/>
					{check}
				</ContainerContent>
				<Button label="Cancelar" bgColor="#c44a5a" onClick={this._handleDelete}/>
				{button_complete}
			</Container>
		);
	}
}

export default ContainerTask;

