import { ADD_TASK, DELETE_TASK } from '../constants';

let id = 3;

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.newTask);
    case DELETE_TASK:
      return {
        tasks: deleteTask(state.tasks, action.id),
        filteredTasks: deleteTask(state.filteredTasks, action.id),
      };
    default:
      return state;
  }
};

const deleteTask = (tasks, targetId) => {
  return tasks.filter((element) => {
    if (element.id !== targetId) {
      return element;
    }
  });
};

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

