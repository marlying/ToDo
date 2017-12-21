import { ADD_TASK } from '../constants';

//explain thunk
export const addTask = newTask => ({
  type: ADD_TASK,
  newTask,
});
