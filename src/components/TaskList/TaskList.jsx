import React from 'react';
import PropTypes from 'prop-types';
import ContainerTask from '../ContainerTask';
import { ContainerMargin, Container } from './styles';

class TaskList extends React.Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  // constructor() {
  //   super();
  //   console.log('constructor');
  //   this.state = {
  //     value: "",
  //   };

  //   this._handleChange = this._handleChange.bind(this);
  // }

  // _handleChange(value) {
  //   this.setState({ value });
  // }

  render(){
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
