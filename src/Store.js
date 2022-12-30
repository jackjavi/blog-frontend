import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Define the initial state of the store
const initialState = {
  posts: [],
  loading: false,
};

// Define the reducer to handle actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_POSTS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.posts,
        loading: false,
      };
    default:
      return state;
  }
};

// Create the store with the reducer
const store = legacy_createStore(reducer, applyMiddleware(thunk));

export default store;
