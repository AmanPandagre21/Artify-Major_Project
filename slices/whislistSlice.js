import { createSlice } from "@reduxjs/toolkit";
import api from "../../services/apiService";
import {
  getToken,
  removeToken,
  storeToken,
} from "../../services/AsyncStorageService";

export const STATUES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  list: null,
  status: { type: STATUES.IDLE, message: null },
};

export const artistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem(state, action) {},
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

export const { getAllItems, removeItem, addItem, setStatus, clearAllErrors } =
  artistSlice.actions;
export default artistSlice.reducer;

// artist Register
export function artistRegister(name, email, password, confirmPassword) {
  return async function artistRegistrationThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const { data } = await api.post(
        "/register",
        name,
        email,
        password,
        confirmPassword
      );
      dispatch(register());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "artist register Successfully",
        })
      );
    } catch (error) {
      dispatch(
        setStatus({ type: STATUES.ERROR, message: error.response.data.message })
      );
    }
  };
}

// clear Users
export function clear_all_errors() {
  return async function clearErrorsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.ERROR, message: null }));
  };
}
