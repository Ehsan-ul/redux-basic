const redux = require('redux');

// state
const initState = {
  num: 0,
};

// reducer
const rootReducer = (state = initState, action) => {
  return state;
};

// crate store
const store = redux.createStore(rootReducer);
console.log(store.getState());
