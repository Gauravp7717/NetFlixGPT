import React, { useEffect } from "react";
import { LANG, LOGO, UserICON } from "../utils/Links";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../utils/userSlice";
import { toggleGptView } from "../utils/gptSlice";
import lang from "./LanguageConstant";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptView = useSelector((store) => store.gpt.showGptView);
  const user = useSelector((store) => store.user);

  // Sign out logic
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  // Firebase authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(adduser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, [dispatch, navigate]);

  // handled the gpt search logic for the button
  const handelGptSearch = () => {
    dispatch(toggleGptView());
  };

  const handelLang = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        px-8 py-4
        bg-transparent
      "
    >
      {/* Logo */}
      <img className="w-44 object-contain" src={LOGO} alt="App Logo" />

      {/* User Controls */}
      {user && (
        <div className="flex items-center gap-4">
          {showGptView && (
            <select
              className="
    bg-black bg-opacity-60 
    text-white 
    px-4 py-2 
    rounded-md 
    border border-gray-600 
    focus:outline-none focus:ring-2 focus:ring-red-600
    hover:bg-opacity-80 
    transition duration-200
    cursor-pointer
  "
              onChange={handelLang}
            >
              {LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {/* GPT Button */}
          <button
            className="py-2 px-4 m-2  bg-red-600 text-white rounded-md"
            onClick={handelGptSearch}
          >
            {showGptView ? "Home" : "GPT Button"}
          </button>

          {/* User Avatar */}
          <img
            className="w-10 h-10 rounded-full border border-white object-cover"
            src={UserICON}
            alt="User Icon"
          />

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="py-2 px-4 bg-red-600 text-white hover:bg-red-700 rounded-md transition duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
