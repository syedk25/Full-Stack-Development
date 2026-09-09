import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: { value: 2 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue:(state,action)=>{
     state.value+=action.payload 
     console.log(action.payload)
     console.log(action.type)
    }
  }
});

export const { increment, decrement,incrementByValue } = CounterSlice.actions;
export default CounterSlice.reducer;
