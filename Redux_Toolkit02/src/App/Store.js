import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});
