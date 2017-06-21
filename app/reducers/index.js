import {combineReducers} from 'redux';

export const some = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  some
});

export default rootReducer;