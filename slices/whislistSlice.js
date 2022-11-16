import { createSlice } from "@reduxjs/toolkit";
import api from "../services/apiService";
import { getToken } from "../services/AsyncStorageService";

export const STATUES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  list: [],
  status: { type: STATUES.IDLE, message: null },
};

export const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    addItems(state, action) {},
    removeItem(state, action) {},
    getAllItems(state, action) {
      state.list = action.payload;
    },
    setStatus(state, action) {
      state.status.type = action.payload.type;
      state.status.message = action.payload.message;
    },
    clearAllErrors(state, action) {
      state.status = action.payload;
    },
  },
});

export const { getAllItems, removeItem, addItems, setStatus, clearAllErrors } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;

//  add item
export function add_item_to_wishlist(post_id) {
  return async function addItemToWishlistThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.post(
        `/me/add-item/${post_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(addItems());
      dispatch(
        setStatus({ type: STATUES.IDLE, message: "Item added Successfully" })
      );
    } catch (error) {
      if (error) {
        dispatch(
          setStatus({
            type: STATUES.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
}

//  get item
export function get_items() {
  return async function getItemsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get("/me/items", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getAllItems(data.lists));
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: null,
        })
      );
    } catch (error) {
      if (error) {
        dispatch(
          setStatus({
            type: STATUES.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
}

//  remove item
export function remove_item(postId) {
  return async function removeItemThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.delete(`/me/remove-item/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(removeItem());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "Item removed Successfully",
        })
      );
    } catch (error) {
      if (error.response.data) {
        dispatch(
          setStatus({
            type: STATUES.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
}

// clear Users
export function clear_all_errors() {
  return async function clearErrorsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.ERROR, message: null }));
  };
}
