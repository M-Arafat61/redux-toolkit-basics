import { configureStore } from "@reduxjs/toolkit";
import myCustomTodoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: myCustomTodoReducer,
});
