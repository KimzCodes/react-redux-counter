import { createSlice, createStore } from '@reduxjs/toolkit';

const initState = { value: 0, toggleCounter: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

const store = createStore(counterSlice.reducer);

export const { increase, decrease } = counterSlice.actions;
export default store;
