import { ADD_TASK } from '../constants';

//explain thunk
export const addTask = new_task => ({
  type: ADD_TASK,
  payload: new_task,
});
