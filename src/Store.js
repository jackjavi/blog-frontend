import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Define the initial state of the store
const initialState = {
  posts: [],
};

// Define the reducer to handle actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

// Create the store with the reducer
const store = legacy_createStore(reducer, applyMiddleware(thunk));

export default store;
