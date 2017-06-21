import {combineReducers} from 'redux';

export const example = (state = {}, action) => {
  switch (action.type) {
    //Would be a constant that matches the types in actions/index.js
    case 'request_hello':
      return Object.assign({}, state, {message: 'Requesting...'});
    case 'hello_success':
      return Object.assign({}, state, {message: action.message});
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  example
});

export default rootReducer;