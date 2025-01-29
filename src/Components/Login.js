import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Links";
import { checkValidation } from "../utils/Validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [getSignin, SetSignin] = useState(true);
  const [getvalid, setvalid] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const handelValidation = () => {
    const msg = checkValidation(email.current.value, password.current.value);
    setvalid(msg);
    if (msg) return;

    if (!getSignin) {
      // sign up page
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalid(errorCode + " -" + errorMessage);
          // ..
        });
    } else {
      // sign in page logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setvalid(errorCode + " -" + errorMessage);
        });
    }
  };

  const toggler = () => {
    SetSignin(!getSignin);
  };
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img className=" opacity-150 " src={BG_URL} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 w-3/12 my-40 mx-auto right-0 left-0 bg-black opacity-80 text-white rounded-lg"
      >
        <h1 className=" font-bold  text-3xl py-4">
          {getSignin ? "Sign In" : "Sign Up"}
        </h1>
        {getSignin ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-2 my-4 w-full bg-gray-800"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your Email"
          className="p-2 my-4 w-full bg-gray-800"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold ">{getvalid}</p>
        <button
          type="submit"
          className=" p-4 my-4 w-full bg-red-700 rounded-lg"
          onClick={handelValidation}
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
