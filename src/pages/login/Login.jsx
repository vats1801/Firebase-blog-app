import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/actionCreators/authActionCreator";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please fill in all details");
      return;
    }
    dispatch(signInUser(loginEmail, loginPassword, setSuccess));
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="w-1/4 flex flex-col p-5 space-y-6 shadow-xl items-center">
        <input
          type="email"
          placeholder="Email"
          className=" bg-white h-12  border-blue-800 border-2 p-2 w-full"
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className=" bg-white h-12  border-blue-800 border-2 p-2 w-full"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
        <button
          className="bg-blue-800 text-white h-12 w-full"
          onClick={handleLogin}
        >
          Log in
        </button>

        <p className="text-lg">
          Does not have an account?
          <span className="text-blue-800">
            <Link to="/register"> Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
