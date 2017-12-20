import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = applyMiddleware(createLogger(), thunk);

//initialState
export default createStore(reducers, middleware);
