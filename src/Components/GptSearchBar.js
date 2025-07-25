import React from "react";
import { useSelector } from "react-redux";
import lang from "./LanguageConstant";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langkey].placeholder}
        />
        <button className=" m-2 text-white col-span-3 rounded-lg bg-red-500 py-2 px-4">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
