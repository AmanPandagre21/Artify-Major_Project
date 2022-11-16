import { createSlice } from "@reduxjs/toolkit";
import api from "../services/apiService";
import { getToken } from "../services/AsyncStorageService";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  posts: [],
  post: null,
  status: { type: STATUS.IDLE, message: null },
};

export const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    addPost(state, action) {},
    getPosts(state, action) {
      state.posts = action.payload;
    },

    postDetails(state, action) {
      state.post = action.payload;
    },

    likeAndDislike(state, action) {},

    deletePost(state, action) {},

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
  addPost,
  getPosts,
  postDetails,
  likeAndDislike,
  deletePost,
  setStatus,
  clearAllErrors,
} = postSlice.actions;
export default postSlice.reducer;

//add Post
export function add_post(formData) {
  return async function addPostThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.post("/me/create-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(addPost());
      dispatch(setStatus({ type: STATUS.IDLE, message: data.status }));
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

//get Post
export function get_posts(keyword = "") {
  return async function getPostsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get(`/posts?keyword=${keyword}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getPosts(data.posts));
      dispatch(setStatus({ type: STATUS.IDLE, message: null }));
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
export function get_post_details(id) {
  return async function getPostDetailsThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();
      const { data } = await api.get(`/post-details/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(postDetails(data.post));
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

//like and dislike post
export function like_and_dislike(postID) {
  return async function likeAndDislikeThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();

      const { data } = await api.get(`/post/${postID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(likeAndDislike());

      dispatch(setStatus({ type: STATUS.IDLE, message: null }));
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

//delete post
export function delete_post(postID) {
  return async function deletePostThunk(dispatch, getState) {
    dispatch(setStatus({ type: STATUS.LOADING, message: "Loading" }));
    try {
      const token = await getToken();

      const { data } = await api.delete(`/post/${postID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(deletePost());

      dispatch(setStatus({ type: STATUS.IDLE, message: "Post Deleted" }));
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
