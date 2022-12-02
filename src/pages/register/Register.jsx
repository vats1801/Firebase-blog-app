import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signUpUser } from "../../redux/actionCreators/authActionCreator";

export const Register = () => {
  const [username, setUserName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    dispatch(signUpUser(username, registerEmail, registerPassword, setSuccess));
  };

  useEffect(() => {
    if (success) navigate("/");
  }, [success]);

  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="w-1/4 flex flex-col p-5 space-y-6 shadow-xl  items-center">
        <input
          type="text"
          placeholder="Username"
          className=" bg-white border-blue-800 border-2 h-12 p-2 w-full"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className=" bg-white h-12  border-blue-800 border-2 p-2 w-full"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className=" bg-white  border-blue-800 border-2 h-12 p-2 w-full"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button
          onClick={register}
          className="bg-blue-800 text-white h-12 w-full"
        >
          Register
        </button>

        <p className="text-lg">
          Already have an account ?{" "}
          <span className="text-blue-800">
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
