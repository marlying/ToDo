import { ADD_TASK } from '../constants';

let id = 3;

const addTask = (state, value) => {
  const newTask = { text: value, complete: false, id: id++ };

  return {
    tasks: [
      ...state.tasks,
      newTask,
    ],
    filteredTasks: [
      ...state.filteredTasks,
      newTask,
    ],
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.newTask);
    default:
      return state;
  }
};
