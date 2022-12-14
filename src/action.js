import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "LOADING_POSTS" }); // dispatch loading action
    try {
      const res = await axios.get(
        "https://trending-trends.onrender.com/api/v1/posts"
      );
      const posts = await res.data.reverse();
      dispatch({ type: "FETCH_POSTS", posts });
    } catch (error) {
      console.error(error);
    }
  };
};
