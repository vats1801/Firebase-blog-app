import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Blog } from "../../components/blog/Blog";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchblogs } from "../../redux/actionCreators/blogActionCreator";

export const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.blog.isLoading);
  const { isAuthenticated, blogs } = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,

    blogs: state.blog.blogs,
  }));
  console.log(isAuthenticated);
  console.log(blogs);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    else if (isLoading) dispatch(fetchblogs());
  }, [isLoading, dispatch]);

  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="overflow-y-auto flex-1 bg-gray-100">
        <Navbar />
        <div className=" w-full flex flex-wrap p-5 justify-center gap-5">
          {blogs[0]?.map((blog) => (
            <Link to={`/blog/${blog.blogId}`}>
              <Blog />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
