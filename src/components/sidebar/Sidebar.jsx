import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHome, AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineCreate } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../redux/actionCreators/authActionCreator";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(signOutUser(setSuccess));
  };

  useEffect(() => {
    if (success) navigate("/login");
  }, [success]);

  return (
    <div
      className={` bg-blue-900 h-screen px-5 relative duration-300 ${
        open ? " w-64" : "w-20"
      } `}
    >
      <div className="flex gap-x-4 items-center h-16 ">
        <img
          alt=""
          src="https://st2.depositphotos.com/1006689/10081/v/450/depositphotos_100819778-stock-illustration-lightbulb-idea-vector-icon.jpg"
          className={`cursor-pointer duration-500 h-10 w-10 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-lg duration-200 ${
            !open && "hidden"
          }`}
        >
          InsightFull
        </h1>
      </div>
      <div>
        <ul className="pt-6 space-y-6">
          <Link to="/">
            <li
              className={
                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:bg-blue-400 hover:text-black"
              }
            >
              <AiOutlineHome size={28} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Home
              </span>
            </li>
          </Link>
          <li
            className={
              "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:bg-blue-400 hover:text-black"
            }
          >
            <MdOutlineCreate size={28} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <Link to="/create">Create</Link>
            </span>
          </li>
          <li
            className={
              "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:bg-blue-400 hover:text-black"
            }
          >
            <MdOutlineArticle size={28} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Your blogs
            </span>
          </li>
          <li
            className={
              "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:bg-blue-400 hover:text-black"
            }
          >
            <BsBookmark size={28} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Bookmark
            </span>
          </li>
          <li
            className={
              "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:bg-blue-400 hover:text-black"
            }
            onClick={handleLogout}
          >
            <IoLogOutOutline size={28} />

            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Log out
            </span>
          </li>
          <li
            className={
              "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:bg-blue-400 hover:text-black"
            }
            onClick={() => setOpen(!open)}
          >
            <AiOutlineArrowRight size={28} />
          </li>
        </ul>
      </div>
    </div>
  );
};
