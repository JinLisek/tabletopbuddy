import { configureStore } from "@reduxjs/toolkit";
const initialState = {};

const counterReducer = (state = initialState) => {
  return state;
};

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
