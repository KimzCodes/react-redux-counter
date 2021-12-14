import { createSlice } from '@reduxjs/toolkit';

const initState = { value: 0 };

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

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
