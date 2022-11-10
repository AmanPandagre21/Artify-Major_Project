import { createSlice } from "@reduxjs/toolkit";
import api from "../services/apiService";

export const STATUES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  category: [],
  status: { type: STATUES.LOADING, message: "loading" },
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories(state, action) {
      state.category = action.payload;
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

export const { clearAllErrors, setStatus, getCategories } =
  categorySlice.actions;
export default categorySlice.reducer;

export const get_categories = () => {
  return async function getCategoriesThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const { data } = await api.get("/categories");
      dispatch(getCategories(data.categories));
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "categories fetched Succesfully",
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
};

// clear Users
export function clear_all_errors() {
  return async function clearErrorsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.Idle, message: null }));
  };
}
