import { createStore } from 'redux';

const initState = { value: 0 };
const counterReducer = (state = initState, action) => {
  return state;
};

//app init -> run store -> action(non)-> counter reducer -> 0

const store = createStore(counterReducer);

export default store;
