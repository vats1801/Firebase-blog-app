import * as types from "../actions/blogActions";

const initialState = {
  isLoading: true,
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case types.SET_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};

export default blogReducer;
