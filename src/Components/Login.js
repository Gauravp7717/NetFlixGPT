import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Links";

const Login = () => {
  const [getSignin, SetSignin] = useState(true);

  const toggler = () => {
    SetSignin(!getSignin);
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img className=" " src={BG_URL} alt="bg" />
      </div>
      <form className=" absolute p-12 w-3/12 my-24 mx-auto right-0 left-0 bg-black opacity-80 text-white rounded-lg">
        <h1 className=" font-bold  text-3xl py-4">
          {getSignin ? "Sign In" : "Sign Up"}
        </h1>
        {getSignin ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-2 my-2 w-full bg-gray-800"
          ></input>
        )}
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-2 my-2 w-full bg-gray-800"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <button
          type="submit"
          className=" p-4 my-4 w-full bg-red-700 rounded-lg"
        >
          {getSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className=" py-2">
          {getSignin ? "New to Netflix ? " : "Already registered ? "}
          <span className=" cursor-pointer" onClick={toggler}>
            {getSignin ? "Create account" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
