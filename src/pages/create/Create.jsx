import { addDoc, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doBlog } from "../../redux/actionCreators/blogActionCreator";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const createBlog = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      author: user.name,
      content: content,
      tag: tag,
    };
    dispatch(doBlog(data, setSuccess));
  };
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="h-screen w-full flex-1 bg-white p-10 space-y-6 overflow-y-auto">
        <div className="  space-y-6 px-10">
          <p className="text-lg font-medium">Title</p>
          <input
            type="text"
            placeholder="Enter a title"
            className="flex-1 bg-white h-12 w-full"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="  space-y-6 px-10">
          <p className="text-lg font-medium">Add Tag</p>
          <input
            type="text"
            placeholder="Add a Tag"
            className="flex-1 bg-white h-12 w-full"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </div>
        <div className=" space-y-6 px-10">
          <p className="text-lg font-medium">Content</p>
          <textarea
            type="text"
            placeholder="write your content...."
            className="flex-1 bg-white h-64 w-full"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-800 text-white h-10 w-1/5 rounded-full hover:bg-blue-600"
            onClick={createBlog}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
