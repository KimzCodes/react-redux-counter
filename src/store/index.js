import { createStore } from 'redux';

const initState = { value: 0 };
const counterReducer = (state = initState, action) => {
  if (action.type === 'increase') {
    return { ...state, value: state.value + action.payload };
  }

  if (action.type === 'decrease') {
    return { ...state, value: state.value - action.payload };
  }

  return state;
};

//app init -> run store -> action(non)-> counter reducer -> 0
//user click increase -> action(increase) -> counter reducer -> 1

const store = createStore(counterReducer);

export default store;
