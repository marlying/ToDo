import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = applyMiddleware(createLogger(), thunk);

const initialState = {
  toDo: {
    tasks: [
      { text: 'Fazer relatórios', complete: true, id: 1 },
      { text: 'Aprender React', complete: false, id: 2 },
    ],
    filteredTasks: [
      { text: 'Fazer relatórios', complete: true, id: 1 },
      { text: 'Aprender React', complete: false, id: 2 },
    ],
  },
};

export default createStore(reducers, initialState, middleware);
