import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"; // Update import
const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
export default store;
