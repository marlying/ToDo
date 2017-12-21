import { connect } from 'react-redux';
import ContainerTask from './ContainerTask';
import * as toDoActions from '../../redux/actions/toDoActions';

const mapStatetoProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(toDoActions.deleteTask(id)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(ContainerTask);
