import { createSlice } from "@reduxjs/toolkit";
import api from "../services/apiService";
import { getToken } from "../services/AsyncStorageService";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  orders: [],
  ordersHistory: [],
  status: { type: STATUS.IDLE, message: null },
};

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    placeOrder(state, action) {},
    getMyOrders(state, action) {
      state.orders = action.payload;
    },

    getMyOrdersHistory(state, action) {
      state.ordersHistory = action.payload;
    },

    updateOrder(state, action) {
      state.orders = action.payload;
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

export const {
  placeOrder,
  getMyOrders,
  updateOrder,
  getMyOrdersHistory,
  setStatus,
  clearAllErrors,
} = orderSlice.actions;
export default orderSlice.reducer;

//place Order
export function place_order(
  seller,
  orderItem,
  itemsPrice,
  taxPrice,
  shippingPrice,
  totalPrice,
  shippingInfo
) {
  return async function placeOrderThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.post(
        "/order/new",
        {
          seller,
          orderItem,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
          shippingInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(placeOrder());
      dispatch(setStatus({ type: STATUS.IDLE, message: "Order Placed" }));
    } catch (error) {
      if (error.response.data) {
        dispatch(
          setStatus({
            type: STATUS.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
}

//get Post
export function get_my_orders() {
  return async function getMyOrdersThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get("/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getMyOrders(data.orders));
      dispatch(setStatus({ type: STATUS.IDLE, message: data.message }));
    } catch (error) {
      if (error) {
        dispatch(
          setStatus({
            type: STATUS.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
}

export function get_my_orders_history() {
  return async function getMyOrdersHistoryThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get("/orders-history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getMyOrdersHistory(data.orders));
      dispatch(setStatus({ type: STATUS.IDLE, message: data.message }));
    } catch (error) {
      if (error) {
        dispatch(
          setStatus({
            type: STATUS.ERROR,
            message: error.response.data.message,
          })
        );
      }
    }
  };
}

//get Post Details
export function update_order(id) {
  return async function updateOrderThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.put(
        `/update-order/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateOrder(data.order));
      dispatch(setStatus({ type: STATUS.IDLE, message: "Order Delivered" }));
    } catch (error) {
      if (error) {
        dispatch(
          setStatus({
            type: STATUS.ERROR,
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
