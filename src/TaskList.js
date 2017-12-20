import React from 'react';
import PropTypes from 'prop-types';
import ContainerTask from './ContainerTask';
import styled from 'styled-components';

const Container = styled.div`
	min-width: 400px;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const ContainerMargin = styled.div`
	margin-left: ${(props) => props.left ? props.left : '0'};
	margin-right: ${(props) => props.right ? props.right : '0'};
	margin-bottom: ${(props) => props.bottom ? props.bottom : '0'};
	margin-top: ${(props) => props.top ? props.top : '0'};
	display: inline-block;
`;

class TaskList extends React.Component{
	
	static propTypes = {
		'tasks': PropTypes.arrayOf(PropTypes.object).isRequired,
	}

	constructor(){
		super();
		console.log('constructor');
		this.state = {
			'value': "",
		}

		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange(value) {
		this.setState({value: value});
	}

	componentWillMount(){
		console.log('will mount');
	  }
	
	  componentDidMount(){
		console.log('did mount');
		 
	  }
	
	  componentWillReceiveProps(){
		console.log('will receive props');
	  }
	
	  componentWillUpdate(nextProps, nextState){
		console.log('will update');
		// throw new Error();
	  }
	
	  shouldComponentUpdate(nextProps, nextState){
		console.log('should update');
		return true;
	}
	
	  componentDidUpdate(prevProps, prevState){
		console.log('did update');
	  }
	
	  componentWillUnmount(){
		console.log('will unmount');
	  }
	
	  componentDidCatch(error, info){
		console.log('did catch');
	  }

	render(){
		console.log('render');
		let list = this.props.tasks.map((task, index) => { 
			return(
				<ContainerMargin key={task.id} bottom="1em">
					<ContainerTask 
						text={task.text} 
						complete={task.complete}
						key={task.id}
						id={task.id}
					/>
				</ContainerMargin>
			);
		})

		return(
			<Container>
				{list}
			</Container>
		);
	}
}

export default TaskList;