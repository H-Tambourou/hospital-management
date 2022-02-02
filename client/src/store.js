import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import appointmentReducer from './reducers/appointmentReducer';
import authorizationReducer from './reducers/authorizationReducer';

const reducer = combineReducers({
  appointments: appointmentReducer,
  user: authorizationReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
