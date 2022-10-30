import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./slices/user-artist-Slice/artistSlice";
import categoryReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: { artist: artistReducer, category: categoryReducer },
});
