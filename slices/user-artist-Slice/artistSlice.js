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
  isAuth: false,
  artist: null,
  otp: {
    hash: "",
    email: "",
  },
  artistProfile: null,
  myPosts: [],
  sellerPosts: [],
  status: { type: STATUES.IDLE, message: null },
  sendingStatus: { type: STATUES.IDLE, message: null },
};

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    register(state, action) {},
    verifyOtp(state, action) {},

    login(state, action) {
      state.isAuth = true;
    },
    sendOtp(state, action) {
      const { hash, email } = action.payload;
      state.otp.hash = hash;
      state.otp.email = email;
    },
    resetPassword(state, action) {
      state.otp.hash = "";
      state.otp.email = "";
    },
    reportQuery(state, action) {},
    changePassword(state, action) {},
    me(state, action) {
      state.isAuth = true;
      state.artist = action.payload;
    },
    getMyPosts(state, action) {
      state.myPosts = action.payload;
    },
    getArtistPosts(state, action) {
      state.sellerPosts = action.payload;
    },
    getArtistProfile(state, action) {
      state.artistProfile = action.payload;
    },
    updateProfile(state, action) {},
    logout(state, action) {
      state.isAuth = false;
      state.artist = null;
    },
    setSendingStatus(state, action) {
      state.sendingStatus.type = action.payload.type;
      state.sendingStatus.message = action.payload.message;
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
  register,
  login,
  sendOtp,
  verifyOtp,
  resetPassword,
  changePassword,
  me,
  getMyPosts,
  reportQuery,
  updateProfile,
  getArtistPosts,
  getArtistProfile,
  logout,
  setStatus,
  setSendingStatus,
  clearAllErrors,
} = artistSlice.actions;
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

// artist login
export function artistLogin(email, password) {
  return async function artistLoginThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const { data } = await api.post("/login", { email, password });
      await storeToken(data.token);
      dispatch(login());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "artist login Successfully",
        })
      );
    } catch (error) {
      dispatch(
        setStatus({ type: STATUES.ERROR, message: error.response.data.message })
      );
    }
  };
}

// logout artist
export function artistLogout(email, password) {
  return async function artistLogoutThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      await removeToken();
      dispatch(logout());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "artist logout Successfully",
        })
      );
    } catch (error) {
      dispatch(
        setStatus({ type: STATUES.ERROR, message: error.response.data.message })
      );
    }
  };
}

// get logged user
export function loggedArtist() {
  return async function loggedArtistThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(me(data.user));
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "Logged user details",
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

// change password
export function change_password(passInfo) {
  return async function changePasswordThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.put("/me/change-password", passInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(changePassword());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "Password Reset Successfully",
        })
      );
    } catch (error) {
      dispatch(
        setStatus({ type: STATUES.ERROR, message: error.response.data.message })
      );
    }
  };
}

// get logged user
export function send_otp(email) {
  return async function sendOTPThunk(dispatch, getState) {
    dispatch(setSendingStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const { data } = await api.post("/send-otp", { email });
      dispatch(sendOtp(data));
      dispatch(
        setSendingStatus({
          type: STATUES.IDLE,
          message: `OTP send Successfully to the ${email}`,
        })
      );
    } catch (error) {
      dispatch(
        setSendingStatus({
          type: STATUES.ERROR,
          message: error.response.data.message,
        })
      );
    }
  };
}

export function verify_otp(info) {
  return async function verifyOTPThunk(dispatch, getState) {
    dispatch(setSendingStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const { data } = await api.post("/verify-otp", info);
      dispatch(verifyOtp());
      dispatch(
        setSendingStatus({
          type: STATUES.IDLE,
          message: `OTP Verified`,
        })
      );
    } catch (error) {
      dispatch(
        setSendingStatus({
          type: STATUES.ERROR,
          message: error.response.data.message,
        })
      );
    }
  };
}

export function reset_password(newPass, confirmPass, email) {
  return async function resetPasswordThunk(dispatch, getState) {
    dispatch(setSendingStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const { data } = await api.put("/resetPassword", {
        password: newPass,
        confirmPassword: confirmPass,
        email,
      });
      dispatch(resetPassword());
      dispatch(
        setSendingStatus({
          type: STATUES.IDLE,
          message: "Password Updated Successfully",
        })
      );
    } catch (error) {
      dispatch(
        setSendingStatus({
          type: STATUES.ERROR,
          message: error.response.data.message,
        })
      );
    }
  };
}

export function update_artist_profile(myForm) {
  return async function updateArtistProfileThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.put("/me/update-profile", myForm, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(updateProfile());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: data.message,
        })
      );
    } catch (error) {
      if (error.response) {
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

export function report_query(queryData) {
  return async function reportQueryThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.post("/report", queryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(reportQuery());
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: "Your query successfully send",
        })
      );
    } catch (error) {
      dispatch(
        setStatus({
          type: STATUES.ERROR,
          message: error.response.data.message,
        })
      );
    }
  };
}

export function my_posts() {
  return async function myPostsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get("/my/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getMyPosts(data.posts));
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: null,
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

export function artist_profile(id) {
  return async function artistProfileThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get(`/artist/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(getArtistProfile(data.artist));
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: null,
        })
      );
    } catch (error) {
      dispatch(
        setStatus({ type: STATUES.ERROR, message: error.response.data.message })
      );
    }
  };
}

export function artist_posts(id) {
  return async function artistPostsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUES.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get(`/artist-posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getArtistPosts(data.posts));
      dispatch(
        setStatus({
          type: STATUES.IDLE,
          message: null,
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
