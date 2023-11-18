import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../store/slice/popupSlice";

export default configureStore({
  reducer: {
    popup: popupReducer,
  },
});
