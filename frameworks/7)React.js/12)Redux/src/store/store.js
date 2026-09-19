import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterSlice";

export const store = configureStore({
  reducer: {
    count: CounterSlice.reducer
  }
});
