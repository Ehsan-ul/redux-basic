const redux = require('redux');

// state
const initState = {
  num: 0,
};

// reducer
const rootReducer = (state = initState, action) => {
  if (action.type === 'INCREMENT_NUM') {
    return {
      ...state,
      num: state.num + 1,
    };
  }

  if (action.type === 'ADD_NUM') {
    return {
      ...state,
      num: state.num + action.value,
    };
  }

  return state;
};

// crate store
const store = redux.createStore(rootReducer);
// console.log(store.getState());

// dispatching action
store.dispatch({
  type: 'INCREMENT_NUM', //always uppercase e likhte hoboe
});

store.dispatch({
  type: 'ADD_NUM',
  value: 34,
});

console.log(store.getState());
