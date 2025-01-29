import React, { useEffect } from "react";
import { LOGO, UserICON } from "../utils/Links";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen">
      <img className=" w-44 " src={LOGO} alt="logo" />
      {user && (
        <div className=" m-2">
          <img
            className="w-10 h-12 py-1 ml-4 rounded-lg "
            src={UserICON}
            alt="userICon"
          />

          <button
            onClick={handelSignOut}
            className="text-white bg-red-700 hover:bg-red-800 rounded-md px-[5px]"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
