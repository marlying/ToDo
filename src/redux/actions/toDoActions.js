import { ADD_TASK, DELETE_TASK } from '../constants';

//explain thunk
export const addTask = newTask => ({
  type: ADD_TASK,
  newTask,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  id,
});
