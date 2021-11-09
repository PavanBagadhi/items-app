import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const intialState = {
  logoutButton: false,
};
const reducer = (state = intialState, action) => {
  if (action.type === 'LOGOUT') {
    return { logoutButton: false};
  }
  if (action.type === 'LOGIN') {
    return { logoutButton: true};
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
