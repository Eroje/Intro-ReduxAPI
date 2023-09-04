import { createStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

export const store = createStore(countReducer);

// Dispatch your actions here.
store.dispatch({type: 'increment'}); //Prints 1 (0 + 1)
store.dispatch({type: 'increment'}); //Prints 2 (1 + 1)
//console.log(store.getState());

store.dispatch({type: 'decrement'}); //Prints 1 (2 - 1)
store.dispatch({type: 'decrement'}); //Prints 0 (1 - 1)
store.dispatch({type: 'decrement'}); //Prints -1 (0 - 1)
console.log(store.getState());
