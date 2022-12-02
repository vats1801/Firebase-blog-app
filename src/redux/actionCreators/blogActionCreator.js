import * as types from "../actions/blogActions";
import { database } from "../../firebase-config";

const setLoading = (payload) => {
  return {
    type: types.SET_LOADING,
    payload,
  };
};

const addBlog = (payload) => {
  return {
    type: types.ADD_BLOG,
    payload,
  };
};

const getBlogs = (payload) => {
  return {
    type: types.SET_BLOGS,
    payload,
  };
};

export const doBlog = (data, setSuccess) => (dispatch) => {
  database.blogs
    .add(data)
    .then((blog) => {
      setSuccess(true);
      dispatch(addBlog(data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchblogs = () => (dispatch) => {
  setLoading(true);

  database.blogs
    .get()
    .then((blogs) => {
      const allBlogs = [];
      blogs.forEach((blog) => {
        const data = { blogData: blog.data(), blogId: blog.id };
        allBlogs.push(data);
      });

      dispatch(getBlogs(allBlogs));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      alert(err);
    });
};
