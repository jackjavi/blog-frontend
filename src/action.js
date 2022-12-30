import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(
        "https://trending-trends.onrender.com/api/v1/posts"
      );
      const posts = await res.data;
      dispatch({ type: "FETCH_POSTS", posts });
    } catch (error) {
      console.error(error);
    }
  };
};
