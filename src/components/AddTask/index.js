import { connect } from 'react-redux';

import AddTask from './AddTask';
import * as toDoActions from '../../redux/actions/toDoActions';


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onAdd: newTask => dispatch(toDoActions.addTask(newTask)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask);
