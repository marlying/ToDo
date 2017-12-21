import { ADD_TASK, DELETE_TASK } from '../constants';

let id = 3;

export default (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.newTask);
    case DELETE_TASK:
      return deleteTask(state, action.id);
    default:
      return state;
  }
};

const deleteTask = (state, targetId) => {
  let tasks = state.tasks.slice();
  let filteredTasks = state.filteredTasks.slice();

  tasks.forEach((element, index, array) => {
    if (element.id === targetId) {
      tasks.splice(index, 1);
    }
  });
  filteredTasks.forEach((element, index, array) => {
    if (element.id === targetId) {
      filteredTasks.splice(index, 1);
    }
  });

  return {
    tasks,
    filteredTasks,
  };
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

