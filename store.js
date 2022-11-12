import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./slices/user-artist-Slice/artistSlice";
import categoryReducer from "./slices/categorySlice";
import postsReducer from "./slices/postSlice";
import wishlistReducer from "./slices/whislistSlice";
import orderReducer from "./slices/orderSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    artist: artistReducer,
    category: categoryReducer,
    posts: postsReducer,
    wishlist: wishlistReducer,
    order: orderSlice,
  },
});
