import { ADD_TASK } from '../constants';

let id = 3;

const addTask = (state, value) => {
  let tasks = state.tasks.slice();
  let filteredTasks = state.filteredTasks.slice();

  tasks.push({ text: value, complete: false, id: id++ });
  filteredTasks.push({ text: value, complete: false, id });
  return {
    tasks,
    filteredTasks,
  };
}

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.newTask);
    default:
      return state;
  }
};
