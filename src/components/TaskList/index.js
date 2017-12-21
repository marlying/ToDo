import { connect } from 'react-redux';
import TaskList from './TaskList';

const mapStateToProps = state => ({
  tasks: state.toDo.tasks,
});

export default connect(
  mapStateToProps,
  null,
)(TaskList);
